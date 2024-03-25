import React from "react";

const List = (props) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-offWhite text-firstColor rounded-md hover:bg-thirdColor hover:text-offWhite transition-colors">
      <p className="text-xl text-light break-all">{props.data.name}</p>
      <button
        className="text-2xl p-1 font-medium"
        onClick={() => props.remove(props.id)}
      >
        X
      </button>
    </div>
  );
};

export default List;
