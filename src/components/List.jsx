import React from "react";

import { XLg } from "react-bootstrap-icons";

const List = (props) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-offWhite text-firstColor rounded-md hover:bg-thirdColor hover:text-offWhite transition-colors animate-scaleUp">
      <p className="text-xl text-light break-all">{props.content}</p>
      <button
        className="text-2xl p-1 font-medium"
        onClick={() => props.remove(props.id)}
      >
        <XLg />
      </button>
    </div>
  );
};

export default List;
