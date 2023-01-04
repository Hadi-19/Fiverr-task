import { useState } from 'react'
import { BrowserRouter,Routes , Route, Navigate} from 'react-router-dom';
import './App.css'

import RegisterForm from "./components/RegisterForm";
import MainForm from './components/EditUSerDetails';
import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from './components/LoginForm';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';



function App() {
 
  const {isAuthenticated}= useAuthContext();

  
  return (
    
    
      <BrowserRouter>
      <Navbar/>
    <Routes>
      
        <Route exact path='/' element={
            <ProtectedRoute >
            <UserDetails/>
        </ProtectedRoute>
        }/> 
        <Route exact path='/edit' element={
            <ProtectedRoute >
            <MainForm/>
        </ProtectedRoute>
        }/> 
        <Route exact path="/signup" element={!isAuthenticated?<RegisterForm/>:<Navigate to="/"/>} />
       <Route exact path="/login" element={!isAuthenticated?<LoginForm/>:<Navigate to="/"/>} />
      
      
    </Routes>
    </BrowserRouter>
  
    
  );
}

export default App
