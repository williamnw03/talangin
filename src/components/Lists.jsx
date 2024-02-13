import React from "react";

// Components
import List from "./List";

const Lists = (props) => {
  return (
    <div className={props.className}>
      <List content={props.content} />
      <List content={props.content} />
      <List content={props.content} />
    </div>
  );
};

export default Lists;
