// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import "../styles.css";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:8000/api/login/', { // Your Django login endpoint
        username,
        password,
      });

      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);
      window.location.href = '/dashboard'; // Or wherever you redirect after login

    } catch (error) {
      console.error('Login error:', error.response.data);
      setError(error.response.data.message || 'Invalid credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Login</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="mb-4">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          required
        />
      </div>
      <button type="submit" className="form-button">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
