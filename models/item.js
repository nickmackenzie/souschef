const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  item: String,
  category: String,
  stock: String,
  parLevel: String,
  unit: String,
});

module.exports = mongoose.model("Item", itemSchema);
