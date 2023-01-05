import React from 'react'
import{Link, Navigate} from 'react-router-dom'
import { useUserInfoContext } from '../hooks/useUserInfoContext'
const UserDetails = () => {
    const{redirectToEdit,userInfo}=useUserInfoContext()
    const{name,sectors}=userInfo
    if(redirectToEdit){
        console.log('user info')
        console.log(userInfo)
        return <Navigate to="/edit"/>;
    } else{
       
  return (
    <div className="container">
        
        <div>Name: {name}</div>
        <ul>
            {sectors && sectors.length>0 && sectors.map(sector=>{
                return <li>{sector}</li>
            })}
        </ul>
        
        
    <Link to="/edit" >edit your info</Link>
    <div>UserDetails</div>
    </div>
  )
}
}

export default UserDetails;