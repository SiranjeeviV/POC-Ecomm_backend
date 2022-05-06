import { RequestHandler } from "express";
import { ICart } from "../models/cartModel";
import { Schema, model } from "mongoose";


const cartSchema = new Schema<ICart>({
    productId: { type: String, required: true},
    email: { type: String, required: true},
});

const Product = model<ICart>("cart", cartSchema);

export const createCart : RequestHandler = async (req, res, next) => {
  const product = new Product(req.body);
  product.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res
        .status(201)
        .json({ message: "created successfully", id: result._id });
    }
  });
};