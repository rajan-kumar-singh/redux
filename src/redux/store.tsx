// store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./sliceData"; // Assuming you export the reducer as default
import ProductSlice from "./ProductSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice, // Use cartReducer here
    prodects: ProductSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
