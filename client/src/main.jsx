import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { AuthContext, useAuth } from "./context/AuthContext";
// const { login, signup, isAuthenticated, error } = useAuth();


ReactDOM.createRoot(document.getElementById('root')).render(    
  <React.StrictMode>
    {/* <AuthContext.Provider
      value={{ login, signup, isAuthenticated, error }}
    > */}
    <App />
    {/* </AuthContext.Provider> */}
  </React.StrictMode>,
)
