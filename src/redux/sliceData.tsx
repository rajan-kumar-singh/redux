// sliceData.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CartItem {
  id: string; 
  quantity: number;
}


const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart", 
  initialState,
  reducers: {
  
    add(state, action: PayloadAction<CartItem>) {
      state.push(action.payload);
    },
    remove(state,action){
        return state.filter(item=>item.id!==action.payload)
    }
  },
});

export default cartSlice.reducer;
export const { add,remove } = cartSlice.actions;
