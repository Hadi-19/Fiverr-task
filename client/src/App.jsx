import { useState } from 'react'
import { BrowserRouter,Routes , Route, Navigate} from 'react-router-dom';
import './App.css'

import RegisterForm from "./components/RegisterForm";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from './components/LoginForm';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import EditUSerDetails from './components/EditUSerDetails';
import { useUserInfoContext } from './hooks/useUserInfoContext';



function App() {
 
  const {isAuthenticated}= useAuthContext();
  const {redirectToEdit}= useUserInfoContext()

  
  return (
    
    
      <BrowserRouter>
      <Navbar/>
    <Routes>
      
        <Route exact path='/' element={!redirectToEdit?
            <ProtectedRoute >
            <UserDetails/>
        </ProtectedRoute>:<Navigate to="/edit"/>
        }/> 
        <Route exact path='/edit' element={
            <ProtectedRoute >
            <EditUSerDetails/>
        </ProtectedRoute>
        }/> 
        <Route exact path="/signup" element={!isAuthenticated?<RegisterForm/>:<Navigate to="/"/>} />
       <Route exact path="/login" element={!isAuthenticated?<LoginForm/>:<Navigate to="/"/>} />
      
      
    </Routes>
    </BrowserRouter>
  
    
  );
}

export default App
