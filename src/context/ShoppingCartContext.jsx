import { createContext, ReactNode, useContext, useState } from "react";
import React from "react";

const ShoppingCartContext=createContext({});

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}){
    const [cartItems, setCartItems]=useState([])

    function getItemQuantity(id){
        console.log("get quantity");
        return cartItems.find(item=>item.id===id)?.quantity||0
    }

    function increaseCarQuantity(id){
        setCartItems(currItems=>{
            if(currItems.find(item=>item.id===id)==null){
                return [...currItems,{id, quantity:1}]
            } else{
                return currItems.map(item=>{
                    if(item.id===id){
                       return{...item, quantity:item.quantity+1} 
                    }
                    else{
                        return item;
                    }
                })
            }
        })
    }

    function removeFromCart(id){
        //remueve el que sea diferente
        setCartItems(currItems=>{
            //tiene que checar si cada id, lo remueve y return todos los demas
            return currItems.filter(item=>item.id!==id)
        })
    }

    function decreaseCarQuantity(id){
        setCartItems(currItems=>{
            if(currItems.find(item=>item.id===id)?.quantity===1){
                return currItems.filter(item=>item.id!==id)
            } else{
                return currItems.map(item=>{
                    if(item.id===id){
                       return{...item, quantity:item.quantity-1} 
                    }
                    else{
                        return item;
                    }
                })
            }
        })
    }


    //this needs to have children or objects inside of it
    return <ShoppingCartContext.Provider value={{
        getItemQuantity,
        increaseCarQuantity,
        decreaseCarQuantity,
        removeFromCart}}>
        //render our children here
        {children}
    </ShoppingCartContext.Provider>
}