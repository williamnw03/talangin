import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/item-slice";

// Number Format
import { NumericFormat } from "react-number-format";

// Id Generate
import generateUniqueId from "generate-unique-id";

// Components
import Lists from "../components/Lists";
import NextBackButtons from "../components/NextBackButtons";
import { useNavigate } from "react-router-dom";
import { memberActions } from "../store/member-slice";
import { PlusLg } from "react-bootstrap-icons";

const ItemList = (props) => {
  const navigation = useNavigate();

  // change progress
  useEffect(() => {
    props.changeProgressBar(3);
  }, []);

  // Check page status
  useEffect(() => {
    if (!props.pageStatus.itemList) {
      navigation("/memberName");
    }
  }, [props.pageStatus]);

  // generate id
  const id = generateUniqueId();

  const dispatch = useDispatch();

  // Item Name
  const itemName = useSelector((state) => state.item.name);
  // Item Total Price
  const itemTotalPrice = useSelector((state) => state.item.totalPrice);
  // Item Quantity
  const itemQuantity = useSelector((state) => state.item.quantity);

  // Item Template
  const itemTemp = useSelector((state) => state.item.temp);
  // Items
  const items = useSelector((state) => state.item.items);

  // Members
  const members = useSelector((state) => state.member.members);

  // change item name
  const changeItemName = (e) => {
    dispatch(itemActions.changeName(e.target.value));
  };

  // change item total price
  const changeItemTotalPrice = (v, s) => {
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
    dispatch(itemActions.changeTotalPrice(v.floatValue));
  };

  // change item quantity
  const changeItemQuantity = (v, s) => {
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

    dispatch(itemActions.changeQuantity(v.floatValue));
  };

  // Add New Item
  const addItem = (name, totalPrice, quantity) => {
    if (name && totalPrice && quantity) {
      const item = { ...itemTemp };
      item.id = id;
      item.name = name;
      item.totalPrice = totalPrice;
      item.quantity = quantity;
      item.currentQuantity = quantity;

      dispatch(itemActions.addItem(item));

      dispatch(itemActions.changeName(""));
      dispatch(itemActions.changeTotalPrice(0));
      dispatch(itemActions.changeQuantity(0));
    }
  };

  // Detect Enter Key
  const EnterKey = (e, name, totalPrice, quantity) => {
    if (e.key === "Enter") {
      addItem(name, totalPrice, quantity);
    }
  };

  // Remove Item
  const removeItem = (id) => {
    dispatch(itemActions.removeItem(id));

    // change status page
    if (items.length == 1) {
      props.changePageStatus("extraCharge", false);
    }

    // Remove Items in member
    dispatch(memberActions.removeItem(id));
  };

  // next link
  const nextLink = (e) => {
    if (!items.length) {
      e.preventDefault();
      props.changePageStatus("extraCharge", false);
    } else {
      props.changePageStatus("extraCharge", true);
    }
  };

  return (
    <>
      <div className="flex flex-col xs:w-4/5 md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl text-center font-light text-firstColor md:text-4xl">
          Write on your <span className=" font-semibold">Items</span>
        </h1>
        <div className="flex flex-col gap-2 mt-4 w-full text-firstColor md:flex-row md:items-end">
          <div className="flex-1 basis-2/5">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              autoComplete="off"
              id="name"
              className="bg-transparent border border-firstColor p-2 w-full h-11 rounded-lg focus:outline-none"
              onChange={changeItemName}
              onKeyDown={(e) =>
                EnterKey(e, itemName, itemTotalPrice, itemQuantity)
              }
              value={itemName}
            />
          </div>

          <div className="basis-2/5">
            <label htmlFor="totalPrice" className="font-semibold">
              Total Price
            </label>
            <NumericFormat
              id="totalPrice"
              className="bg-transparent border border-firstColor p-2 w-full h-11 rounded-lg focus:outline-none"
              onValueChange={changeItemTotalPrice}
              onKeyDown={(e) =>
                EnterKey(e, itemName, itemTotalPrice, itemQuantity)
              }
              value={itemTotalPrice}
              thousandSeparator=","
              allowNegative={false}
            />
          </div>

          <div className="basis-1/5">
            <label htmlFor="quantity" className="font-semibold">
              Quantity
            </label>
            <NumericFormat
              id="quantity"
              className="bg-transparent border border-firstColor p-2 w-full h-11 rounded-lg focus:outline-none"
              onValueChange={changeItemQuantity}
              onKeyDown={(e) =>
                EnterKey(e, itemName, itemTotalPrice, itemQuantity)
              }
              value={itemQuantity}
              thousandSeparator=","
              allowNegative={false}
            />
          </div>

          <button
            className="flex justify-center items-center bg-firstColor text-offWhite text-3xl h-11 aspect-square rounded-md opacity-85 hover:opacity-100 transition-opacity"
            onClick={() => addItem(itemName, itemTotalPrice, itemQuantity)}
          >
            <PlusLg />
          </button>
        </div>
        <Lists type="item-list" data={items} remove={removeItem} />
        <NextBackButtons
          next={"/extracharge"}
          back={"/membername"}
          nextLink={nextLink}
        />
      </div>
    </>
  );
};

export default ItemList;
