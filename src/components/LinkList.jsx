import React, { useEffect, useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { memberActions } from "../store/member-slice";
import { itemActions } from "../store/item-slice";

import Select from "react-select";
import { XLg } from "react-bootstrap-icons";

const LinkList = (props) => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);

  // Change options
  const changeOptions = (items) => {
    const newOptions = items.map((item) => {
      return {
        value: item,
        label: `${item.name} | ${item.currentQuantity}`,
      };
    });

    setOptions(newOptions);
  };

  // Change options in first render
  useEffect(() => {
    changeOptions(props.items);
  }, [props.items]);

  const selectItems = (data, memberId) => {
    const newItem = { ...data.value, currentQuantity: 1 };
    dispatch(
      memberActions.changeItemsInc({
        idMember: memberId,
        item: newItem,
        itemOrigin: data.value,
      })
    );

    dispatch(itemActions.currentQuantityDec(newItem.id));
  };

  const deselectItems = (data, memberId) => {
    const newItem = { ...data, currentQuantity: 1 };
    dispatch(
      memberActions.changeItemsDec({ idMember: memberId, item: newItem })
    );

    dispatch(itemActions.currentQuantityInc(newItem.id));

    // change status page
    const check = props.items.filter((item) => item.currentQuantity != 0);

    if (check.length) {
      props.changePageStatus("result", false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-2 xs:flex-row">
      <div className="flex flex-col w-full gap-2 xs:w-3/5">
        <div className="flex justify-between items-center w-full min-h-11 px-4 py-1 bg-offWhite text-firstColor rounded-md">
          <p className="text-md text-light text-center break-all">
            {props.memberData.name}
          </p>
        </div>
        <div className="flex flex-wrap gap-1 w-full">
          {props.memberData.items.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between items-center w-max px-2 bg-offWhite text-firstColor rounded-md hover:bg-thirdColor hover:text-offWhite transition-colors animate-scaleUp"
              >
                <p className="text-xs text-light break-all">
                  {`${item.currentQuantity} | ${item.name}`}
                </p>
                <button
                  className=" text-sm pl-1 py-1 font-medium"
                  onClick={() => deselectItems(item, props.memberData.id)}
                >
                  <XLg />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full xs:w-2/5">
        <Select
          options={options}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: "#FAF9F6",
              color: "#1B262C",
              padding: "o.5rem",
              width: "100%",
              minHeight: "2.75rem",
              borderRadius: "0.5rem",
              wordBreak: "break-all",
            }),

            option: (baseStyles, state) => ({
              ...baseStyles,
              color: "#0096c7",
              cursor: "pointer",
            }),
          }}
          isSearchable={true}
          placeholder="Choose"
          value="Choose"
          closeMenuOnSelect={false}
          onChange={(data) => selectItems(data, props.memberData.id)}
        />
      </div>
    </div>
  );
};

export default LinkList;
