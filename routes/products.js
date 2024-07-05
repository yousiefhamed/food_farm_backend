const express = require("express");
const {
  getProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.patch("/:id", updateProduct);

module.exports = router;
