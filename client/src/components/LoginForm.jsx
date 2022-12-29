import React from 'react'
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const { login, signup, isAuthenticated, error } = useContext(AuthContext);

  // Form submission handlers
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    login(email.value, password.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    signup(name.value, email.value, password.value);
  };

  // Render login or signup form based on authenticated state
  if (isAuthenticated) {
   return <Navigate replace to='/protected-route'/>
  }
  else {
    return(
    <div>
    {error && <p>{error}</p>}
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <label>
      Password:
      <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Log in</button>
      </form>
      <br />
      <Link  to="/">Sign up</Link>
      </div>
  )
  }
}

export default LoginForm