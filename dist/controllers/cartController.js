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
exports.createCart = void 0;
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    productId: { type: String, required: true },
    email: { type: String, required: true },
});
const Product = (0, mongoose_1.model)("cart", cartSchema);
const createCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new Product(req.body);
    product.save((err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res
                .status(201)
                .json({ message: "created successfully", id: result._id });
        }
    });
});
exports.createCart = createCart;
