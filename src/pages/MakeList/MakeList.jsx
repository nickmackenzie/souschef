import React, { Component } from "react";
import "primeflex/primeflex.css";
import itemService from "../../utilities/itemService";
import axios from "axios";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Accordion, AccordionTab } from "primereact/accordion";
import "./MakeList.css";

class MakeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      current: [],
      newlist: {
        item: [],
      },
    };
  }

  getItems = () => {
    axios
      .get("api/items/getItems")
      .then((response) => {
        const data = response.data;
        this.setState({ items: data });
      })
      .catch(() => {
        alert("err");
      });
  };

  async componentDidMount() {
    this.getItems();
    await this.getListItems();
  }

  valueChange = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      newList: [
        e.target.value,
        e.target.dataset.stock,
        e.target.dataset.par,
        e.target.dataset.unit,
      ],
    }));
  };

  addToList = (e) => {
    this.setState((prevState) => ({
      [e.target.dataset.name]: [...prevState.current, e.target.dataset.name],
    }));
  };

  getListItems = () => {
    axios
      .get("api/items/getList")
      .then((response) => {
        const data = response.data;
        this.setState({ list: data });
      })
      .catch(() => {
        alert("err");
      });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      this.toast.show({
        severity: "success",
        summary: "",
        detail: "Item Added To List",
      });
      itemService.makeList(this.state);
    } catch (err) {
      alert("Invalid Item");
    }
  };

  getMeat = () => {
    const meatArray = this.state.items;
    meatArray.map((item, indx) => {
      console.log("pog", item);
      const name = item.item;
      console.log("name", name);
      if (item.category == "meat") {
        return <div>{name}</div>;
      }
    });
  };

  render() {
    return (
      <Card header={`Make ${this.props.tmr}'s List`} className="make-wrap">
        <Accordion
          activeIndex={this.state.activeIndex}
          onTabChange={(e) => this.setState({ activeIndex: e.index })}
        >
          <AccordionTab header="🍗 Meat">{this.getMeat()}</AccordionTab>
          <AccordionTab header="🐮 Dairy">Content II</AccordionTab>
          <AccordionTab header="🥦 Produce">Content III</AccordionTab>
          <AccordionTab header="🍞 Dry Goods">Content III</AccordionTab>
          <AccordionTab header="🛒 Other">Content III</AccordionTab>
        </Accordion>
      </Card>
    );
  }
}

export default MakeList;
