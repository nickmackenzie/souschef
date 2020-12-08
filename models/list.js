const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new mongoose.Schema({
  item: String,
  stock: Number,
});

module.exports = mongoose.model("List", listSchema);
