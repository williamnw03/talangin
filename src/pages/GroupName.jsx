import React from "react";

const GroupName = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col w-full p-6 xs:items-center">
        <h1 className="text-3xl font-light text-darkTeal md:text-4xl">
          Write on your <span className="font-semibold">Group Name</span>
        </h1>
        <input
          type="text"
          className=" bg-transparent border border-darkTeal mt-4 p-2 w-full rounded-lg xs:w-4/5 md:w-2/4 lg:w-1/3 focus:outline-none"
        />
        <a
          href="#"
          className="bg-darkTeal text-offWhite font-medium p-3 px-6 mt-3 rounded-2xl w-max text-center opacity-85 transition-opacity hover:opacity-100"
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default GroupName;
