import React from "react";
import Lists from "../components/Lists";

const ExtraCharge = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col w-full p-6 xs:items-center">
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
              type="text"
              id="price"
              className="bg-transparent border border-darkTeal p-2 w-full h-11 rounded-lg focus:outline-none"
            />
          </div>

          <div className="basis-1/5">
            <label htmlFor="type" className="font-semibold">
              Quantity
            </label>
            <select
              name="type"
              id="type"
              className="bg-transparent border border-darkTeal p-2 w-full h-11 rounded-lg focus:outline-none"
            >
              <option value="percentage" className="text-lg">
                percentage
              </option>
              <option value="evenly" className="text-lg">
                spread evenly
              </option>
            </select>
          </div>

          <button className="bg-darkTeal text-offWhite text-5xl h-11 aspect-square rounded-md opacity-85 hover:opacity-100 transition-opacity">
            +
          </button>
        </div>
        <Lists
          className="flex flex-col gap-2 w-full bg-darkTeal p-4 mt-4 rounded-md xs:w-4/5 md:w-3/4 lg:w-1/2"
          content="Tax | Rp 100.000 | %"
        />
      </div>
    </div>
  );
};

export default ExtraCharge;
