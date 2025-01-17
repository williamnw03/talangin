import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { PlusLg } from "react-bootstrap-icons";

const ExtraCharge = (props) => {
  const navigation = useNavigate();

  // change progress
  useEffect(() => {
    props.changeProgressBar(4);
  }, []);

  // Check page status
  useEffect(() => {
    if (!props.pageStatus.extraCharge) {
      navigation("/itemList");
    }
  }, [props.pageStatus]);

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
    if (v.floatValue === undefined) {
      return false;
    }

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
    if (
      extraCharges.find((ec) => ec.name.toUpperCase() == name.toUpperCase())
    ) {
      // Show Alert
      props.changeShowAlert("Can't use a same name!");
    }

    if (name && totalPrice && type) {
      // Decimal Check
      if (totalPrice.toString().includes(".") && type.value === "evenly") {
        // Show Alert
        props.changeShowAlert("$ Type can not be decimal");
        return false;
      }

      const extraCharge = { ...extraChargeTemp };
      extraCharge.id = id;
      extraCharge.name = name;
      extraCharge.totalPrice = totalPrice;
      extraCharge.type = type;
      dispatch(extraChargeActions.addExtraCharge(extraCharge));

      dispatch(extraChargeActions.changeName(""));
      dispatch(extraChargeActions.changeTotalPrice(0));
      dispatch(extraChargeActions.changeType(""));
    } else {
      // Show Alert
      props.changeShowAlert("Fill the blank!");
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

    // change status page
    if (extraCharges.length == 1) {
      props.changePageStatus("linkBoth", false);
    }
  };

  // next link
  const nextLink = (e) => {
    props.changePageStatus("linkBoth", true);
  };

  return (
    <>
      <div className="flex flex-col xs:w-4/5 md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-light text-center text-firstColor md:text-4xl">
          Write on your <span className=" font-semibold">Extra Charges</span>
        </h1>
        <h2 className="text-lg font-light text-center text-firstColor md:text-xl">
          *Optional
        </h2>
        <div className="flex flex-col gap-2 mt-4 w-full text-firstColor md:flex-row md:items-start">
          <div className="flex-1 basis-2/5">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              autoComplete="off"
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
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-2 basis-1/5">
            <div>
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
                    outline: state.isFocused
                      ? `2px solid #0096c7`
                      : baseStyles.outline,
                    padding: "o.5rem",
                    width: "100%",
                    height: "2.75rem",
                    borderRadius: "0.5rem",
                  }),

                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "#0096c7",
                    cursor: "pointer",
                    backgroundColor: state.isSelected
                      ? "transparent"
                      : baseStyles.backgroundColor,
                  }),
                }}
                isSearchable={false}
                placeholder={"Type"}
                onChange={changeExtraChargeType}
                value={extraChargeType}
              />
            </div>
          </div>

          <div>
            <label className="font-semibold hidden md:block md:invisible">
              None
            </label>
            <button
              className="flex justify-center items-center bg-firstColor text-offWhite text-3xl w-full h-11 aspect-square rounded-md opacity-85 hover:opacity-100 transition-opacity"
              onClick={() =>
                addExtraCharge(
                  extraChargeName,
                  extraChargeTotalPrice,
                  extraChargeType
                )
              }
            >
              <PlusLg />
            </button>
          </div>
        </div>
        <Lists
          type="extraCharge-list"
          data={extraCharges}
          remove={removeExtraCharge}
        />
        <NextBackButtons
          next={"/linkboth"}
          back={"/itemlist"}
          nextLink={nextLink}
        />
      </div>
    </>
  );
};

export default ExtraCharge;
