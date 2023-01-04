import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

export const UserInfoContext=createContext()
export const UserInfoProvider=({children}) =>{

    const{isAuthenticated}=useAuthContext
    const [userInfo, setUserInfo] = useState({})
    const [redirectToEdit, setRedirectToEdit] = useState(true)

   isAuthenticated && useEffect(()=>{
        const getUserDetails=async()=>{
            try{
                const userDetails=await axios
                .get('http://localhost:5000/sectors/user',{headers:{"auth-token":JSON.parse(localStorage.getItem('user')).token}})
               if(Object.keys(userDetails).length>0){
                setUserInfo(userDetails);
                setRedirectToEdit(false)
               }
               
            }
            catch(error){
                setRedirectToEdit(true)

            }
        }
        const email=localStorage.getItem('user').email
        
        email && getUserDetails();

    },[])


    return(
        <UserInfoContext.Provider value={{userInfo,redirectToEdit}}>
            {children}
        </UserInfoContext.Provider>
    )
}

