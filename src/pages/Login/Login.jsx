import React, { useState } from 'react';
import axios from 'axios';
import './Login.scss';
import { Link } from 'react-router-dom';



function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/login', formData);
      console.log('Login successful:', response.data);
      // Store the JWT token in local storage or a cookie
      // Redirect to the protected dashboard or handle as needed
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <Link to="/dashboard">
          <button type="submit">Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
