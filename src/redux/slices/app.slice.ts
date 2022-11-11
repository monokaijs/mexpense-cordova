import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AppState {
}

const initialState: AppState = {
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
  }
});

export const {
} = appSlice.actions;

export default appSlice.reducer;
