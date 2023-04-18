import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  itemsQty: 5,
  totalAmount: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId;
      });
    },
    increaseQty: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => {
        return (item.id = itemId);
      });
      cartItem.amount += 1;
    },
    decreaseQty: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => {
        return (item.id = itemId);
      });
      cartItem.amount -= 1;
    },
  },
});

export const { clearCart, removeItem, increaseQty, decreaseQty } =
  cartSlice.actions;

export default cartSlice.reducer;
