import { RequestHandler } from "express";
import { IUser } from "../models/userModel";
import { Schema, model } from "mongoose";

import CryptoJS from "crypto-js";

// var bytes  = CryptoJS.AES.decrypt('U2FsdGVkX18V964llGtD2tCBcqzBVxWx5NVOCeEa7ew=', 'secret key 123');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);
// console.log(originalText)

const userSchema = new Schema<IUser>({
  name: { type: String, required: false },
  email: { type: String, required: true },
  phone: { type: Number, required: false },
  password: { type: String, required: true },
  address: { type: String, required: false },
});

const User = model<IUser>("users", userSchema );

export const createUser: RequestHandler = async (req, res, next) => {
 let password = CryptoJS.AES.encrypt(req.body.password, 'Siran@123').toString();
// console.log(password);
  let user = new User(req.body);
  user.password = password;
  console.log(user);
  user.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res
        .status(201)
        .json({ message: "created user successfully", _id: result._id });
    }
  });
};


export const getUser: RequestHandler = (req, res, next) => {};
