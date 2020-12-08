const BASE_URL = "/api/items/";

async function findListItems() {
  return await fetch(BASE_URL + "getList")
    .then((res) => res.json)
    .then((data) => data);
}

export default {
  findListItems,
};
