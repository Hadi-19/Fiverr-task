import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is authenticated on page load
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth",{headers:{"auth-token":JSON.parse(localStorage.getItem('user')).token}});
        setIsAuthenticated(true);
      } catch (err) {
        setIsAuthenticated(false);
      }
    };
    
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
     checkAuth();
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login", { email, password });
      
      localStorage.setItem('user',JSON.stringify(res.data))
      setIsAuthenticated(true);
      setError(null);
    } catch (err) {
      setIsAuthenticated(false);
      setError(err.response.data.error);
    }
  };

  // Signup function
  const signup = async (name, email, password) => {
    try {
       
      const res = await axios.post("http://localhost:5000/auth/signup", { name, email, password });
     // setIsAuthenticated(true);
     localStorage.setItem('user',JSON.stringify(res.data))
     setIsAuthenticated(true)
     
      setError(null);
    } catch (err) {
      setIsAuthenticated(false);    
      setError(err.response.data);
    }
  };
  
  return (
    <AuthContext.Provider
      value={{ isAuthenticated,setIsAuthenticated, login, signup, error,redirectToLogin,setRedirectToLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
  } 
