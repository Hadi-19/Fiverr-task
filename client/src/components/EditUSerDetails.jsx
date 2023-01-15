import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, redirect, useNavigate } from 'react-router-dom'
import { useUserInfoContext } from '../hooks/useUserInfoContext'

//import './App.css'

function EditUSerDetails() {
  const{userInfo,submitEditForm,error,redirectToEdit}=useUserInfoContext()
  //for fetching all sectors
  const [sectors, setSectors] = useState([])
  //for refilling the form
  const [name, setName] = useState(userInfo?.name || '')
  const [userSectors, setUserSectors] = useState(userInfo?.sectors || [])
  const [hasAgree, setHasAgree] = useState( userInfo?.hasAgree || false  )

  useEffect(()=>{
    
    const fetchSectors = async () => {
      try {
        const res = await axios.get("http://localhost:5000/sectors",{headers:{"auth-token":JSON.parse(localStorage.getItem('user')).token}});
       // console.log(res.data)
        sectors.length===0 && setSectors(res.data)
      } catch (err) {
        setSectors([err])
        //console.log(sectors)
      }
    };
    fetchSectors()


  },[])
  const navigate = useNavigate();
   
    const handleSubmit=(e)=>{
    e.preventDefault();
    
    submitEditForm(name,userSectors,hasAgree)
    console.log(redirectToEdit)
    if(!redirectToEdit) navigate('/') //return <Navigate to='/'/>
   
    }
   //else{
  return (
    <div className="container">
       {error &&  <p>{error.toString()}</p>}
      Please enter your name and pick the Sectors you are currently involved in.
      <br />
      <br />
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label> 
      <input type="text" name='name' value={name} onChange={e=>setName(e.target.value)} />
      <br />
      <br />
      <label htmlFor="sectors">Sectors: </label>
      <select multiple={true} size="5" name='sectors' value={userSectors} onChange={e=>setUserSectors([...e.target.selectedOptions].map(opt => opt.value))} >
        {
          /*
              value={userSectors} onChange={e=>{
        setUserSectors(e.target.value)
        console.log(userSectors)}}
          */ 
        }
        {sectors.length>0 && sectors.map((sector,index)=>{
          return <option key={index} value={sector.value}>{sector.text}</option>
          //"\u00A0".repeat(sector.space)+
        })}
         
      </select>
      <br/>
      <br/>
      <input type="checkbox" name="hasAgree"  checked={hasAgree} onChange={e=>setHasAgree(e.target.checked)} /> Agree to terms
      <br/>
      <br/>
      <input type="submit" value="Save"></input>
      </form>
    </div>
  )
}
//}

export default EditUSerDetails
