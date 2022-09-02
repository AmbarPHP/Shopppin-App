import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
   
      const index = state.cartItems.findIndex(
        (item) => item.product=== action.payload.id
      );
 
      
        //si existe , lo encontro

     
      if (index >-1) {
        console.log("si ya existe");
        state.cartItems[index]={...state.cartItems[index],
          cartQuantity: state.cartItems[index].cartQuantity + 1
      }
          
      console.log("*) setea el cartItems ",state.cartItems[index],"quantity", state.cartItems[index].cartQuantity);
        //console.log("3) setea el cartItems a", state.cartItems[existingIndex]);
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        //si no existe 
        console.log("2) si la cantidad en cartItems es =0") 
       
        let tempProductItem = { 
          product:action.payload.id,
          name:action.payload.title,
          prices:action.payload.price,
          image: action.payload.image,
          cartQuantity: 1 };
        //si estaba en ceros
        state.cartItems.push(tempProductItem);
        console.log("3) setea el cartItems a ", tempProductItem);

  
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      console.log("cartSlice.js despues decrese to cart")
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals(state, action) {

      console.log("2) calculando el total")
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { prices, cartQuantity } = cartItem;
          console.log(") precio", prices," cartQuantity",cartQuantity );
          const itemTotal = prices * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;