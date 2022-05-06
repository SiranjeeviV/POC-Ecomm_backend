import mongoose, { ConnectOptions } from "mongoose";
const dbURL = "mongodb://127.0.0.1:27017/"
const db = "flipkart"
const db_connection = () => {
  mongoose
    .connect(`${dbURL}${db}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then((res) => {
      console.log(
        "Connected to Distribution API Database ----------",
        db
      );
    })
    .catch((err) => {
      console.log(
        `Initial Distribution API Database connection error occured -`,
        err
      );
    });
};

export default db_connection