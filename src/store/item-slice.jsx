import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    temp: {
      id: "",
      name: "",
      totalPrice: "",
      quantity: "",
      currentQuantity: "",
    },
    name: "",
    totalPrice: 0,
    quantity: 0,
    items: [],
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },

    changeTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },

    changeQuantity: (state, action) => {
      state.quantity = action.payload;
    },

    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    changeCurrentQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.idItem) {
          return { ...item, currentQuantity: action.payload.currentQuantity };
        } else {
          return item;
        }
      });
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice;
