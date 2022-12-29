import { useState } from 'react'
import { BrowserRouter, Router,Routes , Route} from 'react-router-dom';
import './App.css'
import { AuthProvider } from "./context/AuthContext";
import AuthForm from "./components/AuthForm";
import MainForm from './components/MainForm';
import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from './components/LoginForm';



function App() {
 

  
  return (
    
    <AuthProvider>
      <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<AuthForm/>} />
       <Route exact path="/login" element={<LoginForm/>} />
        <Route exact path='/protected-route' element={
            <ProtectedRoute >
            <MainForm/>
        </ProtectedRoute>
        }/> 
      {/*<Route exact path="/signup" component={Signup} /> */}
      
    </Routes>
    </BrowserRouter>
  </AuthProvider>
    
  );
}

export default App
