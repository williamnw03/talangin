import React from "react";
import { Link } from "react-router-dom";

const NextBackButtons = ({ next, back, nextLink }) => {
  return (
    <div className="flex justify-between flex-wrap">
      <Link
        to={back}
        className=" inline-block bg-firstColor text-offWhite font-medium p-3 px-6 mt-3 rounded-2xl w-max text-center hover:bg-thirdColor transition-colors"
      >
        Back
      </Link>
      <Link
        to={next}
        className=" inline-block bg-firstColor text-offWhite font-medium p-3 px-6 mt-3 rounded-2xl w-max text-center hover:bg-thirdColor transition-colors"
        onClick={nextLink}
      >
        Next
      </Link>
    </div>
  );
};

export default NextBackButtons;
