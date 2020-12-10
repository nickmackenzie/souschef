const List = require("../models/list");

async function getDayList(req, res) {
  const list = await List.find({});
  res.json(list);
}

async function delList(req, res) {
  console.log("re", req.params.id);
  const list = await List.findOneAndDelete({ _id: req.params.id });
  res.json(list);
}

module.exports = {
  getDayList,
  delList,
};
