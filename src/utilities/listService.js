const BASE_URL = "/api/items/";

async function findListItems() {
  return await fetch(BASE_URL + "getList")
    .then((res) => res.json)
    .then((data) => data);
}

async function delFromList(e) {
  return await fetch(BASE_URL + "delListItem")
    .then((res) => res(200).json)
    .then((data) => data);
}

export async function deleteItem(id) {
  const response = await fetch(BASE_URL + `delListItem/${id}`, {
    method: "DELETE",
  });
  console.log("del");
}

export default {
  findListItems,
  delFromList,
};
