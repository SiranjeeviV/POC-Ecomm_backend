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
exports.getUser = exports.verifyLogin = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});
const Login = (0, mongoose_1.model)("login", userSchema);
const verifyLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const login = new Login(req.body);
    res.send(req.body);
    // login.save((err, results) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     res
    //       .status(201)
    //       .json({ message: "login successful",results });
    //   }
    // });
});
exports.verifyLogin = verifyLogin;
const getUser = (req, res, next) => {
    // res.json({ users: USERS });
};
exports.getUser = getUser;
