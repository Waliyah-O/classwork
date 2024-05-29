// src/redux/slices/productSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../../assets/dummyData";

const initialState = {
  products: [...dummyData],
  displayedPrice: "dollarPrice", 
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleDisplayedPrice: (state) => {
      state.displayedPrice =
        state.displayedPrice === "dollarPrice" ? "nairaPrice" : "dollarPrice";
    },
  },
});

export const { toggleDisplayedPrice } = productSlice.actions;

export default productSlice.reducer;
