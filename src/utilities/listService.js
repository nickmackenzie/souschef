const BASE_URL = "/api/items/";

async function findListItems() {
  return await fetch(BASE_URL + "getList")
    .then((res) => res.json)
    .then((data) => data);
}

async function delFromList() {
  return await fetch(BASE_URL + "delListItem")
    .then((res) => res.jsnon)
    .then((data) => data);
}
export default {
  findListItems,
  delFromList,
};
