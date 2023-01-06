import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from "./context/AuthContext";
import { UserInfoProvider } from './context/UserInfoContext';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



ReactDOM.createRoot(document.getElementById('root')).render(    
  <React.StrictMode>
    <AuthProvider>
      <UserInfoProvider>
        <App />
      </UserInfoProvider>
    </AuthProvider>
  </React.StrictMode>,
)
