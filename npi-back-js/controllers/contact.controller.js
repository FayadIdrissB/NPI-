const nodemailer = require('nodemailer');

const sendContactEmail = async (req, res) => {
  const { firstName, lastName, gender, phone } = req.body;

  if (!firstName || !lastName || !gender || !phone) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Nouveau message de ${firstName} ${lastName}`,
      text: `Prénom: ${firstName}\nNom: ${lastName}\nSexe: ${gender}\nTéléphone: ${phone}`,
    });

    res.status(200).json({ message: 'Email envoyé avec succès.' });
  } catch (err) {
    console.error('Erreur email:', err);
    res.status(500).json({ error: 'Échec de l\'envoi de l\'email.' });
  }
};

module.exports = { sendContactEmail };