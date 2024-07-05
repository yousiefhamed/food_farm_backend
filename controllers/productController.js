const Product = require("../models/productModel");
const mongoose = require("mongoose");

const getProducts = async (req, res) => {
  try {
    const limit = parseInt(req.headers["limit"]);

    let products;
    if (limit) {
      products = await Product.find({}).sort({ createdAt: -1 }).limit(limit);
    } else {
      products = await Product.find({}).sort({ createdAt: -1 });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ error: "No Such product" });
  }

  res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const {
    productName,
    image,
    from,
    nutrients,
    price,
    quantity,
    organic,
    description,
    rating,
  } = req.body;

  try {
    const product = await Product.create({
      productName,
      image,
      from,
      nutrients,
      price,
      quantity,
      organic,
      description,
      rating,
    });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const product = await Product.findOneAndDelete({ _id: id });

  if (!product) {
    return res.status(404).json({ error: "No Such product" });
  }

  res.status(200).json(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }

  const product = await Product.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!product) {
    return res.status(404).json({ error: "No Such product" });
  }

  res.status(200).json(product);
};

module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
