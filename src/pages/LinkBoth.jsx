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
      <h1 className="text-3xl font-light text-darkTeal md:text-4xl">
        Link The <span className=" font-semibold">Items</span> &{" "}
        <span className=" font-semibold">Member</span>
      </h1>

      <LinkLists />
    </>
  );
};

export default LinkBoth;
