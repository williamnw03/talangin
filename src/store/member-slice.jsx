import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "member",
  initialState: {
    members: [
      {
        id: "",
        name: "",
        items: [],
        extraCharges: [],
        totalPayment: 0,
      },
    ],
  },
  reducers: {
    addMember: (state, action) => {
      state.members.push(action.payload);
    },

    removeMember: (state, action) => {
      state.members = state.members.filter(
        (member) => member.id !== action.payload
      );
    },

    changeItems: (state, action) => {
      state.members = state.members.map((member) => {
        if (member.id === action.payload.idMember) {
          const newMember = { ...member };
          if (
            !member.items.find((item) => item.id === action.payload.item.id)
          ) {
            newMember.items.push(action.payload.item);
            return newMember;
          } else {
            const newItems = newMember.items.map((item) => {
              if (item.id === action.payload.item.id) {
                return {
                  ...item,
                  currentQuantity: item.payload.currentQuantity,
                };
              } else {
                return item;
              }
            });

            newMember.items = newItems;
            return newMember;
          }
        }
      });
    },

    addExtraCharge: (state, action) => {
      state.members = state.members.map((member) => {
        return {
          ...member,
          extraCharges: [...member.extraCharges, action.payload],
        };
      });
    },
  },
});

export default memberSlice;
