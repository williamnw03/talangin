import { createSlice } from "@reduxjs/toolkit";

const extraChargeSlice = createSlice({
  name: "extraCharge",
  initialState: {
    temp: { id: "", name: "", totalPrice: "", type: "" },
    options: [
      { value: "percent", label: "%" },
      { value: "evenly", label: "$" },
    ],
    name: "",
    totalPrice: 0,
    type: "",
    extraCharges: [],
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },

    changeTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },

    changeType: (state, action) => {
      state.type = action.payload;
    },

    addExtraCharge: (state, action) => {
      state.extraCharges.push(action.payload);
    },

    removeExtraCharge: (state, action) => {
      state.extraCharges = state.extraCharges.filter(
        (extraCharge) => extraCharge.id !== action.payload
      );
    },
  },
});

export const extraChargeActions = extraChargeSlice.actions;

export default extraChargeSlice;
