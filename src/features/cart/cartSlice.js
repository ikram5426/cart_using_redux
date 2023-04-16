import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState={
  cartItems:cartItems,
itemsQty:5,
totalAmount:0,
isLoading:true
}


const cartSlice=createSlice({
name:'cart',
initialState,
})

export default cartSlice.reducer;