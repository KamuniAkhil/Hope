import React, { useState, useEffect } from 'react';
// import './Trust.css';
import axios from 'axios';

function Trust() {

  const [trusts, setTrusts] = useState([]);

  useEffect(() => {
    const fetchTrusts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/trusts');
        setTrusts(response.data);
      } catch (error) {
        console.error('Error fetching trusts:', error);
      }
    };
    fetchTrusts();
  }, []);
  //console.log(trusts);

  return (
    <div className='container'>
      <div className='row'>
        {trusts && 
        trusts.map((trust) => (
          // console.log(trusts);
          <div className='col-0'>
            <div className='card' key={trust._id}>
              <div className="card-body">
                <h5 className="card-title">{trust.trustname}</h5> 
                <h6 className="card-text">{trust.organiser}</h6>
                <p className="card-text">{trust.description}</p>
                <h6 className="card-text">{trust.residents}</h6>
              </div>
              <div className="card-footer text-muted">
                {trust.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


  )
}

export default Trust
