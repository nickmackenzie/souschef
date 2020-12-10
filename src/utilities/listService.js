const BASE_URL = "/api/items/";

async function findListItems() {
  return await fetch(BASE_URL + "getList")
    .then((res) => res.json)
    .then((data) => data);
}

async function delFromList(e) {
  return await fetch(BASE_URL + "delListItem")
    .then((res) => res(200).jsnon)
    .then((data) => data);
}

export async function deleteItem(id) {
  const response = await fetch(BASE_URL + `/delListItem/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
export default {
  findListItems,
  delFromList,
};
