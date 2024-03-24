import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { groupActions } from "../store/group-slice";

const GroupName = () => {
  const dispatch = useDispatch();

  // Group Name
  const groupName = useSelector((state) => state.group.name);

  // change input group name
  const changeGroupName = (e) => {
    dispatch(groupActions.changeName(e.target.value));
  };

  return (
    <>
      <h1 className="text-3xl font-light text-firstColor md:text-4xl">
        Write on your <span className="font-semibold">Group Name</span>
      </h1>
      <input
        type="text"
        className="bg-transparent text-firstColor border border-firstColor mt-4 p-2 w-full h-11 rounded-lg xs:w-4/5 md:w-2/4 lg:w-1/3 focus:outline-none"
        onChange={changeGroupName}
        value={groupName}
      />
      <Link
        to="/membername"
        className="bg-firstColor text-offWhite font-medium p-3 px-6 mt-3 rounded-2xl w-max text-center hover:bg-thirdColor transition-colors"
      >
        Next
      </Link>
    </>
  );
};

export default GroupName;
