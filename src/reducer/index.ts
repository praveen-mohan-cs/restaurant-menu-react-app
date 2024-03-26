import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFooterData, THeaderData, THomePageData, TMenu } from "../types";

interface CounterState {
  headerData: THeaderData;
  footerData: TFooterData;
  homePageData: THomePageData;
  menuPageData: TMenu[];
}

const initialState: CounterState = {
  headerData: {
    website_title: "",
    logo: {
      url: "",
    },
    navigation_links: {
      link: [
        {
          href: "",
          title: "",
        },
      ],
    },
  },
  footerData: {
    copyright: "",
  },
  homePageData: {
    sections: [
      {
        home_banner: {
          banner: [
            {
              url: "",
            },
          ],
        },
      },
    ],
  },
  menuPageData: [
    {
      course_name: "",
      dishes: [
        {
          uid: "",
          image: {
            url: "",
          },
          title: "",
        },
      ],
    },
  ],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setHeaderData: (state, action: PayloadAction<THeaderData>) => {
      state.headerData = action.payload;
    },
    setFooterData: (state, action: PayloadAction<TFooterData>) => {
      state.footerData = action.payload;
    },
    setHomePageData: (state, action: PayloadAction<THomePageData>) => {
      state.homePageData = action.payload;
    },
    setMenuPageData: (state, action: PayloadAction<TMenu[]>) => {
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
