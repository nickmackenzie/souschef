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

function makeList(req, res) {
  console.log("body", req.body);
  const list = new List({
    item: req.body.newList[1],
    stock: req.body.newList[0],
    par: req.body.newList[2],
    unit: req.body.newList[3],
  });
  try {
    list.save();
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getItems(req, res) {
  const items = await Item.find({});
  res.json(items);
}

module.exports = {
  addItem,
  getItems,
  makeList,
};
