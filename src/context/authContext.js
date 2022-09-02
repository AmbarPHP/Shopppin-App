//https://www.youtube.com/watch?v=H_vEJt5Id_I&ab_channel=FaztCode
import {createContext,useContext, useState} from "react";
import { useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { auth } from "../firebase";

export const authContext= createContext();


export const useAuth=()=>{
    //retorna toda la info
    const context = useContext(authContext);
    if(!context) throw new Error("There is no Auth Provider");
    return context;
}

export function AuthProvider({children}){

    const [user, setUser]=useState("");

   /* shitf+alt+A const user={
        login:true
    }; */

    useEffect(()=>{
        onAuthStateChanged(auth, currenUser=>{
            console.log("Auth provider loader",currenUser);
            setUser(currenUser);
        });
    },[])

    const signUp=(email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Sucess", user);
            return user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
           const errorMessage = error.message;
           console.log("Erororororo", error.message);
           return errorMessage;
          });
    }

    const login = async (email, password)=>{
        
        const userCredentials= await signInWithEmailAndPassword(auth, email, password);
        console.log("logramos hacer login",userCredentials);
    }

    //para cerrar la session
    const logout = ()=> signOut(auth);


    return (
        <authContext.Provider value={{signUp, login, user, logout}}>
            {children}
        </authContext.Provider>
    )
}