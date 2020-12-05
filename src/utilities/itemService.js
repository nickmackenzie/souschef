const BASE_URL = "/api/items/";

function addItem(item) {
  return (
    fetch(BASE_URL + "addItem", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(item),
    })
      .then((res) => {
        if (res.ok) return res.json();
        // Probably a duplicate email
        throw new Error("Email already taken!");
      })
      // Parameter destructuring!
      .then((data) => data)
  );
  // The above could have been written as
  //.then((token) => token.token);
}

export default {
  addItem,
};
