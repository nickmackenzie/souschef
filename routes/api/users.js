const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const usersCtrl = require("../../controllers/users");
const itemCtrl = require("../../controllers/items");

router.post("/register", usersCtrl.signup);
router.post("/login", usersCtrl.login);

// router.post("/item", itemCtrl.addItem);

module.exports = router;
