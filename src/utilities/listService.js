import axios from "axios";

export default class ItemService {
  getAllItems() {
    return fetch("/api/items/findItems")
      .then((res) => res.json)
      .then((data) => data);
  }
}
