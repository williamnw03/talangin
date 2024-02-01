import { configureStore } from "@reduxjs/toolkit";
import groupSlice from "./group-slice";
import memberSlice from "./member-slice";
import itemSlice from "./item-slice";
import extraChargeSlice from "./extraCharge-slice";

const store = configureStore({
  reducer: {
    group: groupSlice.reducer,
    member: memberSlice.reducer,
    item: itemSlice.reducer,
    extraCharge: extraChargeSlice.reducer,
  },
});

export default store;
