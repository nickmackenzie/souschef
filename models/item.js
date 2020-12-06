const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  item: String,
  category: {
    type: String,
    enum: ["meat", "dairy", "produce", "dry goods", "other"],
  },
  unit: {
    type: String,
    enum: ["kg", "grams", "oz", "lbs", "fl oz", "litre", "pieces"],
  },
  Sunday: Number,
  Monday: Number,
  Tuesday: Number,
  Wednesday: Number,
  Thursday: Number,
  Friday: Number,
  Saturday: Number,
});

module.exports = mongoose.model("Item", itemSchema);
