"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const cartRoutes_1 = __importDefault(require("./routes/cartRoutes"));
const body_parser_1 = require("body-parser");
const db_connection_1 = __importDefault(require("./config/db_connection"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, cors_1.default)());
const port = 8080;
(0, db_connection_1.default)();
app.use("/user", userRoutes_1.default);
app.use("/product", productsRoutes_1.default);
app.use("/login", loginRoutes_1.default);
app.use("/cart", cartRoutes_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(port, () => {
    console.log("listening to port " + port);
});
