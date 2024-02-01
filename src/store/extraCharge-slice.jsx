import { createSlice } from "@reduxjs/toolkit";

const extraChargeSlice = createSlice({
  name: "extraCharge",
  initialState: {
    extraCharges: [{ id: "", name: "", totalPrice: "", type: "" }],
  },
  reducers: {
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

export default extraChargeSlice;
