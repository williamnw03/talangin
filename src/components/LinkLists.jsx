import React from "react";
import LinkList from "./LinkList";

const LinkLists = () => {
  return (
    <div className="flex flex-col gap-6 w-full bg-darkTeal p-4 mt-4 rounded-md">
      <LinkList />
      <LinkList />
      <LinkList />
    </div>
  );
};

export default LinkLists;
