const List = require("../models/list");

async function getDayList(req, res) {
  const list = await List.find({});
  console.log("hey:,", list);
  res.json(list);
}

async function delList(req, res) {
  console.log("req", req.params);
  const list = await List.findOneAndDelete({ _id: req.params.id });
  res.json(list);
}

module.exports = {
  getDayList,
  delList,
};
