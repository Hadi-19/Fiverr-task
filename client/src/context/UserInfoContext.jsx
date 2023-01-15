import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useReducer } from "react";
//const{isAuthenticated}=useAuthContext()



export const UserInfoContext=createContext()
export const userInfoReducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER_INFO': 
        return {
          userInfo2: action.payload
        }
      case 'CREATE_USER_INFO':
        return {
          userInfo2: [action.payload, ...state.userInfo]
        }
      default:
        return state
    }
  }


export const UserInfoProvider=({children}) =>{


   
    const [userInfo, setUserInfo] = useState({})
    const dispatchUserInfo=(info)=>{
       return setUserInfo(info)
    }
    const [redirectToEdit, setRedirectToEdit] = useState(false)
    const dispatchRedirectEdit=(bool)=>{
       return setRedirectToEdit(bool)
    }
    const [error, setError] = useState(null)
    //const [submit, setSubmit] = useState(null)

    const [state, dispatch] = useReducer(userInfoReducer, {
        userInfo2: null
      })
      


    

    

    const submitEditForm=async(name,sectors,hasAgree)=>{
        
       // console.log('here is the submit')
        console.log(name, sectors, hasAgree)
        try{
            if(!name) throw Error('name can\'t be empty') 
            if(!sectors || sectors.length===0) throw Error('please choose at least one sector')
            const res=await axios
                .post('http://localhost:5000/sectors/user',{name,sectors,hasAgree},{ headers:{"auth-token":JSON.parse(localStorage.getItem('user')).token}})
                setRedirectToEdit(false)
            dispatch('')
                //console.log(res.data)
                setError(null)
               // setSubmit(true)
                // console.log(redirectToEdit)
                // console.log(userInfo)
             //  return <Navigate to='/' replace/>
        }
        catch(e){
            setError(e)
        }
    }





    return(
        <UserInfoContext.Provider value={{...state,dispatch,error,userInfo,setUserInfo,dispatchUserInfo,redirectToEdit,setRedirectToEdit,dispatchRedirectEdit,submitEditForm}}>
            {children}
        </UserInfoContext.Provider>
    )
}

