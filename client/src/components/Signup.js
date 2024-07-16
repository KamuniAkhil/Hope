import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    async function registerUser(name, email, password) {
        try {
            const response = await fetch("http://localhost:8000/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
            navigate('/login');
            return data;
        } catch (error) {
            console.error(error);
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await registerUser(name, email, password);
            console.log(data);
        } catch (err) {
            setError(err.message);
        }
    };

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
                            <h5 className="card-title text-center mb-5 fw-light fs-5"><big>SignIn</big></h5>
                            <form action='POST' onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text" name='name' value={name} className="form-control" id="floatingName" placeholder="Username" onChange={(e) => { setName(e.target.value) }} />
                                    <label htmlFor="floatingPassword">UserName</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" name='email' value={email} className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value) }} />
                                    <label htmlFor="floatingInput">Email Address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" name='password' value={password} className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                                        in</button>
                                </div>
                                <hr className="my-4" />
                                <div className="d-grid mb-2">
                                    <button className="btn btn-google btn-login text-uppercase fw-bold">
                                        <i className="fab fa-google me-2"></i> Sign in with Google
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* {inputs} */}
        </div>
    );
}

export default Signup;