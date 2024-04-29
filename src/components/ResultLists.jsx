import React from "react";

import ResultList from "./ResultList";

const ResultLists = (props) => {
  return (
    <div className="flex flex-col gap-6 w-full bg-firstColor p-4 rounded-md">
      {props.members.map((member) => {
        return (
          <ResultList
            key={member.id}
            name={member.name}
            totalPayment={member.totalPayment}
            itemDetailPayment={member.itemDetailPayment}
            extraDetailPayment={member.extraDetailPayment}
            changeShowDetail={props.changeShowDetail}
          />
        );
      })}

      <div className="bg-offWhite p-4 rounded-md text-center text-firstColor font-bold">
        Rp{" "}
        {props.members.reduce((total, current) => {
          return total + current.totalPayment;
        }, 0)}
      </div>
    </div>
  );
};

export default ResultLists;
