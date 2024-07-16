import React, { useState, useEffect } from 'react';
import axios from 'axios';
function User({ food }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8000/donations');
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, []);

  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/donations')
      .then(res => {
        setDonations(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/donations/${id}`);
      setDonations(donations.filter(donation => donation._id !== id));
      alert('Donation deleted successfully');
    } catch (err) {
      console.error(err);
      alert('Failed to delete donation');
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='row gy-5'>
          {orders.map((order) => (
            <div className='col-4'>
              <div key={order._id} className='.form-group'>
                <div className="card card-margin">
                  <div className="card-header no-border">
                    <h5 className="card-title">{order.name}</h5>
                  </div>
                  <div className="card-body pt-0">
                    <div className="widget-49">
                      <div className="widget-49-title-wrapper">
                        <div className="widget-49-date-primary">
                          <span className="widget-49-date-day">{order.quantity}</span>
                          <span className="widget-49-date-month"></span>
                        </div>
                        <div className="widget-49-meeting-info">
                          <span className="widget-49-pro-title">{order.name}</span>
                          <span className="widget-49-meeting-time">{order.contact}</span>
                        </div>
                      </div>
                      <ul className="widget-49-meeting-points">
                        <li className="widget-49-meeting-item"><span>{order.items}</span></li>
                        <li className="widget-49-meeting-item"><span>{order.address}</span></li>
                        <li className="widget-49-meeting-item"><span>{order.description}</span></li>
                        <li className="widget-49-meeting-item"><span>{order.date}</span></li>
                        {/* <li className="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li> */}
                        <div>
                          <button type="button" onClick={() => handleDelete(order._id)}  className="btn btn-success">
                          Pick Food
                          </button>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default User;
