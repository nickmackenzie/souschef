const BASE_URL = "/api/items/";

function makeList(list) {
  try {
    return fetch(BASE_URL + "makeList", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(list),
    })
      .then((res) => {
        if (res) res.status(200).json();
        throw new Error("Error While Making List.");
      })
      .then((data) => data);
  } catch {
    console.log("err");
  }
}

function addItem(item) {
  return fetch(BASE_URL + "addItem", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(item),
  })
    .then((res) => {
      if (res) return res.status(200).json();
      throw new Error("Item In Database");
    })
    .then((data) => data);
}

export function findItems(list) {
  return fetch(BASE_URL + "findItems")
    .then((res) => res.json)
    .then((data) => data);
}

export default {
  addItem,
  findItems,
  makeList,
};
