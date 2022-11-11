import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Trip} from "../../types";
import {loadAppTrips} from "../actions/app.action";

interface AppState {
  trips: Trip[];
}

const initialState: AppState = {
  trips: []
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(loadAppTrips.fulfilled, (state, action) => {
      state.trips = action.payload.trips;
    });
  }
});

export const {
} = appSlice.actions;

export default appSlice.reducer;
