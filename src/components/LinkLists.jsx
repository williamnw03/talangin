import React from "react";
import LinkList from "./LinkList";

const LinkLists = () => {
  return (
    <div className="flex flex-col gap-6 w-full bg-darkTeal p-4 mt-4 rounded-md xs:w-4/5 md:w-3/4 lg:w-1/2">
      <LinkList />
      <LinkList />
      <LinkList />
    </div>
  );
};

export default LinkLists;
