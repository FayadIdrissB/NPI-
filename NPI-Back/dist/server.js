"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const app_1 = __importDefault(require("./app"));
const startServer = () => {
    const PORT = process.env.PORT || 5005;
    app_1.default.listen(PORT, () => {
        console.log(`🚀 Serveur en ligne sur http://localhost:${PORT}`);
    });
};
exports.startServer = startServer;
