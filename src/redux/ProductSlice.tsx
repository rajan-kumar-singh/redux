// sliceData.ts
import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";


interface CartItem {
  id: string; 
  quantity: number;
}


const initialState={
    data:[]
};

const productSlice = createSlice({
  name: "prodects", 
  initialState,
  reducers: {
    fetchProducts(state,action){
        state.data=action.payload;

    }
  
   
  },
});

export default productSlice.reducer;
export const {fetchProducts } = productSlice.actions;



export function getProduct() {
    return async function getProductsThunk(dispatch: any, getState: any) {
      try {
        const response = await fetch('https://fakestoreapi.com/products');  // Make sure the fetch request is awaited
  
        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
  
        const result = await response.json(); // Await the JSON parsing
        dispatch(fetchProducts(result)); // Dispatch action with the result data
      } catch (error: any) {
        console.error('Error fetching products:', error);
        // Optionally dispatch an error action if needed
        // dispatch(fetchProductsFailure(error.message));
      }
    };
  }
