import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  headerData: any;
  footerData: any;
  breakfastData: any;
  lunchData: any;
  dinnerData: any;
}

const initialState: CounterState = {
  headerData: {},
  footerData: {},
  breakfastData: [],
  lunchData: [],
  dinnerData: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setHeaderData: (state, action: PayloadAction<number>) => {
      state.headerData = action.payload;
    },
    setFooterData: (state, action: PayloadAction<number>) => {
      state.footerData = action.payload;
    },
    setBreakfastData: (state, action: PayloadAction<number>) => {
      state.breakfastData = action.payload;
    },
    setLunchData: (state, action: PayloadAction<number>) => {
      state.lunchData = action.payload;
    },
    setDinnerData: (state, action: PayloadAction<number>) => {
      state.dinnerData = action.payload;
    },
  },
});

export const {
  setHeaderData,
  setFooterData,
  setBreakfastData,
  setLunchData,
  setDinnerData,
} = mainSlice.actions;

export default mainSlice.reducer;
