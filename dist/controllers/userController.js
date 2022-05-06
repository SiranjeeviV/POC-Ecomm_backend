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
exports.getUser = exports.createUser = void 0;
const mongoose_1 = require("mongoose");
const crypto_js_1 = __importDefault(require("crypto-js"));
// var bytes  = CryptoJS.AES.decrypt('U2FsdGVkX18V964llGtD2tCBcqzBVxWx5NVOCeEa7ew=', 'secret key 123');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);
// console.log(originalText)
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: false },
    email: { type: String, required: true },
    phone: { type: Number, required: false },
    password: { type: String, required: true },
    address: { type: String, required: false },
});
const User = (0, mongoose_1.model)("users", userSchema);
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let password = crypto_js_1.default.AES.encrypt(req.body.password, 'Siran@123').toString();
    // console.log(password);
    let user = new User(req.body);
    user.password = password;
    console.log(user);
    user.save((err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res
                .status(201)
                .json({ message: "created user successfully", _id: result._id });
        }
    });
});
exports.createUser = createUser;
const getUser = (req, res, next) => { };
exports.getUser = getUser;
