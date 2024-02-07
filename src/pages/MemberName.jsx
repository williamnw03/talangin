import React from "react";

// Components
import Lists from "../components/Lists";

const MemberName = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col w-full p-6 xs:items-center">
        <h1 className="text-3xl font-light text-darkTeal md:text-4xl">
          Write on your <span className=" font-semibold">Members</span>
        </h1>
        <div className="flex gap-2 mt-4 h-11 xs:w-4/5 md:w-2/4 lg:w-1/3">
          <input
            type="text"
            className="flex-1  bg-transparent border border-darkTeal p-2 w-full rounded-lg focus:outline-none"
          />
          <button className="bg-darkTeal text-offWhite text-5xl h-full aspect-square rounded-md opacity-85 hover:opacity-100 transition-opacity">
            +
          </button>
        </div>
        <Lists className="flex flex-col gap-2 w-full bg-darkTeal p-4 mt-4 rounded-md xs:w-4/5 md:w-2/4 lg:w-1/3" />
      </div>
    </div>
  );
};

export default MemberName;
