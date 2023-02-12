import { useEffect } from "react";
import { useState,useContext,createContext } from "react";
import { useNavigate } from "react-router-dom";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../util/firebase/firebase.utils";

const AuthContext = createContext(null)

export const AuthProvider =({children})=>{
    const [user,setUser]= useState(null)
    const navigate = useNavigate()
    
   useEffect(()=>{
     const unsubscribe  = onAuthStateChangedListener((user)=>{
        //  console.log(user)
         
        if (user){
            createUserDocumentFromAuth(user);
            navigate('/')
        }
        setUser(user)
        if (user){
            navigate('/')
            }
     })
     
     return unsubscribe
   },[])

  
  
  
    //  if(user){
    //     navigate('/')
    //  }

 

    return <AuthContext.Provider value={{setUser,user}}>{children}</AuthContext.Provider>
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}