import React, { useState } from 'react';
import './App.css';

function XLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'user' && password === 'password') {
      setMessage(`Welcome, ${username}!`);
      setUsername('');
      setPassword('');
      setIsLoggedIn(true);
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="XLogin">
      <h1>Login Page</h1>
      <div>{message}</div>
      <br />
      {!isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br/>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default XLogin;
