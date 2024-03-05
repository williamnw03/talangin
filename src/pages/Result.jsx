import React from "react";
import NextBackButtons from "../components/NextBackButtons";
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

        <NextBackButtons next={"/"} back={"/linkboth"} />
      </div>
    </>
  );
};

export default Result;
