import React from "react";
import Lists from "../components/Lists";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { extraChargeActions } from "../store/extraCharge-slice";

// Id Generate
import generateUniqueId from "generate-unique-id";

// Number Format
import { NumericFormat } from "react-number-format";

import Select from "react-select";
import NextBackButtons from "../components/NextBackButtons";

const ExtraCharge = () => {
  // generate id
  const id = generateUniqueId();

  const dispatch = useDispatch();

  // options
  const options = useSelector((state) => state.extraCharge.options);

  // extraCharge Name
  const extraChargeName = useSelector((state) => state.extraCharge.name);
  // extraCharge Total Price
  const extraChargeTotalPrice = useSelector(
    (state) => state.extraCharge.totalPrice
  );
  // extraCharge Type
  const extraChargeType = useSelector((state) => state.extraCharge.type);

  // extraCharge Template
  const extraChargeTemp = useSelector((state) => state.extraCharge.temp);
  // Extra Charges
  const extraCharges = useSelector((state) => state.extraCharge.extraCharges);

  // change extraCharge
  const changeExtraChargeName = (e) => {
    dispatch(extraChargeActions.changeName(e.target.value));
  };

  // change extraCharge total price
  const changeExtraChargeTotalPrice = (v, s) => {
    // Check minus value
    if (parseInt(v.floatValue) < 0) {
      return false;
    }

    // check front 0
    if (v.floatValue.length > 1 && v.floatValue[0] === "0") {
      return false;
    }

    dispatch(extraChargeActions.changeTotalPrice(v.floatValue));
  };

  const changeExtraChargeType = (value) => {
    dispatch(extraChargeActions.changeType(value));
  };

  // Add New Extra Charge
  const addExtraCharge = (name, totalPrice, type) => {
    if (name && totalPrice && type) {
      const extraCharge = { ...extraChargeTemp };
      extraCharge.id = id;
      extraCharge.name = name;
      extraCharge.totalPrice = totalPrice;
      extraCharge.type = type;
      dispatch(extraChargeActions.addExtraCharge(extraCharge));
    }
  };

  // Detect Enter Key
  const EnterKey = (e, name, totalPrice, type) => {
    if (e.key === "Enter") {
      addExtraCharge(name, totalPrice, type);
    }
  };

  // Remove Extra Charge
  const removeExtraCharge = (id) => {
    dispatch(extraChargeActions.removeExtraCharge(id));
  };
  return (
    <>
      <div className="flex flex-col xs:w-4/5 md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-light text-center text-firstColor md:text-4xl">
          Write on your <span className=" font-semibold">Extra Charges</span>
        </h1>
        <div className="flex flex-col gap-2 mt-4 w-full text-firstColor md:flex-row md:items-end">
          <div className="flex-1 basis-2/5">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-transparent border border-firstColor p-2 w-full h-11 rounded-lg focus:outline-none"
              onChange={changeExtraChargeName}
              onKeyDown={(e) =>
                EnterKey(
                  e,
                  extraChargeName,
                  extraChargeTotalPrice,
                  extraChargeType
                )
              }
              value={extraChargeName}
            />
          </div>

          <div className="basis-2/5">
            <label htmlFor="totalPrice" className="font-semibold">
              Total Price
            </label>
            <NumericFormat
              id="totalPrice"
              className="bg-transparent border border-firstColor p-2 w-full h-11 rounded-lg focus:outline-none"
              onValueChange={changeExtraChargeTotalPrice}
              onKeyDown={(e) =>
                EnterKey(
                  e,
                  extraChargeName,
                  extraChargeTotalPrice,
                  extraChargeType
                )
              }
              value={extraChargeTotalPrice}
              thousandSeparator=","
              allowNegative={false}
            />
          </div>

          <div className="basis-1/5">
            <label htmlFor="type" className="font-semibold">
              Type
            </label>

            <Select
              options={options}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "transparent",
                  borderColor: "#0096c7",
                  padding: "o.5rem",
                  width: "100%",
                  height: "2.75rem",
                  borderRadius: "0.5rem",
                }),
              }}
              isSearchable={false}
              placeholder={"Type"}
              onChange={changeExtraChargeType}
              value={extraChargeType}
            />
          </div>

          <button
            className="bg-firstColor text-offWhite text-5xl h-11 aspect-square rounded-md opacity-85 hover:opacity-100 transition-opacity"
            onClick={() =>
              addExtraCharge(
                extraChargeName,
                extraChargeTotalPrice,
                extraChargeType
              )
            }
          >
            +
          </button>
        </div>
        <Lists
          type="extraCharge-list"
          data={extraCharges}
          remove={removeExtraCharge}
        />
        <NextBackButtons next={"/linkboth"} back={"/itemlist"} />
      </div>
    </>
  );
};

export default ExtraCharge;
