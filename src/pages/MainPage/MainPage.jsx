import React, { Component } from "react";
import "./MainPage.css";
import PrepList from "../../components/PrepList/PrepList";
import { Panel } from "primereact/panel";
import { Card } from "primereact/card";
import DelBtn from "../../components/DelBtn/DelBtn";

const MainPage = (props) => {
  if (props.list) {
    props.list.map((item) => {
      let itemre = item.item;
      return <div>{itemre}</div>;
    });
  }

  let main =
    props.user && props.list && props.items ? (
      <div>
        <Panel header={props.day}>
          <div className="prep-list-wrap box">
            {props.list.map((item) => {
              let itm = item.item;
              let stk = item.stock;
              let par = item.par;
              let prep = stk - par;
              let id = item._id;
              return (
                <Card>
                  <div>
                    <div>{itm}</div>
                    <div>Prep: {prep}</div>
                    <div>
                      <DelBtn id={id}></DelBtn>
                    </div>
                  </div>
                </Card>
              );
            })}

            <PrepList />
          </div>
        </Panel>
        <Card className="card">
          <div className="delivery-wrap box">Deliveries</div>
        </Card>
        <Card className="card">
          <div className="low-items-wrap box">Low Items</div>
        </Card>
      </div>
    ) : (
      <div>Please Login</div>
    );

  return <div className="main">{main}</div>;
};

export default MainPage;
