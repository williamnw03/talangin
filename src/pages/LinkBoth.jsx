import React from "react";

import LinkLists from "../components/LinkLists";

import NextBackButtons from "../components/NextBackButtons";

const LinkBoth = () => {
  return (
    <>
      <div className="flex flex-col xs:w-4/5 md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-light text-center text-firstColor md:text-4xl">
          Link The <span className=" font-semibold">Items</span> &{" "}
          <span className=" font-semibold">Member</span>
        </h1>

        <LinkLists />
        <NextBackButtons next={"/result"} back={"/extracharge"} />
      </div>
    </>
  );
};

export default LinkBoth;
