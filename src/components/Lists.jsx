import React from "react";

// Components
import List from "./List";

// Number Format
import { NumericFormat } from "react-number-format";

const Lists = (props) => {
  return (
    <div className="flex flex-col gap-2 w-full h-1/2 overflow-y-auto bg-firstColor p-4 mt-4 rounded-md">
      {props.data.length ? (
        props.data.map((e) => {
          let content;

          if (props.type === "member-name") {
            content = e.name;
          }

          if (props.type === "item-list") {
            const totalPrice = (
              <NumericFormat
                value={e.totalPrice}
                thousandSeparator=","
                allowNegative={false}
                displayType="text"
                renderText={(value) => <span>{value}</span>}
              />
            );

            const quantity = (
              <NumericFormat
                value={e.quantity}
                thousandSeparator=","
                allowNegative={false}
                displayType="text"
                renderText={(value) => <span>{value}</span>}
              />
            );

            content = (
              <span>
                {e.name} | Rp{totalPrice} | {quantity} Q
              </span>
            );
          }

          if (props.type === "extraCharge-list") {
            const totalPrice = (
              <NumericFormat
                value={e.totalPrice}
                thousandSeparator=","
                allowNegative={false}
                displayType="text"
                renderText={(value) => <span>{value}</span>}
              />
            );

            if (e.type.value == "evenly") {
              content = (
                <span>
                  {e.name} | Rp{totalPrice}
                </span>
              );
            } else {
              content = (
                <span>
                  {e.name} | {totalPrice}%
                </span>
              );
            }
          }
          return (
            <List
              key={e.id}
              id={e.id}
              content={content}
              remove={props.remove}
            />
          );
        })
      ) : (
        <p className="text-white text-center">Empty</p>
      )}
    </div>
  );
};

export default Lists;
