const express = require("express");
const router = express.Router();
const Item = require("../../models/item");

const itemCtrl = require("../../controllers/items");
const listCtrl = require("../../controllers/list");
const user = require("../../models/user");
router.get("/getItems", itemCtrl.getItems);
router.get("/getList", listCtrl.getDayList);

// router.post("/addItem", itemCtrl.addItem);

router.post("/makeList", itemCtrl.makeList);

router.delete("/delListItem/:id", listCtrl.delList);

router.post("/addItem", async (req, res) => {
  const item = new Item(req.body);
  try {
    const savedItem = await item.save();
    res.send(savedItem);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
