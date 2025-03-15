import { configureStore } from "@reduxjs/toolkit";
import sideFilterReducer from "../redux/sideFilterSlice";
import topFilterReducer from "../redux/topFilterSlice";

const store = configureStore({
  reducer: {
    sideFilter: sideFilterReducer,
    topFilter: topFilterReducer,
  },
});

export default store;
