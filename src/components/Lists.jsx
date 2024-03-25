import React from "react";

// Components
import List from "./List";

const Lists = (props) => {
  return (
    <div className="flex flex-col gap-2 w-full bg-firstColor p-4 mt-4 rounded-md">
      {props.data.length ? (
        props.data.map((e) => {
          return <List key={e.id} id={e.id} data={e} remove={props.remove} />;
        })
      ) : (
        <p className="text-white text-center">Empty</p>
      )}
    </div>
  );
};

export default Lists;
