const Item = require("../models/item");
const List = require("../models/list");

function addItem(req, res) {
  const item = new Item(req.body);
  try {
    res.status(200).json(item);
    item.save(function (err, item) {
      if (err) res.send(err);

      res.status(200).json(item);
    });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function makeList(req, res) {
  const list = new List({
    item: req.body.newList[1],
    stock: req.body.newList[0],
    par: req.body.newList[2],
    unit: req.body.newList[3],
  });

  try {
    await list.save(function (err, list) {
      if (err) res.send(err);
      res.status(200).json(list);
    });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getItems(req, res) {
  const items = await Item.find({});
  res.status(200).json(items);
}

module.exports = {
  addItem,
  getItems,
  makeList,
};
