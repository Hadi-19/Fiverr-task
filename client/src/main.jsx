import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from "./context/AuthContext";
import { UserInfoProvider } from './context/UserInfoContext';



ReactDOM.createRoot(document.getElementById('root')).render(    
  <React.StrictMode>
    <AuthProvider>
      <UserInfoProvider>
        <App />
      </UserInfoProvider>
    </AuthProvider>
  </React.StrictMode>,
)
