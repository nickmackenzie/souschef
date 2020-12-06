import React, { Component } from "react";
import { Link } from "react-router-dom";
import itemService from "../../utilities/itemService";
import "./ItemInput.css";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

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
    const unitItems = [
      { label: "Kg", value: "kg" },
      { label: "Grams", value: "grams" },
      { label: "Oz", value: "oz" },
      { label: "Lbs", value: "lbs" },
      { label: "Fl Oz", value: "fl oz" },
      { label: "Litre", value: "litre" },
      { label: "Pieces", value: "pieces" },
    ];

    const categoryItems = [
      { label: "Meat", value: "meat" },
      { label: "Dairy", value: "dairy" },
      { label: "Produce", value: "produce" },
      { label: "Dry Goods", value: "dry goods" },
      { label: "Other", value: "other" },
    ];
    return (
      <Card className="itemInput">
        <form onSubmit={this.handleSubmit}>
          Add A Item<br></br>
          <label>Item:</label>
          <InputText
            type="text"
            placeholder="Item"
            value={this.state.item}
            name="item"
            onChange={this.handleChange}
          ></InputText>
          <label>Category</label>
          <Dropdown
            value={this.state.category}
            options={categoryItems}
            name="category"
            onChange={this.handleChange}
          />
          <label>Stock</label>
          <InputText
            type="text"
            placeholder="Stock"
            value={this.state.stock}
            name="stock"
            onChange={this.handleChange}
          ></InputText>
          <label>Unit</label>
          <Dropdown
            value={this.state.unit}
            options={unitItems}
            name="unit"
            onChange={this.handleChange}
          />
          <label>Par Level</label>
          <InputText
            type="text"
            placeholder="Par Level"
            value={this.state.parLevel}
            name="parLevel"
            onChange={this.handleChange}
          ></InputText>
          <div className="p-mt-4">
            <Button disabled={this.isFormInvalid()}>Submit</Button>
          </div>
        </form>
      </Card>
    );
  }
}

export default ItemInput;
