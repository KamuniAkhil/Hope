import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import jwt from 'jsonwebtoken';
import './Login.css';
import { useAuth } from './Auth';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [user,setUser] = useState({
    isLogged:loggedIn
  });
  
  const auth = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8000/login', { email, password });
      localStorage.setItem('token', res.data.token); // Save token to localStorage
      setLoggedIn(true); // Set loggedIn to true
      console.log(loggedIn);

    } catch (err) {
      console.error(err);
    }
    auth.login(user)

    // navigate('/');

    if (loggedIn) {
      navigate('/user');
    }

  };

  // functio n isLoggedIn() {
  //   const token = localStorage.getItem('token');
  //   return token !== null;
  // }


  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <button type="button" onClick={(e) => { navigate('/') }} className="btn-close">
                <span className="icon-cross"></span>
                <span className="visually-hidden">Close</span>
              </button>
              <span className="cross-stand-alone"></span>
              <span className="cross-1px"></span>
              <h5 className="card-title text-center mb-5 fw-light fs-5"><h2>Log In</h2></h5>
              <form>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" onClick={handleLogin} >Login</button>
                </div>
                <hr className="my-4" />
                <div className="d-grid mb-2">
                  <button className="btn btn-google btn-login text-uppercase fw-bold" >
                    <i className="fab fa-google me-2"></i> Log in with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;