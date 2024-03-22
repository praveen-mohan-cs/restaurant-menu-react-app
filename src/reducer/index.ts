import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  headerData: any;
  footerData: any;
  homePageData: any;
  menuPageData: any;
}

const initialState: CounterState = {
  headerData: {},
  footerData: {},
  homePageData: {},
  menuPageData: {},
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
    setHomePageData: (state, action: PayloadAction<number>) => {
      state.homePageData = action.payload;
    },
    setMenuPageData: (state, action: PayloadAction<number>) => {
      state.menuPageData = action.payload;
    },
  },
});

export const {
  setHeaderData,
  setFooterData,
  setHomePageData,
  setMenuPageData,
} = mainSlice.actions;

export default mainSlice.reducer;
