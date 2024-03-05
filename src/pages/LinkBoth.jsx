import React from "react";

import LinkLists from "../components/LinkLists";

import Select from "react-select";
import NextBackButtons from "../components/NextBackButtons";

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
        <NextBackButtons />
      </div>
    </>
  );
};

export default LinkBoth;
