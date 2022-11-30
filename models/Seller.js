const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
  identification: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  commission: {
    type: Number,
    default: 0,
    required: false,
  },
});

module.exports = mongoose.model("Seller", SellerSchema);
