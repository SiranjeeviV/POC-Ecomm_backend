import { RequestHandler } from "express";
import { IProduct } from "../models/productModel";
import { Schema, model } from "mongoose";


const productSchema = new Schema<IProduct>({
    productType: { type: String, required: true},
    productName: { type: String, required: true},
    price: { type: String, required: true},
    description: { type: String, required: true},
    quantity: { type: String, required: true},
    img: { type: String, required: true}
});

const Product = model<IProduct>("products", productSchema);

export const createProduct: RequestHandler = async (req, res, next) => {
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

export const getProductByCatId: RequestHandler = (req, res, next) => {
    Product.find({productType: req.query.productType},(err:Error, result:Response) => {
    //   console.log(results);
      if(err){
          console.log(err);
          res.status(500).send();
      }else{
          res.send(result);
      }
  })
};

export const getAllProducts: RequestHandler = (req, res) => {
    Product.find({},(err:Error, results:Response) => {
    //   console.log(results);
      if(err){
          console.log(err);
          res.status(500).send();
      }else{
          res.send(results);
      }
  })
};
