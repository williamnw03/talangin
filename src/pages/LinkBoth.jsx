import React from "react";

import LinkLists from "../components/LinkLists";

import Select from "react-select";

const LinkBoth = () => {
  const options = [
    { value: "percent", label: "%" },
    { value: "evenly", label: "$" },
  ];

  return (
    <>
      <div className="flex flex-col xs:w-4/5 md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-light text-center text-darkTeal md:text-4xl">
          Link The <span className=" font-semibold">Items</span> &{" "}
          <span className=" font-semibold">Member</span>
        </h1>

        <LinkLists />
        <div className="flex justify-between flex-wrap">
          <a
            href="#"
            className=" inline-block bg-darkTeal text-offWhite font-medium p-3 px-6 mt-3 rounded-2xl w-max text-center opacity-85 transition-opacity hover:opacity-100"
          >
            Back
          </a>
          <a
            href="#"
            className=" inline-block bg-darkTeal text-offWhite font-medium p-3 px-6 mt-3 rounded-2xl w-max text-center opacity-85 transition-opacity hover:opacity-100"
          >
            Next
          </a>
        </div>
      </div>
    </>
  );
};

export default LinkBoth;
