import { useAuth } from "../context/AuthContext";

const AuthForm = () => {
  const { login, signup, isAuthenticated, error } = useAuth();

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
    return <p>You are logged in!</p>;
  } else {
    return (
        <>
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
  <button onClick={() => setIsSignup(true)}>Sign up</button>
</div>
<div>
  {error && <p>{error}</p>}
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
  <button onClick={() => setIsSignup(false)}>Back to login</button>
</div>
</>);
}}

export default AuthForm;
