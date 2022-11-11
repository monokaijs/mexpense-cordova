import {createAsyncThunk} from "@reduxjs/toolkit";
import {StorageService} from "../../services/StorageService";

export const loadAppTrips = createAsyncThunk("app/load-trips", async (_, thunkAPI) => {
  const trips = await StorageService.getAllTrips();

  return {
    trips
  }
});
