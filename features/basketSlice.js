import { createSlice, configureStore } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const removeItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.pop(removeItemIndex);
    },
    emptyBasket: (state) => {
      state.items = [];
    },
  },
});

export const { addToBasket, removeFromBasket, emptyBasket } =
  basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
