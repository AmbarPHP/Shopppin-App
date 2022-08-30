import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/products"
      );
      console.log("obtener los datos del API");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//one file have both reducer an actions
const productsSlice = createSlice({
  //to configure slice needs name, initial state
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

//export actions from a particular slice
export default productsSlice.reducer;
