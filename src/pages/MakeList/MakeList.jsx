import React, { Component } from "react";
import { Link } from "react-router-dom";
import itemService from "../../utilities/itemService";

import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

class ItemInput extends Component {
  state = {};

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
    });
  };

  //   isFormInvalid() {
  //     return !(this.state.item && this.state.unit && this.state.category);
  //   }

  //   formReset = () => {
  //     this.setState({
  //       item: "",
  //       unit: "",
  //       category: "",
  //       Sunday: "",
  //       Monday: "",
  //       Tuesday: "",
  //       Wednesday: "",
  //       Thursday: "",
  //       Friday: "",
  //       Saturday: "",
  //     });
  //   };

  //   handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await itemService.addItem(this.state);
  //       this.formReset();
  //       // Let <App> know a user has signed up!
  //       // Successfully signed up - show GamePage
  //     } catch (err) {
  //       // Use a modal or toast in your apps instead of alert
  //       alert("Invalid Item");
  //     }
  //   };

  render() {
    // const unitItems = [
    //   { label: "Kg", value: "kg" },
    //   { label: "Grams", value: "grams" },
    //   { label: "Oz", value: "oz" },
    //   { label: "Lbs", value: "lbs" },
    //   { label: "Fl Oz", value: "fl oz" },
    //   { label: "Litre", value: "litre" },
    //   { label: "Pieces", value: "pieces" },
    // ];

    // const categoryItems = [
    //   { label: "Meat", value: "meat" },
    //   { label: "Dairy", value: "dairy" },
    //   { label: "Produce", value: "produce" },
    //   { label: "Dry Goods", value: "dry goods" },
    //   { label: "Other", value: "other" },
    // ];

    return (
      <Card className="itemInput">
        <form></form>
      </Card>
    );
  }
}

export default ItemInput;
