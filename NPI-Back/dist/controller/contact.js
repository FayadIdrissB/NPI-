"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleContact = void 0;
const contact_1 = __importDefault(require("../models/contact"));
const mailer_1 = require("../utils/mailer");
const handleContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const message = new contact_1.default({ firstName, lastName, gender, phone });
        yield message.save();
        if (!mailer_1.resend) {
            console.warn("Mailer désactivé. Aucune tentative d'envoi.");
            res.status(503).json({ message: 'Service de mail désactivé temporairement.' });
            return;
        }
        yield mailer_1.resend.emails.send({
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
    }
    catch (err) {
        console.error('❌ Erreur dans handleContact:', err);
        res.status(500).json({ message: 'Erreur serveur', error: err });
        return;
    }
});
exports.handleContact = handleContact;
