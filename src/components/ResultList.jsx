import React, { useState } from "react";

import Select from "react-select";

const ResultList = (props) => {
  return (
    <div className="flex flex-col items-start gap-2 xs:flex-row">
      <div className="flex flex-col w-full gap-2 xs:w-3/5">
        <div className="flex justify-between items-center w-full min-h-11 px-4 py-1 bg-offWhite text-firstColor rounded-md">
          <p className="text-md text-light text-center break-all">
            {props.name}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full min-h-11 bg-offWhite rounded-md cursor-pointer hover:bg-thirdColor hover:text-offWhite transition-colors xs:w-2/5">
        <p>Rp {props.totalPayment}</p>
      </div>
    </div>
  );
};

export default ResultList;
