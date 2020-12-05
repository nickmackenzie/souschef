const Item = require("../models/item");

async function addItem(req, res) {
  const item = new Item(req.body);
  try {
    await item.save();

    // await item.save();
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

module.exports = {
  addItem,
};
