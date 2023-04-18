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
        return (item.id === itemId);
      });
      cartItem.amount += 1;
    },
    decreaseQty: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => {
        return (item.id === itemId);
      });
      cartItem.amount -= 1;
    },
    calculateTotal:(state,action)=>{
      let qty=0;
      let total=0;
      state.cartItems.forEach((item)=>{
        qty += item.amount
        total+=item.amount*item.price 
      })
      state.itemsQty=qty
      state.totalAmount=total.toFixed(2)
    }
  },
});

export const { clearCart, removeItem, increaseQty, decreaseQty,calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
