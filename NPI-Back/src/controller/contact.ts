import { RequestHandler } from 'express';
import Message from '../models/contact';
import { resend } from '../utils/mailer';

export const handleContact: RequestHandler = async (req, res) => {
  console.log('🟡 Données reçues :', req.body);
  const { firstName, lastName, gender, phone } = req.body;

  const toEmail = process.env.EMAIL_RECEIVER;
  const fromEmail = process.env.EMAIL_USER;

  console.log('📧 toEmail =', toEmail);
  console.log('📧 fromEmail =', fromEmail);

  if (!toEmail) {
    res.status(500).json({ message: 'Adresse email destinataire non configurée' });
    return;
  }

  if (!fromEmail) {
    res.status(500).json({ message: 'Adresse email expéditeur non configurée' });
    return;
  }

  try {
    const message = new Message({ firstName, lastName, gender, phone });
    await message.save();

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: toEmail,
      subject: 'Nouvelle demande de contact',
      html: `
        <h2>Nouvelle demande :</h2>
        <p><strong>Prénom :</strong> ${firstName}</p>
        <p><strong>Nom :</strong> ${lastName}</p>
        <p><strong>Sexe :</strong> ${gender}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><em>Reçue le ${new Date().toLocaleString()}</em></p>
      `,
    });

    res.status(200).json({
      message: 'Message envoyé avec succès',
      event: {
        date: '29 mai 2025',
        hour: '11h00 à 19h00',
        address: '3 Rue Frédéric Joliot Curie, 93270 Sevran',
      }
    });
  } catch (err) {
    console.error('❌ Erreur dans handleContact:', err);
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
};