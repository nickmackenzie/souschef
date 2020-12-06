const Item = require("../models/item");

async function addItem(req, res) {
  const item = new Item(req.body);
  try {
    await item.save();
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getItems(req, res) {
  const items = await Item.find({});
  console.log(items);
  res.json(items);
}

module.exports = {
  addItem,
  getItems,
};
