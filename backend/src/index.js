const express = require("express");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

// import cors from "cors";
// console.log("lets go");
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);

const connection_uri = process.env.CONNECTION_URI;
mongoose
  .connect(`${connection_uri}`)
  .then(() => {
    app.listen(port, () => {
      console.log(
        `listening on port:${port} and successful connection to database`
      );
    });
  })
  .catch((e) => {
    console.log("error--------------->>>>>" + e);
  });
app.get("/", (req, res) => {
  res.send("lets get started bitch");
});
app.get("/products", (req, res) => {
  res.status(200).send("all the products bitch");
});
// app.listen(port, () => {
//   console.log(`listening on port:${port}`);
// });

//connect mongo ----------------------------------------------------------------
//setup authentication------
// try to stup gauthxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// setting up middlewares(also integerate role)
// basic apis :- getProducts, createProducts, updateProducts, deleteProducts, create
// futureApis:- addTowishlist, addToCart, toCheckout, toLike, adminDashboard, isAdmin,myOrders,
