const List = require("../models/list");

async function getDayList(req, res) {
  const list = await List.find({});
  console.log("hey:,", list);
  res.json(list);
}

async function del(req, res) {
  const list = await List.find({});
  console.log("hey:,", list);
  res.json(list);
}

module.exports = {
  getDayList,
  delList,
};
