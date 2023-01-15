import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import{Link, Navigate} from 'react-router-dom'
import { useUserInfoContext } from '../hooks/useUserInfoContext'
const UserDetails = () => {
    const{userInfo2,dispatch,redirectToEdit,userInfo,setUserInfo,dispatchUserInfo,setRedirectToEdit,dispatchRedirectEdit}=useUserInfoContext()
    const{name,sectors}=userInfo 
    useEffect(()=>{
        const getUserDetails=async()=>{
            try{
                const res=await axios
                .get('http://localhost:5000/sectors/user',{headers:{"auth-token":JSON.parse(localStorage.getItem('user')).token}})
               
                
                dispatch({type:'SET_USER_INFO',payload:res.data})
                setUserInfo(res.data)
                console.log(userInfo2)
                console.log(res.data)            
                console.log(userInfo)
             // console.log(userInfo.sectors.length)
              //  if (Object.keys(userInfo.sectors).length>0){
                if(res.data?.sectors?.length>0){
                    dispatchRedirectEdit(false)
                    console.log('setted to false')
                     }
                     else{
                        console.log('setted true')
                     dispatchRedirectEdit(true)
                    }
            }
           
               
            
            catch(error){
                dispatchRedirectEdit(true)
                console.log('setted to true')
                console.log(error)

            }
        }
        const email=JSON.parse(localStorage.getItem('user')).email
        
        email && getUserDetails();
       

    },[])
    if(redirectToEdit){
        console.log('user info')
        console.log(userInfo)
        return <Navigate to="/edit"/>;
    } else{
       
  return (
    <div className="container">
        
        <div>Name: {name}</div>
        <ul>
            {sectors && sectors.length>0 && sectors.map((sector,i)=>{
                return <li key={i}>{sector.text}</li>
            })}
        </ul>
        
        
    <Link to="/edit" >edit your info</Link>
    <div>UserDetails</div>
    </div>
  )
}
}

export default UserDetails;