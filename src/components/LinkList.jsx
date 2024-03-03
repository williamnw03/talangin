import React, { useState } from "react";

import Select from "react-select";

const LinkList = () => {
  const [options, setOptions] = useState([
    { value: "ayam penyet", label: "Ayam Goreng | 3" },
    { value: "tempe goreng", label: "Tempe Goreng | 1" },
    { value: "tahu goreng", label: "Tahu Goreng | 2" },
    { value: "ikan gulai", label: "Ikan Gulai | 1" },
  ]);

  const getValue = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-start gap-2 xs:flex-row">
      <div className="flex flex-col w-full gap-2 xs:w-3/5">
        <div className="flex justify-between items-center w-full min-h-11 px-4 py-1 bg-offWhite text-darkTeal rounded-md">
          <p className="text-md text-light text-center break-all">
            Budi Susanto
          </p>
        </div>
        <div className="flex flex-wrap gap-1 w-full">
          <div className="flex justify-between items-center w-max px-2 bg-offWhite text-darkTeal rounded-md opacity-90 hover:opacity-100 transition-opacity">
            <p className="text-xs text-light break-all">asdasdas asdasd asd</p>
            <button className=" text-sm p-1 font-medium">X</button>
          </div>

          <div className="flex justify-between items-center w-max px-2 bg-offWhite text-darkTeal rounded-md opacity-90 hover:opacity-100 transition-opacity">
            <p className="text-xs text-light break-all">TEST</p>
            <button className=" text-sm p-1 font-medium">X</button>
          </div>

          <div className="flex justify-between items-center w-max px-2 bg-offWhite text-darkTeal rounded-md opacity-90 hover:opacity-100 transition-opacity">
            <p className="text-xs text-light break-all">TEST</p>
            <button className=" text-sm p-1 font-medium">X</button>
          </div>
        </div>
      </div>
      <div className="w-full xs:w-2/5">
        <Select
          options={options}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: "#FAF9F6",
              color: "#1B262C",
              padding: "o.5rem",
              width: "100%",
              minHeight: "2.75rem",
              borderRadius: "0.5rem",
              wordBreak: "break-all",
            }),

            option: (baseStyles, state) => ({
              ...baseStyles,
              color: state.isSelected ? "#FAF9F6" : "#1B262C",
            }),
          }}
          isSearchable={true}
          placeholder="Choose"
          value="Choose"
          closeMenuOnSelect={false}
          onChange={getValue}
        />
      </div>
    </div>
  );
};

export default LinkList;
