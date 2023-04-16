import { createSlice } from "@reduxjs/toolkit";


const initialState={
  cartItems:[],
itemsQty:0,
totalAmount:0,
isLoading:true
}


const cartSlice=createSlice({
name:'cart',
initialState,
})

export default cartSlice.reducer;