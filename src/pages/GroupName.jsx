import React from "react";
import { Link } from "react-router-dom";

const GroupName = () => {
  return (
    <>
      <h1 className="text-3xl font-light text-darkTeal md:text-4xl">
        Write on your <span className="font-semibold">Group Name</span>
      </h1>
      <input
        type="text"
        className="bg-transparent border border-darkTeal mt-4 p-2 w-full h-11 rounded-lg xs:w-4/5 md:w-2/4 lg:w-1/3 focus:outline-none"
      />
      <Link
        to="/membername"
        className="bg-darkTeal text-offWhite font-medium p-3 px-6 mt-3 rounded-2xl w-max text-center hover:bg-blue transition-colors"
      >
        Next
      </Link>
    </>
  );
};

export default GroupName;
