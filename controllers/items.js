const Item = require("../models/item");
const List = require("../models/list");

async function addItem(req, res) {
  const item = new Item(req.body);
  try {
    await item.save();
  } catch (err) {
    res.status(400).json(err);
  }
}

async function makeList(req, res) {
  console.log("hello", req.body);
  const list = new List(req.body);

  try {
    await list.save();
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
  makeList,
};
