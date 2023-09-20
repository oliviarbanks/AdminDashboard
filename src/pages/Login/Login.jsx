import React, { useState } from 'react';
import axios from 'axios';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom'; 

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [stateToken, setToken] = useState("")
	const [formSumbission, setFormSubmission] = useState(false);


  const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
			email: email,
			password: password,

		};
    if (email && password){
      axios.post (`http://localhost:3001/auth/login`, userData)
        .then((response) => {
          console.log(response.status, response.data)
          sessionStorage.token = response.data.token
          setToken(response.data.token)
          navigate(`/dashboard`)
        })
        .catch(error => {
          console.error(error);
        });
      }
        else {
          setFormSubmission(true);
          alert('Please fill in both fields.');
        }
  
    };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="center-form">
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="login-link">
        <Link to="/register">Don't have an account? Register here</Link>
      </div>
    </div>
  );
}

export default Login;
