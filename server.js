const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productsRoutes = require("./routes/products");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/products", productsRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
