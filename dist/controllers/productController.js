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
exports.getAllProducts = exports.getProductByCatId = exports.createProduct = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    productType: { type: String, required: true },
    productName: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: String, required: true },
    img: { type: String, required: true }
});
const Product = (0, mongoose_1.model)("products", productSchema);
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.createProduct = createProduct;
const getProductByCatId = (req, res, next) => {
    Product.find({ productType: req.query.productType }, (err, result) => {
        //   console.log(results);
        if (err) {
            console.log(err);
            res.status(500).send();
        }
        else {
            res.send(result);
        }
    });
};
exports.getProductByCatId = getProductByCatId;
const getAllProducts = (req, res) => {
    Product.find({}, (err, results) => {
        //   console.log(results);
        if (err) {
            console.log(err);
            res.status(500).send();
        }
        else {
            res.send(results);
        }
    });
};
exports.getAllProducts = getAllProducts;
