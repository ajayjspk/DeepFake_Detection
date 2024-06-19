import React, { useState } from 'react';
import './Styles/Login.css'

function Login() {
  // State for username and password input fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Perform login logic here
    // For example, you might send the data to an API or authenticate the user
    console.log('Username:', username);
    console.log('Password:', password);

    // Clear the form fields if needed
    setUsername('');
    setPassword('');
  };
const link1={
  textDecoration:'none'
}
  return (
    <div className="login-container">
      <h2>Login</h2>< a style={link1} href='/'>Home</a>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>if u don't have an account <a style={link1} href='/signup'>signup</a></p>
    </div>
  );
}

export default Login;
