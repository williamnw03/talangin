import React from "react";
import Lists from "../components/Lists";

import Select from "react-select";

const ExtraCharge = () => {
  const options = [
    { value: "percent", label: "%" },
    { value: "evenly", label: "$" },
  ];

  return (
    <>
      <h1 className="text-3xl font-light text-darkTeal md:text-4xl">
        Write on your <span className=" font-semibold">Extra Charges</span>
      </h1>
      <div className="flex flex-col gap-2 mt-4 xs:w-4/5 md:flex-row md:items-end md:w-3/4 lg:w-1/2">
        <div className="flex-1 basis-2/5">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-transparent border border-darkTeal p-2 w-full h-11 rounded-lg focus:outline-none"
          />
        </div>

        <div className="basis-2/5">
          <label htmlFor="price" className="font-semibold">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="bg-transparent border border-darkTeal p-2 w-full h-11 rounded-lg focus:outline-none"
          />
        </div>

        <div className="basis-1/5">
          <label htmlFor="type" className="font-semibold">
            Type
          </label>

          <Select
            options={options}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "transparent",
                borderColor: "#1B262C",
                padding: "o.5rem",
                width: "100%",
                height: "2.75rem",
                borderRadius: "0.5rem",
              }),

              option: (baseStyles, state) => ({
                ...baseStyles,

                backgroundColor: state.isSelected ? "#1B262C" : "#FAF9F6",
                color: state.isSelected ? "#FAF9F6" : "#1B262C",
              }),
            }}
            isSearchable={false}
            placeholder={"Type"}
            // hideSelectedOptions={true}
            closeMenuOnSelect={false}
          />
        </div>

        <button className="bg-darkTeal text-offWhite text-5xl h-11 aspect-square rounded-md opacity-85 hover:opacity-100 transition-opacity">
          +
        </button>
      </div>
      <Lists
        className="flex flex-col gap-2 w-full bg-darkTeal p-4 mt-4 rounded-md xs:w-4/5 md:w-3/4 lg:w-1/2"
        content="Tax | Rp 100.000 | %"
      />
    </>
  );
};

export default ExtraCharge;
