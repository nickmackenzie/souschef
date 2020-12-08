const BASE_URL = "/api/items/";

function makeList(list) {
  return fetch(BASE_URL + "makeList", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(list),
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Error While Making List.");
    })
    .then((data) => data);
}

function addItem(item, stock) {
  return fetch(BASE_URL + "addItem", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(item),
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Item In Database");
    })
    .then((data) => data);
}

async function findItems() {
  return await fetch(BASE_URL + "findItems")
    .then((res) => res.json)
    .then((data) => data);
}

export default {
  addItem,
  findItems,
  makeList,
};
