import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="header-blue"> */}
      <div className="container hero">
        <div className="row">
          <div className="left col-12 col-lg-6 col-xl-5 offset-xl-1">
            <h1>Food Donation</h1>
            <p><b>"No one has ever become poor by giving"</b>
            <br/> - Anne Frank<br/>
              This quote can be applied to food donation, as it highlights the fact that giving to others, even in terms of food, can never diminish one's own wealth or well-being. It encourages people to give what they can to help those in need, including through food donation.<br /></p>
            <button onClick={(e) => { navigate('/about') }}
              className="btn btn-light btn-lg action-button" type="button">Learn More<i className="fa fa-long-arrow-right ml-2"></i></button>
          </div>
          <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
            <div className="iphone-mockup">
              <img className="device" src="https://media.istockphoto.com/id/1223169200/vector/food-and-grocery-donation.jpg?s=612x612&w=0&k=20&c=0fv8hwXeS9RCL-ewqkr2oyi0Nu8jAQxGtroS0XA9nsQ=" alt='foodpic' />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
export default Home