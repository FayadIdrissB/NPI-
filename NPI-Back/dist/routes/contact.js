"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_1 = require("../controller/contact");
const router = (0, express_1.Router)();
// Route POST pour soumettre le formulaire de contact
router.post('/contact', contact_1.handleContact);
// Route GET pour tester la route de contact
router.get('/ping', (req, res) => {
    res.send('pong');
});
console.log("✔ contactRoutes loaded");
exports.default = router;
