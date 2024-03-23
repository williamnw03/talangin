import React, { useState } from "react";

import Select from "react-select";

const ResultList = () => {
  const [options, setOptions] = useState([
    { value: "ayam penyet", label: "Ayam Goreng | 3" },
    { value: "tempe goreng", label: "Tempe Goreng | 1" },
    { value: "tahu goreng", label: "Tahu Goreng | 2" },
    { value: "ikan gulai", label: "Ikan Gulai | 1" },
  ]);

  return (
    <div className="flex flex-col items-start gap-2 xs:flex-row">
      <div className="flex flex-col w-full gap-2 xs:w-3/5">
        <div className="flex justify-between items-center w-full min-h-11 px-4 py-1 bg-offWhite text-firstColor rounded-md">
          <p className="text-md text-light text-center break-all">
            Budi Susanto
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full min-h-11 bg-offWhite rounded-md cursor-pointer hover:bg-thirdColor hover:text-offWhite transition-colors xs:w-2/5">
        <p>Rp 124.500</p>
      </div>
    </div>
  );
};

export default ResultList;
