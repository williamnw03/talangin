import React from "react";

const NextBackButtons = () => {
  return (
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
  );
};

export default NextBackButtons;
