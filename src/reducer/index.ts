import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// COMMENT: Add TMenu in below import statement
import { TFooterData, THeaderData, THomePageData } from "../types";

interface AppState {
  headerData: THeaderData;
  footerData: TFooterData;
  homePageData: THomePageData;
  // COMMENT: Uncomment below line
  // menuPageData: TMenu[];
}

const initialState: AppState = {
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
  // COMMENT: Uncomment below lines
  // menuPageData: [
  //   {
  //     course_name: "",
  //     dishes: [
  //       {
  //         uid: "",
  //         image: {
  //           url: "",
  //         },
  //         title: "",
  //       },
  //     ],
  //   },
  // ],
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
    // COMMENT: Uncomment below lines
    // setMenuPageData: (state, action: PayloadAction<TMenu[]>) => {
    //   state.menuPageData = action.payload;
    // },
  },
});

export const {
  setHeaderData,
  setFooterData,
  setHomePageData,
  // COMMENT: Uncomment below line
  // setMenuPageData,
} = mainSlice.actions;

export default mainSlice.reducer;
