import { RequestHandler } from "express";
import { ILogin } from "../models/loginModel";
import { Schema, model } from "mongoose";

const userSchema = new Schema<ILogin>({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const Login = model<ILogin>("login", userSchema);

export const verifyLogin: RequestHandler = async (req, res, next) => {
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
};

export const getUser: RequestHandler = (req, res, next) => {
  // res.json({ users: USERS });
};
