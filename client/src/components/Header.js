import "./Header.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from "./Auth";

function Header(props) {
  const navigate = useNavigate();
  const auth = useAuth();

  const [email, setEmail] = useState('');

  useEffect(() => {
    // Fetch email from backend
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        // setEmail(res.data.email);
        // console.log(email);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:8000/logout', { method: 'POST' });
      localStorage.removeItem('jwt');
      // Redirect the user to the login page or display a message
      navigate('/');
      auth.logout();
    } catch (err) {
      console.error(err);
      // Display an error message
    }
  };

  return (
    <div>
      <div className="header-blue">
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
          <div className="container-fluid"><a className="navbar-brand" href="#"><h1>Hope</h1></a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse"
              id="navcol-1">
              <ul className="nav navbar-nav">
                <li className="nav-item" role="presentation"><NavLink className="nav-link" to="/"> Home </NavLink></li>
                <li className="nav-item" role="presentation"><NavLink className="nav-link" to="/foodform" href="#"> Donate </NavLink></li>
                <li className="nav-item" role="presentation"><NavLink className="nav-link" to="/register"> Register </NavLink></li>
                <li className="nav-item" role="presentation"><NavLink className="nav-link" to="/trust"> Trust </NavLink></li>
                <li className="nav-item" role="presentation"><NavLink className="nav-link" to="/about"> About </NavLink></li>
              </ul>
              <form className="form-inline mr-auto" target="_self">
                <div className="form-group">
                  <label htmlFor="search-field"><i className="fa fa-search text-white"></i></label>
                  <input className="form-control search-field" type="search" id="search-field" name="search" />
                </div>
              </form>
              {(!auth.user) ? (<div className="buttons">
                <NavLink className="btn btn-light action-button" to="/login" role="button" >Log In</NavLink>
                <NavLink className="btn btn-light action-button" to="/signup" role="button" >Signup</NavLink>
              </div>) :
                (<div className="buttons">
                  <b className="bg-primary">{auth.user.email}</b>
                  <NavLink className="btn btn-light action-button" onClick={handleLogout} role="button" >Logout</NavLink>
                </div>)
              }
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Header;