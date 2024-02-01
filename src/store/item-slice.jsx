import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [
      { id: "", name: "", totalPrice: "", quantity: "", currentQuantity: "" },
    ],
  },
  reducers: {
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

export default itemSlice;
