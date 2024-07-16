import React, { useState } from 'react';
import axios from 'axios';
import './foodform.css';

function FoodForm() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [items, setItems] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');

    const placeOrder = async (name, contact, items, quantity, address, description) => {
        try {
            const response = await axios.post('http://localhost:8000/donations', {
                name,
                contact,
                items,
                quantity,
                address,
                description
            });
            if (response.status === 201) {
                console.log('Order placed successfully');
                window.location.href = '/user';
            }
        } catch (error) {
            console.error(error);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        placeOrder(name, contact, items, quantity, address, description);
    };

    return (
        <div className="container">
            <div className=" text-center mt-5 ">
                <h1 >Food Donation Form</h1>
            </div>
            <div className="row ">
                <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container">
                                <form id="contact-form"  onSubmit={submitHandler}>
                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="form_name">Name</label>
                                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your name" required="required" data-error="Name is required." value={name} onChange={(e) => { setName(e.target.value) }} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="form_number">Contact</label>
                                                    <input id="form_number" type="text" name="number" className="form-control" placeholder="Enter your contact number" required="required" data-error="Contact is required." value={contact} onChange={(e) => { setContact(e.target.value) }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="form_items">Items</label>
                                                    <input id="form_items" type="text" name="items" className="form-control" placeholder="Enter items" required="required" value={items} onChange={(e) => { setItems(e.target.value) }} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="form_need">Quantity</label>
                                                    <input id="form_Quantity" type="number" name="quantity" className="form-control" placeholder="Please enter Quantity" required="required" data-error="Quantity is required." value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="form_Address">Address</label>
                                                    <input id="form_Address" type="text" name="Address" className="form-control" placeholder="Please enter Address" required="required" data-error="Valid Address is required." value={address} onChange={(e) => { setAddress(e.target.value) }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="form_message">Description</label>
                                                    <textarea id="form_message" name="message" className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message." value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-success btn-send  pt-2 btn-block
                            " value="Send Message" >Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FoodForm;