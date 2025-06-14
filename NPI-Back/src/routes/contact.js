"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_1 = require("../controller/contact");
const router = (0, express_1.Router)();
router.post('/contact', contact_1.handleContact);
exports.default = router;
