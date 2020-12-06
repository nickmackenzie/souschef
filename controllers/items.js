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
  try {
    Item.find({}, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  addItem,
  getItems,
};
