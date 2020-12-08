const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new mongoose.Schema({
  item: String,
  stock: String,
  par: String,
});

module.exports = mongoose.model("List", listSchema);
