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

  render() {
    return (
      <Card header={`Make ${this.props.tmr}'s List`} className="make-wrap">
        <Accordion
          activeIndex={this.state.activeIndex}
          onTabChange={(e) => this.setState({ activeIndex: e.index })}
        >
          <AccordionTab header="🍗 Meat">
            {this.state.items.map((item) => {
              let name = item.item;
              let Sunday = item.Sunday;
              let Monday = item.Monday;
              let Tuesday = item.Tuesday;
              let Wednesday = item.Wednesday;
              let Thursday = item.Thursday;
              let Friday = item.Friday;
              let Saturday = item.Saturday;
              let unit = item.unit;
              let tmr = this.props.tmr;
              let category = item.category;
              return <div>{name}</div>;
            })}
          </AccordionTab>
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
