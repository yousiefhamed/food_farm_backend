const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productsSchema = new Schema(
  {
    productName: { type: String, required: true },
    image: { type: String, required: true },
    from: { type: String, required: true },
    nutrients: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    organic: { type: Boolean, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productsSchema);
