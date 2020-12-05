import React, { Component } from "react";
import { Link } from "react-router-dom";
import itemService from "../../utilities/itemService";
import "./ItemInput.css";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

class ItemInput extends Component {
  state = {
    item: "",
    stock: "",
    unit: "",
    category: "",
    parLevel: "",
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
    });
  };

  isFormInvalid() {
    return !(
      this.state.item &&
      this.state.stock &&
      this.state.unit &&
      this.state.category &&
      this.state.parLevel
    );
  }

  formReset = () => {
    this.setState({
      item: "",
      stock: "",
      unit: "",
      category: "",
      parLevel: "",
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await itemService.addItem(this.state);
      this.formReset();
      // Let <App> know a user has signed up!
      // Successfully signed up - show GamePage
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert("Invalid Item");
    }
  };

  render() {
    return (
      <Card className="itemInput">
        <form onSubmit={this.handleSubmit}>
          Input Your Items!<br></br>
          <label>Item:</label>
          <InputText
            type="text"
            placeholder="Item"
            value={this.state.item}
            name="item"
            onChange={this.handleChange}
          ></InputText>
          <label>Category</label>
          <InputText
            type="text"
            placeholder="Category"
            value={this.state.category}
            name="category"
            onChange={this.handleChange}
          ></InputText>
          <label>Stock</label>
          <InputText
            type="text"
            placeholder="Stock"
            value={this.state.stock}
            name="stock"
            onChange={this.handleChange}
          ></InputText>
          <label>Unit</label>
          <InputText
            type="text"
            placeholder="Unit"
            value={this.state.unit}
            name="unit"
            onChange={this.handleChange}
          ></InputText>
          <label>Par Level</label>
          <InputText
            type="text"
            placeholder="Par Level"
            value={this.state.parLevel}
            name="parLevel"
            onChange={this.handleChange}
          ></InputText>
          <div>
            {" "}
            <Button className="p-text-center" disabled={this.isFormInvalid()}>
              Submit
            </Button>
          </div>
        </form>

        <Link to="/">
          <br></br>Home
        </Link>
      </Card>
    );
  }
}

export default ItemInput;
