import React from "react";

import { XLg } from "react-bootstrap-icons";

const Alert = (props) => {
  return (
    <div className="flex justify-between items-center bg-red-700 bg-opacity-80 rounded-md mb-4 w-11/12 relative top-8 left-1/2 -translate-x-1/2 p-3 text-offWhite sm:w-9/12 lg:w-6/12">
      <p>{props.text}</p>
      <div
        className=" cursor-pointer"
        onClick={() => props.changeShowAlert("")}
      >
        <XLg />
      </div>
    </div>
  );
};

export default Alert;
