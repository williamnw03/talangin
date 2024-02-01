import { createSlice } from "@reduxjs/toolkit";

const groupSlice = createSlice({
  name: "group",
  initialState: {
    name: "",
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default groupSlice;
