import React, { Component } from "react";
import { Link } from "react-router-dom";
import itemService from "../../utilities/itemService";
import "./ItemInput.css";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";

class ItemInput extends Component {
  state = {
    item: "",
    unit: "",
    category: "",
    Sunday: "",
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
    });
  };

  isFormInvalid() {
    return !(this.state.item && this.state.unit && this.state.category);
  }

  formReset = () => {
    this.setState({
      item: "",
      unit: "",
      category: "",
      Sunday: "",
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.formReset();
    try {
      this.toast.show({
        severity: "success",
        detail: "Item Added",
      });
      itemService.addItem(this.state);

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
      { label: "🍗 Meat", value: "meat" },
      { label: "🐮 Dairy", value: "dairy" },
      { label: "🥦 Produce", value: "produce" },
      { label: "🍞 Dry Goods", value: "dry goods" },
      { label: "🛒 Other", value: "other" },
    ];

    return (
      <div>
        <Toast ref={(el) => (this.toast = el)} position="top-left"></Toast>
        <Card className="itemInput">
          <form onSubmit={this.handleSubmit}>
            Add A Item
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
            <label>Unit</label>
            <Dropdown
              value={this.state.unit}
              options={unitItems}
              name="unit"
              onChange={this.handleChange}
            />
            <div className="par-wrap">
              <div>
                <table className="dateTable">
                  <tbody>
                    <tr>
                      <th>Sun</th>
                      <th>Mon</th>
                      <th>Tues</th>
                      <th>Wed</th>
                      <th>Thurs</th>
                      <th>Fri</th>
                      <th>Sat</th>
                    </tr>
                    <tr>
                      <td>
                        <InputText
                          className="par-day"
                          type="number"
                          placeholder="0"
                          value={this.state.Sunday}
                          name="Sunday"
                          onChange={this.handleChange}
                        ></InputText>
                      </td>
                      <td>
                        <InputText
                          className="par-day"
                          type="number"
                          placeholder="0"
                          value={this.state.Monday}
                          name="Monday"
                          onChange={this.handleChange}
                        ></InputText>
                      </td>
                      <td>
                        <InputText
                          className="par-day"
                          type="number"
                          placeholder="0"
                          value={this.state.Tuesday}
                          name="Tuesday"
                          onChange={this.handleChange}
                        ></InputText>
                      </td>
                      <td>
                        <InputText
                          className="par-day"
                          type="number"
                          placeholder="0"
                          value={this.state.Wednesday}
                          name="Wednesday"
                          onChange={this.handleChange}
                        ></InputText>
                      </td>
                      <td>
                        <InputText
                          className="par-day"
                          type="number"
                          placeholder="0"
                          value={this.state.Friday}
                          name="Friday"
                          onChange={this.handleChange}
                        ></InputText>
                      </td>
                      <td>
                        <InputText
                          className="par-day"
                          type="number"
                          placeholder="0"
                          value={this.state.Thursday}
                          name="Thursday"
                          onChange={this.handleChange}
                        ></InputText>
                      </td>
                      <td>
                        <InputText
                          className="par-day"
                          type="number"
                          placeholder="0"
                          value={this.state.Saturday}
                          name="Saturday"
                          onChange={this.handleChange}
                        ></InputText>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-mt-4">
              <Button disabled={this.isFormInvalid()}>Submit</Button>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}

export default ItemInput;
