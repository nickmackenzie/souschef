import React, { Component } from "react";
import axios from "axios";
import { Accordion, AccordionTab } from "primereact/accordion";

class AccordionComp extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }
  state = {
    list: null,
  };

  render() {
    return (
      <Accordion
        activeIndex={this.state.activeIndex}
        onTabChange={(e) => this.setState({ activeIndex: e.index })}
      >
        <AccordionTab header="🍗 Meat"></AccordionTab>
        <AccordionTab header="🐮 Dairy">Content II</AccordionTab>
        <AccordionTab header="🥦 Produce">Content III</AccordionTab>
        <AccordionTab header="🍞 Dry Goods">Content III</AccordionTab>
        <AccordionTab header="🛒 Other">Content III</AccordionTab>
      </Accordion>
    );
  }
}
export default AccordionComp;
