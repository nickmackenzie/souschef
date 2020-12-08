import axios from "axios";

export default class listService {
  getItems() {
    return axios.get("data/products.json").then((res) => res.data.data);
  }
}
