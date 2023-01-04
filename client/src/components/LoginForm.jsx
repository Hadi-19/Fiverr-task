import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";


const LoginForm = () => {
  const { login, signup, isAuthenticated, error } = useAuthContext()

  // Form submission handlers
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    login(email.value, password.value);
  };

 

  // Render login or signup form based on authenticated state
  /*if (isAuthenticated) {
   return <Navigate replace to='/protected-route'/>
  }
  else {*/
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
      <Link  to="/signup">Sign up</Link>
      </div>
  )
  //}
}

export default LoginForm