// Redux
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import LinkList from "./LinkList";

const LinkLists = (props) => {
  // Members
  const members = useSelector((state) => state.member.members);

  // Items
  const items = useSelector((state) => state.item.items);

  return (
    <div className="flex flex-col gap-6 w-full bg-firstColor p-4 mt-4 rounded-md">
      {members.map((member) => {
        return (
          <LinkList
            key={member.id}
            memberData={member}
            items={items}
            changePageStatus={props.changePageStatus}
          />
        );
      })}
    </div>
  );
};

export default LinkLists;
