import { configureStore } from "@reduxjs/toolkit";
import sideFilterReducer from "../redux/sideFilterSlice";
import topFilterReducer from "../redux/topFilterSlice";
import ticketsReducer from "./ticketsDataSlice";

const store = configureStore({
  reducer: {
    sideFilter: sideFilterReducer,
    topFilter: topFilterReducer,
    tickets: ticketsReducer,
  },
});

export default store;
