import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: true,
  noTransfers: false,
  oneTransfer: false,
  twoTransfers: false,
  threeTransfers: false,
};

const sideFilterSlice = createSlice({
  name: "sideFilter",
  initialState,
  reducers: {
    toggle_All: (state) => {
      state.all = !state.all;
      console.log("toggle_All", state.all);
    },
    toggle_All_to_true: (state) => {
      state.all = true;
      state.noTransfers = true;
      state.oneTransfer = true;
      state.twoTransfers = true;
      state.threeTransfers = true;
      console.log("toggle_All_to_true", state.all);
    },
    toggle_All_to_false: (state) => {
      state.all = false;
      console.log("toggle_All_to_false", state.all);
    },
    toggle_NoTransfers: (state) => {
      state.noTransfers = !state.noTransfers;
      console.log("toggle_NoTransfers", state.noTransfers);
    },
    toggle_OneTransfer: (state) => {
      state.oneTransfer = !state.oneTransfer;
      console.log("toggle_OneTransfer", state.oneTransfer);
    },
    toggle_TwoTransfers: (state) => {
      state.twoTransfers = !state.twoTransfers;
      console.log("toggle_TwoTransfers", state.twoTransfers);
    },
    toggle_ThreeTransfers: (state) => {
      state.threeTransfers = !state.threeTransfers;
      console.log("toggle_ThreeTransfers", state.threeTransfers);
    },
  },
});

export default sideFilterSlice.reducer;
export const {
  toggle_All,
  toggle_All_to_true,
  toggle_All_to_false,
  toggle_NoTransfers,
  toggle_OneTransfer,
  toggle_TwoTransfers,
  toggle_ThreeTransfers,
} = sideFilterSlice.actions;
