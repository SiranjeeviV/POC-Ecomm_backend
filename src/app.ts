import express from "express";
import userRoute from "./routes/userRoutes";
import productRoute from "./routes/productsRoutes";
import loginRoute from "./routes/loginRoutes";
import cartRoute from "./routes/cartRoutes";
import { json } from "body-parser";
import db_connection from "./config/db_connection";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());
const port = 8080;

db_connection();
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/login", loginRoute);
app.use("/cart", cartRoute);
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

app.listen(port, () => {
  console.log("listening to port " + port);
});
