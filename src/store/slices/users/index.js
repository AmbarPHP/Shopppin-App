import {createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//https://www.softkraft.co/how-to-setup-slices-with-redux-toolkit/

export const userSlices= createSlice(
    {
        name:"users",
        initialState:{
            list:[]
        },
        reducers:{
            //responsable de actualizar el estado
            setUserList:(state, action)=>{
                console.log("reducer seteando user:", action.payload);
                state.list=action.payload;
            }
        }
    }
);

//queda visible de etas forma
export const {setUserList}=userSlices.actions;

export default  userSlices.reducer;

//pasar como variable dispatch
export const fecthAllUsers=()=>(dispatch)=>{
   
    //return a function 
    axios.get("https://fakestoreapi.com/users")// //http://localhost:5000/users
    .then((response)=>{
        //data
        //console.log("fetch users userSlice",response.data);
        dispatch(setUserList(response.data));
    })
    .catch((error)=>console.log(Error))

}