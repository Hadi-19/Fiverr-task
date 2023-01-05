import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
//const{isAuthenticated}=useAuthContext()



export const UserInfoContext=createContext()


export const UserInfoProvider=({children}) =>{


   
    const [userInfo, setUserInfo] = useState({})
    const [redirectToEdit, setRedirectToEdit] = useState(false)

    useEffect(()=>{
        const getUserDetails=async()=>{
            try{
                const res=await axios
                .get('http://localhost:5000/sectors/user',{headers:{"auth-token":JSON.parse(localStorage.getItem('user')).token}})
               
                setUserInfo(res.data);
               if(userInfo.sectors ){
                if (Object.keys(userInfo.sectors).length>0){
                setRedirectToEdit(false)
               }
               else{
                setRedirectToEdit(true)
               }
            }
            else{
                setRedirectToEdit(true)
            }
               
            }
            catch(error){
                setRedirectToEdit(true)

            }
        }
        const email=JSON.parse(localStorage.getItem('user')).email
        
        email && getUserDetails();

    },[])

    const submitEditForm=(name,sectors,hasAgree)=>{
        console.log('here is the submit')
        console.table(name, sectors, hasAgree)
        console.log(sectors)
    }





    return(
        <UserInfoContext.Provider value={{userInfo,redirectToEdit,submitEditForm}}>
            {children}
        </UserInfoContext.Provider>
    )
}

