import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { redirect } from "react-router-dom";
//const{isAuthenticated}=useAuthContext()



export const UserInfoContext=createContext()


export const UserInfoProvider=({children}) =>{


   
    const [userInfo, setUserInfo] = useState({})
    const [redirectToEdit, setRedirectToEdit] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const getUserDetails=async()=>{
            try{
                const res=await axios
                .get('http://localhost:5000/sectors/user',{headers:{"auth-token":JSON.parse(localStorage.getItem('user')).token}})
               
                setUserInfo(res.data)
                console.log(res.data)
               
                console.log(userInfo)
             // console.log(userInfo.sectors.length)
              //  if (Object.keys(userInfo.sectors).length>0){
               // if(userInfo?.sectors?.length>0){
                    setRedirectToEdit(false)
                    console.log('setted to false')
                   //  }
                    // else{
                    //    console.log('setted true')
                    //  setRedirectToEdit(true)
                   //  }
            }
           
               
            
            catch(error){
                setRedirectToEdit(true)

            }
        }
        const email=JSON.parse(localStorage.getItem('user')).email
        
        email && getUserDetails();
       

    },[])

    const submitEditForm=async(name,sectors,hasAgree)=>{
       // console.log('here is the submit')
        console.table(name, sectors, hasAgree)
        try{
            if(!name) throw Error('name can\'t be empty') 
            if(!sectors || sectors.length===0) throw Error('please choose at least one sector')
            const res=await axios
                .post('http://localhost:5000/sectors/user',{name,sectors,hasAgree},{ headers:{"auth-token":JSON.parse(localStorage.getItem('user')).token}})
                setRedirectToEdit(false)
                console.log(res.data)
                setError(null)
                console.log(redirectToEdit)
                console.log(userInfo)
                redirect('/')
        }
        catch(e){
            setError(e)
        }
    }





    return(
        <UserInfoContext.Provider value={{error,userInfo,redirectToEdit,submitEditForm}}>
            {children}
        </UserInfoContext.Provider>
    )
}

