import React from "react";

const List = (props) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-offWhite text-darkTeal rounded-md opacity-90 hover:opacity-100 transition-opacity">
      <p className="text-xl text-light break-all">{props.content}</p>
      <button className="text-2xl p-1 font-medium">X</button>
    </div>
  );
};

export default List;
