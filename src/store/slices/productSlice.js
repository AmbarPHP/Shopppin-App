import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};
//1arg name of action, 2 arg is payrol creator
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      //console.log("obtener los datos del API", response.data);
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//one file have both reducer an actions
//reducer generarte action creators
//extrareducer
const productsSlice = createSlice({
  //to configure slice needs name, initial state
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      //immer
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
