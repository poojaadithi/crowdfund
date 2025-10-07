import React from 'react';
import './Login.css';

function Login() {
  console.log("Login page rendered"); // ✅ Check browser console for this
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
