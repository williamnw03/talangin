import React from "react";

import ResultList from "./ResultList";

// Number Format
import { NumericFormat } from "react-number-format";

const ResultLists = (props) => {
  return (
    <div className="flex flex-col gap-6 w-full overflow-auto bg-firstColor p-4 rounded-md">
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
        Rp
        <NumericFormat
          value={props.members.reduce((total, current) => {
            return total + current.totalPayment;
          }, 0)}
          thousandSeparator=","
          allowNegative={false}
          displayType="text"
          renderText={(value) => <span>{value}</span>}
        />
      </div>
    </div>
  );
};

export default ResultLists;
