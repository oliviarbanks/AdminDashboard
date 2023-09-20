import React, { useState } from 'react';
import axios from 'axios';
import './Registration.scss';
import { Link, useNavigate } from 'react-router-dom'; 

function Registration() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    company: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/signup', formData);
      console.log('Registration successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className='center-form'>
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
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
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
      <div className="login-link">
        <Link to="/login">Already have an account? Login here</Link>
      </div>
    </div>
  );
}

export default Registration;
