import React from "react";
import ResultLists from "../components/ResultLists";

const Result = () => {
  return (
    <>
      <div className="flex flex-col xs:w-4/5 md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-light text-center text-darkTeal md:text-4xl">
          <span className=" font-semibold">Result</span>
        </h1>
        <p className="mt-4">
          Group Name : <span className="font-semibold">Power Rangers</span>
        </p>

        <ResultLists />

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

export default Result;
