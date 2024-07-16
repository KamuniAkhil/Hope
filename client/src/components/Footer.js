import React from 'react'

function Footer() {
  return (
    <div>
        {/* <title>Bootstrap 5 Footer</title> */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
        <footer className="bg-dark mx-0 h-100 text-white pt-0 pb-0">
          <div className="container text-center text-md-left">
            <div className="row text-center text-md-left">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">HOPE</h5>
                <p>Share what you have, help feed those in need </p>
                <p>"Donate food, spread love, and feed the hungry." </p>

              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Donations</h5>
                <p>
                  <a href="#" className="text-white" style={{textDecoration: 'none'}}> CBIT</a>
                </p>
                <p>
                  <a href="#" className="text-white" style={{textDecoration: 'none'}}> Spandana</a>
                </p>
                <p>
                  <a href="#" className="text-white" style={{textDecoration: 'none'}}> Street Cause</a>
                </p>
                <p>
                  <a href="#" className="text-white" style={{textDecoration: 'none'}}> NSS</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful links</h5>
                <p>
                  <a href="#" className="text-white" style={{textDecoration: 'none'}}> Your Account</a>
                </p>
                <p>
                  <a href="#" className="text-white" style={{textDecoration: 'none'}}> Become a Member</a>
                </p>
                <p>
                  <a href="#" className="text-white" style={{textDecoration: 'none'}}>Donate</a>
                </p>
                <p>
                  <a href="#" className="text-white" style={{textDecoration: 'none'}}> Help</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                <p>
                  <i className="fas fa-home mr-3" />CBIT Hyderabad Telangana
                </p>
                <p>
                  <i className="fas fa-envelope mr-3" />fooddonation@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3" />+92 9999999999
                </p>
                <p>
                  <i className="fas fa-print mr-3" />+01 335 633 77
                </p>
              </div>
            </div>
            {/* <hr className="mb-4" /> */}
            <div className="row align-items-center">
              <div className="col-md-7 col-lg-8">
                <p> Copyright ©2020 All rights reserved by:
                  <a href="#" style={{textDecoration: 'none'}}>
                    <strong className="text-warning">Food Donation-Hope</strong>
                  </a></p>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="text-center text-md-right">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-facebook" /></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-twitter" /></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-google-plus" /></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-linkedin-in" /></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><i className="fab fa-youtube" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}

export default Footer