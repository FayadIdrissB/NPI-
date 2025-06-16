const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async (req, res) => {
  const { firstName, lastName, gender, phone } = req.body;

  if (!firstName || !lastName || !gender || !phone) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.EMAIL_RECEIVER.toString(),
      subject: `Nouveau contact: ${firstName} ${lastName}`,
      html: `
        <p><strong>Prénom:</strong> ${firstName}</p>
        <p><strong>Nom:</strong> ${lastName}</p>
        <p><strong>Sexe:</strong> ${gender}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
      `,
    });

    if (error) {
      console.error('❌ Erreur email:', error);
      return res.status(500).json({ error: 'Échec de l\'envoi de l\'email.' });
    }

    console.log('✅ Email envoyé :', data);
    res.status(200).json({
      message: 'Email envoyé avec succès.',
      event: {
        date: '18/06/2025',
        hour: '14h00',
        address: '123 Rue du Développement, Paris'
      }
    });
  } catch (err) {
    console.error('❌ Erreur inattendue:', err);
    res.status(500).json({ error: 'Erreur serveur inattendue.' });
  }
};

module.exports = { sendContactEmail };