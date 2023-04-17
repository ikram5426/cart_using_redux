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
  reducers:{
    clearCart:(state)=>{
      state.cartItems=[]
    },
    removeItem:(state,action)=>{
const itemId=action.payload;
state.cartItems=state.cartItems.filter((item)=>{
  return item.id !== itemId
})
    }
  }
});

export const {clearCart,removeItem}=cartSlice.actions

export default cartSlice.reducer;
