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
  .connect(
    "mongodb+srv://yousiefhamed1:YC0BSHSEV2AJGpfQ@grandpa-ali-cluster.uam6mme.mongodb.net/?retryWrites=true&w=majority&appName=grandpa-ali-cluster"
  )
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("connected to db & listening on port ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
