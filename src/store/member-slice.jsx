import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "member",
  initialState: {
    temp: {
      id: "",
      name: "",
      items: [],
      extraCharges: [],
      totalPayment: 0,
    },
    name: "",
    members: [],
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },

    addMember: (state, action) => {
      state.members.push(action.payload);
    },

    removeMember: (state, action) => {
      state.members = state.members.filter(
        (member) => member.id !== action.payload
      );
    },

    changeItemsInc: (state, action) => {
      state.members = state.members.map((member) => {
        if (member.id == action.payload.idMember) {
          const newMember = { ...member };
          if (!member.items.find((item) => item.id == action.payload.item.id)) {
            newMember.items.push(action.payload.item);
            return newMember;
          } else {
            const newItems = newMember.items.map((item) => {
              if (item.id == action.payload.item.id) {
                if (action.payload.itemOrigin.currentQuantity == 0) return item;
                return {
                  ...item,
                  currentQuantity: item.currentQuantity + 1,
                };
              } else {
                return item;
              }
            });

            newMember.items = newItems;
            return newMember;
          }
        } else {
          return member;
        }
      });
    },

    changeItemsDec: (state, action) => {
      state.members = state.members.map((member) => {
        if (member.id == action.payload.idMember) {
          const newMember = { ...member };
          if (!member.items.find((item) => item.id == action.payload.item.id)) {
            newMember.items.push(action.payload.item);
            return newMember;
          } else {
            let newItems = newMember.items.map((item) => {
              if (item.id == action.payload.item.id) {
                if (item.currentQuantity == 1) return false;
                return {
                  ...item,
                  currentQuantity: item.currentQuantity - 1,
                };
              } else {
                return item;
              }
            });

            newItems = newItems.filter((newItem) => newItem);

            newMember.items = newItems;
            return newMember;
          }
        } else {
          return member;
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

export const memberActions = memberSlice.actions;
export default memberSlice;
