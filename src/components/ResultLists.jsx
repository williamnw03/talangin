import React from "react";

import ResultList from "./ResultList";

const ResultLists = () => {
  return (
    <div className="flex flex-col gap-6 w-full bg-darkTeal p-4 rounded-md">
      <ResultList />
      <ResultList />
      <ResultList />
      <div className="bg-offWhite p-4 rounded-md text-center">Rp 400.000</div>
    </div>
  );
};

export default ResultLists;
