"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
}));
app.options('*', (0, cors_1.default)());
app.use(express_1.default.json());
// Debug : afficher toutes les routes chargées
if (app._router && app._router.stack) {
    app._router.stack.forEach((middleware) => {
        if (middleware.route) {
            console.log("🧪 RESEND_API_KEY:", process.env.RESEND_API_KEY);
            console.log(`🛣️ Route: ${middleware.route.path}`);
        }
        else if (middleware.name === 'router') {
            middleware.handle.stack.forEach((handler) => {
                var _a;
                console.log(`🛣️ Route (child): ${(_a = handler.route) === null || _a === void 0 ? void 0 : _a.path}`);
            });
        }
    });
}
app.get('/', (req, res) => {
    res.send('🚀 Backend en ligne !');
});
exports.default = app;
