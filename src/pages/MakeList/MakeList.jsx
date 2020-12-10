import React, { Component } from "react";
import "primeflex/primeflex.css";
import itemService from "../../utilities/itemService";
import axios from "axios";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Accordion, AccordionTab } from "primereact/accordion";
import AccordianComp from "../../components/AccordianComp/AccordianComp";
import "./MakeList.css";

class MakeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      current: [],
      newlist: {
        item: [],
        tmr: this.props.tmr,
      },
    };
  }
  addToList = (e) => {
    this.setState((prevState) => ({
      [e.target.dataset.name]: [...prevState.current, e.target.dataset.name],
    }));
  };
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
  getOther = (e) => {
    let produceArray = this.state.items;

    return produceArray.map((item, i) => {
      let name = item.item;
      let unit = item.unit;
      let par = item;
      let Thursday = item.Thursday;
      let Sunday = item.Sunday;
      let Monday = item.Monday;
      let Tuesday = item.Tuesday;
      let Wednesday = item.Wednesday;
      let Friday = item.Friday;
      let Saturday = item.Saturday;
      let category = item.category;
      let tmr = this.props.tmr;

      if (item.category == "other" && tmr == "Friday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Friday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Friday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Friday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "other" && tmr == "Saturday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Saturday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Saturday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Saturday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "other" && tmr == "Sunday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Sunday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Sunday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Sunday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "other" && tmr == "Monday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Monday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Monday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Monday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "other" && tmr == "Tuesday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Tuesday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Tuesday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "other" && tmr == "Wednesday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Wednesday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Wednesday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "other" && tmr == "Thursday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Thursday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Thursday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      }
    });
  };

  getDryGoods = (e) => {
    let produceArray = this.state.items;

    return produceArray.map((item, i) => {
      let name = item.item;
      let unit = item.unit;
      let par = item;
      let Thursday = item.Thursday;
      let Sunday = item.Sunday;
      let Monday = item.Monday;
      let Tuesday = item.Tuesday;
      let Wednesday = item.Wednesday;
      let Friday = item.Friday;
      let Saturday = item.Saturday;
      let category = item.category;
      let tmr = this.props.tmr;

      if (item.category == "dry goods" && tmr == "Friday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Friday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Friday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Friday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "dry goods" && tmr == "Saturday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Saturday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Saturday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Saturday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "dry goods" && tmr == "Sunday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Sunday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Sunday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Sunday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "dry goods" && tmr == "Monday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Monday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Monday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Monday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "dry goods" && tmr == "Tuesday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Tuesday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Tuesday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "dry goods" && tmr == "Wednesday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Wednesday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Wednesday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "dry goods" && tmr == "Thursday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Thursday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Thursday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      }
    });
  };
  getProduce = (e) => {
    let produceArray = this.state.items;

    return produceArray.map((item, i) => {
      let name = item.item;
      let unit = item.unit;
      let par = item;
      let Thursday = item.Thursday;
      let Sunday = item.Sunday;
      let Monday = item.Monday;
      let Tuesday = item.Tuesday;
      let Wednesday = item.Wednesday;
      let Friday = item.Friday;
      let Saturday = item.Saturday;
      let category = item.category;
      let tmr = this.props.tmr;

      if (item.category == "produce" && tmr == "Friday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Friday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Friday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Friday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "produce" && tmr == "Saturday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Saturday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Saturday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Saturday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "produce" && tmr == "Sunday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Sunday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Sunday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Sunday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "produce" && tmr == "Monday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Monday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Monday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Monday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "produce" && tmr == "Tuesday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Tuesday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Tuesday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "produce" && tmr == "Wednesday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Wednesday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Wednesday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "produce" && tmr == "Thursday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Thursday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Thursday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      }
    });
  };
  getDairy = (e) => {
    let dairyArray = this.state.items;

    return dairyArray.map((item, i) => {
      let name = item.item;
      let unit = item.unit;
      let par = item;
      let Thursday = item.Thursday;
      let Sunday = item.Sunday;
      let Monday = item.Monday;
      let Tuesday = item.Tuesday;
      let Wednesday = item.Wednesday;
      let Friday = item.Friday;
      let Saturday = item.Saturday;
      let category = item.category;
      let tmr = this.props.tmr;

      if (item.category == "dairy" && tmr == "Friday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Friday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Friday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Friday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "dairy" && tmr == "Saturday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Saturday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Saturday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Saturday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "dairy" && tmr == "Sunday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Sunday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Sunday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Sunday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "dairy" && tmr == "Monday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Monday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Monday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Monday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "dairy" && tmr == "Tuesday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Tuesday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Tuesday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "dairy" && tmr == "Wednesday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Wednesday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Wednesday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "dairy" && tmr == "Thursday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Thursday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Thursday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      }
    });
  };

  getMeat = (e) => {
    let meatArray = this.state.items;

    return meatArray.map((item, i) => {
      let name = item.item;
      let unit = item.unit;
      let par = item;
      let Thursday = item.Thursday;
      let Sunday = item.Sunday;
      let Monday = item.Monday;
      let Tuesday = item.Tuesday;
      let Wednesday = item.Wednesday;
      let Friday = item.Friday;
      let Saturday = item.Saturday;
      let category = item.category;
      let tmr = this.props.tmr;

      if (item.category == "meat" && tmr == "Friday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Friday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Friday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Friday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "meat" && tmr == "Saturday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Saturday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Saturday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Saturday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "meat" && tmr == "Sunday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Sunday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Sunday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Sunday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "meat" && tmr == "Monday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Monday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Monday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Monday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "meat" && tmr == "Tuesday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Tuesday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Tuesday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "meat" && tmr == "Wednesday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Wednesday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Wednesday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      } else if (item.category == "meat" && tmr == "Thursday") {
        return (
          <div>
            {" "}
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  {" "}
                  <input
                    data-stock={name}
                    data-par={Thursday}
                    data-name={name}
                    name="stock"
                    data-unit={unit}
                    type="number"
                    max={Tuesday}
                    min="0"
                    onChange={this.valueChange}
                  ></input>
                </div>
                <div>
                  {" "}
                  <Button
                    data-stock={name}
                    data-par={Thursday}
                    data-name={name}
                    value={name}
                    id={name}
                    name={name}
                    className="btn"
                    onClick={(e) =>
                      this.props.addToList([
                        e.target.value,
                        e.target.dataset.stock,
                        e.target.dataset.par,
                        e.target.dataset.unit,
                      ])
                    }
                    data-name={name}
                    type="submit"
                    className="btn"
                  >
                    {name}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div>
        <Card header={`Make ${this.props.tmr}'s List`} className="make-wrap">
          <Toast ref={(el) => (this.toast = el)} />
          <Accordion
            activeIndex={this.state.activeIndex}
            onTabChange={(e) => this.setState({ activeIndex: e.index })}
          >
            <AccordionTab header="🍗 Meat"> {this.getMeat()}</AccordionTab>
            <AccordionTab header="🐮 Dairy">{this.getDairy()}</AccordionTab>
            <AccordionTab header="🥦 Produce">{this.getProduce()}</AccordionTab>
            <AccordionTab header="🍞 Dry Goods">
              {this.getDryGoods()}
            </AccordionTab>
            <AccordionTab header="🛒 Other">{this.getOther()}</AccordionTab>
          </Accordion>
        </Card>
      </div>
    );
  }
}

export default MakeList;
