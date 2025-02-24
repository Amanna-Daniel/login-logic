// src/components/SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';
import "../styles.css";

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('http://localhost:8000/api/signup/', { // Your Django signup endpoint
        email,
        username,
        password,
      });

      console.log('Signup successful:', response.data);
      setSuccess('Signup successful!');
      setEmail('');
      setUsername('');
      setPassword('');

    } catch (error) {
      console.error('Signup error:', error.response.data);
      setError(error.response.data.message || 'An error occurred during signup.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Sign Up</h2>

      {success && <div className="success-message">{success}</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="mb-4">
        <label htmlFor="email" className="form-label"></label>
        <input placeholder='Enter your email'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="username" className="form-label"></label>
        <input placeholder='Enter your username'
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="form-label"></label>
        <input placeholder='Enter your password'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          required
        />
      </div>
      <button type="submit" className="form-button" >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
