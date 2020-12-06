const BASE_URL = "/api/items/";

function addItem(item) {
  return fetch(BASE_URL + "addItem", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(item),
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Email already taken!");
    })
    .then((data) => data);
}

function findItems() {
  return fetch("/api/items/getItems").then((res) => res.json);
}

export default {
  addItem,
  findItems,
};
