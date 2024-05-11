import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    temp: {
      id: "",
      name: "",
      totalPrice: "",
      quantity: 0,
      currentQuantity: 0,
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

    removeAllItems: (state, action) => {
      state.items = [];
    },

    currentQuantityInc: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          // Stop increasing when it is reach the max
          if (item.currentQuantity == item.quantity) return item;
          return { ...item, currentQuantity: item.currentQuantity + 1 };
        } else {
          return item;
        }
      });
    },

    currentQuantityDec: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          // Stop decreasing when it is reach 0
          if (item.currentQuantity <= 0) return item;
          return { ...item, currentQuantity: item.currentQuantity - 1 };
        } else {
          return item;
        }
      });
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice;
