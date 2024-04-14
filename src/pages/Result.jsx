import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NextBackButtons from "../components/NextBackButtons";
import ResultLists from "../components/ResultLists";

const Result = (props) => {
  const navigation = useNavigate();

  // Check page status
  useEffect(() => {
    if (!props.pageStatus.result) {
      navigation("/linkBoth");
    }
  }, [props.pageStatus]);

  // next link
  const nextLink = (e) => {
    props.changePageStatus("groupName", false);
    props.changePageStatus("memberName", false);
    props.changePageStatus("itemList", false);
    props.changePageStatus("extraCharge", false);
    props.changePageStatus("linkBoth", false);
    props.changePageStatus("result", false);
  };

  return (
    <>
      <div className="flex flex-col xs:w-4/5 md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-light text-center text-firstColor md:text-4xl">
          <span className=" font-semibold">Result</span>
        </h1>
        <p className="mt-4 text-firstColor">
          Group Name : <span className="font-semibold">Power Rangers</span>
        </p>

        <ResultLists />

        <NextBackButtons next={"/"} back={"/linkboth"} nextLink={nextLink} />
      </div>
    </>
  );
};

export default Result;
