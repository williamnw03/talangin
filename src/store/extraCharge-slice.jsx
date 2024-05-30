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

    changePercent: (state, action) => {
      state.percent = action.payload;
    },

    addExtraCharge: (state, action) => {
      if (
        !state.extraCharges.find(
          (extraCharge) =>
            extraCharge.name.toUpperCase() == action.payload.name.toUpperCase()
        )
      ) {
        state.extraCharges.push(action.payload);
      }
    },

    removeExtraCharge: (state, action) => {
      state.extraCharges = state.extraCharges.filter(
        (extraCharge) => extraCharge.id !== action.payload
      );
    },

    removeAllExtraCharges: (state, action) => {
      state.extraCharges = [];
    },
  },
});

export const extraChargeActions = extraChargeSlice.actions;

export default extraChargeSlice;
