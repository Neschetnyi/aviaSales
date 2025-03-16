import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cheap: false,
  fast: false,
  optimal: false,
};

const topFilterSlice = createSlice({
  name: "topFilter",
  initialState,
  reducers: {
    toggle_Сheap_true: (state) => {
      state.cheap = !state.cheap;
      console.log("toggle_Сheap_true", state.cheap);
    },
    toggle_Сheap_false: (state) => {
      state.cheap = false;
      console.log("toggle_Сheap_false", state.cheap);
    },
    toggle_Fast_true: (state) => {
      state.fast = !state.fast;
      console.log("toggle_Fast_true", state.fast);
    },
    toggle_Fast_false: (state) => {
      state.fast = false;
      console.log("toggle_Fast_false", state.fast);
    },
    toggle_Optimal_true: (state) => {
      state.optimal = !state.optimal;
      console.log("toggle_Optimal_true", state.optimal);
    },
    toggle_Optimal_false: (state) => {
      state.optimal = false;
      console.log("toggle_Optimal_false", state.optimal);
    },
  },
});

export default topFilterSlice.reducer;
export const {
  toggle_Сheap_true,
  toggle_Сheap_false,
  toggle_Fast_true,
  toggle_Fast_false,
  toggle_Optimal_true,
  toggle_Optimal_false,
} = topFilterSlice.actions;
