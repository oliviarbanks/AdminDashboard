import React, { useState } from 'react';
import axios from 'axios';
import './Registration.scss';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    company: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', formData); // Updated endpoint
      console.log('Registration successful:', response.data);
      // Redirect to login or handle as needed
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
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
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="company"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
