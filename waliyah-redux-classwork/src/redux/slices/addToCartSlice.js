

import { createSelector } from "@reduxjs/toolkit";

export const getCartItemCount = createSelector(
  (state) => state.cart.items,
  (items) => items.reduce((total, item) => total + item.quantity, 0)
);

export const getCartTotalPrice = createSelector(
  (state) => state.cart.items,
  (state) => state.product.displayedPrice, 
  (items, displayedPrice) =>
    items.reduce(
      (totalPrice, item) =>
        totalPrice + parseFloat(item[displayedPrice].replace(/[^0-9.-]+/g, "")) * item.quantity,
      0
    )
);
