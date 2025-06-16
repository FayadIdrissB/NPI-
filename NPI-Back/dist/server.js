"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const app_1 = __importDefault(require("./app"));
const startServer = () => {
    const PORT = Number(process.env.PORT) || 5005;
    console.log("✅ RESEND_API_KEY:", process.env.RESEND_API_KEY);
    app_1.default.listen(PORT, '0.0.0.0', () => {
        console.log(`🚀 Serveur en ligne sur http://localhost:${PORT}`);
    });
};
exports.startServer = startServer;
