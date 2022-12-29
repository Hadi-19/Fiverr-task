import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AuthForm = () => {
  const { login, signup, isAuthenticated, error,redirectToLogin,setRedirectToLogin } = useContext(AuthContext);

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
  if (redirectToLogin) {
    setRedirectToLogin(false)
   return <Navigate replace to='/login'/>
  } else {
    return (
        <>
   
<div>
  {error &&  <p>{error.toString()}</p>}
  <form onSubmit={handleSignup}>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <br />
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
    <button type="submit">Sign up</button>
  </form>
  <br />
  <Link  to="/login">Login</Link>
</div>
</>);
}}

export default AuthForm;
