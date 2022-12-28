import { useState } from 'react'
import './App.css'
import { AuthContext, useAuth } from "./context/AuthContext";
import AuthForm from "./components/AuthForm";
import ProtectedRoute from "./components/ProtectedRoute";

<ProtectedRoute path="/protected-route" component={ProtectedComponent} />

function App() {
 

  const { login, signup, isAuthenticated, error } = useAuth();

  return (
    <AuthContext.Provider
      value={{ login, signup, isAuthenticated, error }}
    >
      <AuthForm />
    </AuthContext.Provider>
  );
}

export default App
