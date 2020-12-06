const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  item: String,
  category: {
    type: String,
    enum: ["meat", "dairy", "produce", "dry goods", "other"],
  },
  stock: String,
  parLevel: String,
  unit: {
    type: String,
    enum: ["kg", "grams", "oz", "lbs", "fl oz", "litre", "pieces"],
  },
});

module.exports = mongoose.model("Item", itemSchema);
