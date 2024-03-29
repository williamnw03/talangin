import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/item-slice";

// Id Generate
import generateUniqueId from "generate-unique-id";

// Components
import Lists from "../components/Lists";
import NextBackButtons from "../components/NextBackButtons";

const ItemList = () => {
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

  // change item name
  const changeItemName = (e) => {
    dispatch(itemActions.changeName(e.target.value));
  };

  // change item total price
  const changeItemTotalPrice = (e) => {
    // Check minus value
    if (parseInt(e.target.value) < 0) {
      return false;
    }

    // check front 0
    if (e.target.value.length > 1 && e.target.value[0] === "0") {
      return false;
    }

    dispatch(itemActions.changeTotalPrice(e.target.value));
  };

  // change item quantity
  const changeItemQuantity = (e) => {
    // Check minus value
    if (parseInt(e.target.value) < 0) {
      return false;
    }

    // check front 0
    if (e.target.value.length > 1 && e.target.value[0] === "0") {
      return false;
    }

    dispatch(itemActions.changeQuantity(e.target.value));
  };

  // Add New Item
  const addItem = (name, totalPrice, quantity) => {
    if (name && totalPrice && quantity) {
      const item = { ...itemTemp };
      item.id = id;
      item.name = name;
      item.totalPrice = totalPrice;
      item.quantity = quantity;
      dispatch(itemActions.addItem(item));
    }
  };

  // Remove Item
  const removeItem = (id) => {
    dispatch(itemActions.removeItem(id));
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
              id="name"
              className="bg-transparent border border-firstColor p-2 w-full h-11 rounded-lg focus:outline-none"
              onChange={changeItemName}
              value={itemName}
            />
          </div>

          <div className="basis-2/5">
            <label htmlFor="totalPrice" className="font-semibold">
              Total Price
            </label>
            <input
              type="number"
              id="totalPrice"
              className="bg-transparent border border-firstColor p-2 w-full h-11 rounded-lg focus:outline-none"
              onChange={changeItemTotalPrice}
              value={itemTotalPrice}
            />
          </div>

          <div className="basis-1/5">
            <label htmlFor="quantity" className="font-semibold">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="bg-transparent border border-firstColor p-2 w-full h-11 rounded-lg focus:outline-none"
              onChange={changeItemQuantity}
              value={itemQuantity}
            />
          </div>

          <button
            className="bg-firstColor text-offWhite text-5xl h-11 aspect-square rounded-md opacity-85 hover:opacity-100 transition-opacity"
            onClick={() => addItem(itemName, itemTotalPrice, itemQuantity)}
          >
            +
          </button>
        </div>
        <Lists type="item-list" data={items} remove={removeItem} />
        <NextBackButtons next={"/extracharge"} back={"/membername"} />
      </div>
    </>
  );
};

export default ItemList;
