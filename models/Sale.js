const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema({
  identificationSeller: {
    type: Number,
    required: true,
  },
  zone: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("Sale", SaleSchema);
