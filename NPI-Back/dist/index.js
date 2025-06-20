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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./config/db");
const server_1 = require("./server");
console.log('🟢 Lancement du backend...');
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Connexion à la base de données
        console.log('🟢 Lancement du backend...');
        yield (0, db_1.connectDB)();
        // Lancement du serveur
        (0, server_1.startServer)();
    }
    catch (error) {
        console.error('❌ Erreur critique au démarrage :', error);
        process.exit(1);
    }
}))();
