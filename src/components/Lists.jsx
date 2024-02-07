import React from "react";

// Components
import List from "./List";

const Lists = (props) => {
  return (
    <div className={props.className}>
      <List />
      <List />
      <List />
    </div>
  );
};

export default Lists;
