import React from "react";
import PrepListItem from "../../components/PrepListItem/PrepListItem";
import AddToList from "../../components/AddToList/AddToList";
import { Button } from "primereact/button";
const PrepList = (props) => {
  return (
    <div className="prep-list">
      <div>
        <PrepListItem />
      </div>
      <div>
        <AddToList />
      </div>
    </div>
  );
};

export default PrepList;
