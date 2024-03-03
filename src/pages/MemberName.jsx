import React from "react";

// Components
import Lists from "../components/Lists";

const MemberName = () => {
  return (
    <>
      <div className="flex flex-col xs:w-4/5 md:w-2/4 lg:w-2/5">
        <h1 className="text-3xl font-light text-center text-darkTeal md:text-4xl">
          Write on your <span className=" font-semibold">Members</span>
        </h1>
        <div className="flex gap-2 mt-4 h-11 w-full">
          <input
            type="text"
            className="flex-1  bg-transparent border border-darkTeal p-2 w-full rounded-lg focus:outline-none"
          />
          <button className="bg-darkTeal text-offWhite text-5xl h-full aspect-square rounded-md opacity-85 hover:opacity-100 transition-opacity">
            +
          </button>
        </div>
        <Lists
          className="flex flex-col gap-2 w-full bg-darkTeal p-4 mt-4 rounded-md"
          content="Andi Susanto"
        />
        <div className="flex justify-between flex-wrap">
          <a
            href="#"
            className=" inline-block bg-darkTeal text-offWhite font-medium p-3 px-6 mt-3 rounded-2xl w-max text-center opacity-85 transition-opacity hover:opacity-100"
          >
            Back
          </a>
          <a
            href="#"
            className=" inline-block bg-darkTeal text-offWhite font-medium p-3 px-6 mt-3 rounded-2xl w-max text-center opacity-85 transition-opacity hover:opacity-100"
          >
            Next
          </a>
        </div>
      </div>
    </>
  );
};

export default MemberName;
