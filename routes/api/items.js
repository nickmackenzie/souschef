const express = require("express");
const router = express.Router();
const Item = require("../../models/item");

const itemCtrl = require("../../controllers/items");
const user = require("../../models/user");

router.post("/addItem", itemCtrl.addItem);

// router.post("/addItem", async (req, res) => {
//   const item = new Item(req.body);
//   try {
//     const savedItem = await item.save();
//     res.send(savedItem);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });
module.exports = router;
