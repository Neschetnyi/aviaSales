import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  tickets: [],
  error: "",
  progress: null,
  id: "",
  stop: null,
  shown: 5,
};

export const getId = createAsyncThunk("tickets/getId", () => {
  return axios
    .get("https://aviasales-test-api.kata.academy/search")
    .then((res) => {
      console.log("id is", res.data.searchId);
      return res.data.searchId;
    });
});

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  (_, { getState, rejectWithValue }) => {
    const state = getState().tickets;
    const id = state.id;

    if (!id) {
      return rejectWithValue("ID не найден");
    }

    return axios
      .get(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
      .then((response) => {
        console.log("fetch response", response.data);
        return [response.data.tickets, response.data.stop];
      })
      .catch((error) => {
        return rejectWithValue(error.message);
      });
  }
);

const ticketDataSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    add_Five: (state) => {
      state.shown += 5;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getId.fulfilled, (state, action) => {
      state.id = action.payload;
    });
    builder.addCase(getId.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.loading = false;
      state.stop = action.payload[1];
      if (!state.stop) {
        state.tickets = state.tickets.concat(action.payload[0]);
        state.progress = state.tickets.length;
      }
    });
    builder.addCase(fetchTickets.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
  },
});

export default ticketDataSlice.reducer;
export const { add_Five } = ticketDataSlice.actions;
