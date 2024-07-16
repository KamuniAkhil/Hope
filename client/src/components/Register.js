import React, { useState } from 'react';
import axios from 'axios';


import './Register.css';
function Register() {
    const [trustname, setTrustname] = useState('');
    const [organiser, setOrganiser] = useState('');
    const [residents, setResidents] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');

    const createTrust = async (trustname, organiser, residents, type, location, description) => {
        try {
            const response = await axios.post('http://localhost:8000/trusts', {
                trustname,
                organiser,
                residents,
                type,
                location,
                description
            });
            console.log(response.data);
            if (response.status === 201) {
                console.log('Registered successfully');
                window.location.href = '/trust';
            }
        } catch (error) {
            console.error(error);
        }
    };

    const submitHandler = async event => {
        event.preventDefault();
        await createTrust(trustname, organiser, residents, type, location, description);
    };

    return (
        <div>
            <div>
                <section className="container my-2 bg-light w-50 text-dark p-3">
                    <button type="button" className="btn-close">
                        <span className="icon-cross"></span>
                        <span className="visually-hidden">Close</span>
                    </button>
                    <span className="cross-stand-alone"></span>
                    <span className="cross-1px"></span>
                    <header className="text-center">
                        <h1 className="display-8 ">Register Here!!</h1>
                    </header>
                    <form className="row g-3 p-3 " onSubmit={submitHandler}>
                        <div className="col-md-6">
                            <label htmlFor="validationDefault01" className="form-label">Trust Name</label>
                            <input type="text" className="form-control" id="validationDefault01" value={trustname} onChange={(e) => { setTrustname(e.target.value) }} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="validationDefault02" className="form-label">Organiser</label>
                            <input type="text" className="form-control" id="validationDefault02" value={organiser} onChange={(e) => { setOrganiser(e.target.value) }} required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail4" className="form-label">Number of residents</label>
                            <input type="number" className="form-control" id="inputEmail4" value={residents} onChange={(e) => { setResidents(e.target.value) }} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Type of Trust</label>
                            <input type="text" className="form-control" id="inputPassword4" value={type} onChange={(e) => { setType(e.target.value) }} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={location} onChange={(e) => { setLocation(e.target.value) }} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Description</label>
                            <textarea type="text" className="form-control" id="inputAddress2" placeholder="Write about your trust..." value={description} onChange={(e) => { setDescription(e.target.value) }} />
                        </div>
                        <div className="col-md-12  text-center">
                            <button type="submit" onClick={submitHandler} className="btn btn-outline-primary">Register</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Register