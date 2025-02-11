import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info-area pt-100 pb-70">
        <div className="container main">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 item MyItem" style={{width : '50%'}}> 
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Delhi</h3>
                <p>
                A-66, Third floor Sector-63, Noida- 201301
                </p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6 col-sm-12 MyItem" style={{width : '50%'}}>
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Mumbai</h3>
                <p>
                  Lal Bahadur Shastri Rd, Bhandup, Sadan wadi, Bhandup West,
                  Mumbai, Maharashtra 400078
                </p>
              </div>
            </div> */}

            {/* <div className="col-lg-4 col-md-6 col-sm-12 MyItem" style={{width : '50%'}}>
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Bangalore</h3>
                <p>
                  Mahatma Gandhi Road, opposite to 1MG Mall, Bengaluru,
                  Karnataka 560042
                </p>
              </div>
            </div> */}
{/* 
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Canada</h3>
                <p>
                  4792, Factory Lane, Lumsden,Newfoundland & Labrador,Canada
                </p>
                <p>Tel. +91 9811124255</p>
              </div>
            </div> */}
            {/* <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-contact-info">
                <i className="bx bx-phone-call"></i>
                <i className="bx bx-location-plus"></i>
                <h3>USA</h3>
                <p>USA-1104 Avenue C Bayonne, New Jersey-07002, USA</p>
                <p>Tel. +18562132132</p>
              </div>
            </div> */}

            {/* <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Contact Details</h3>
                <p>
                   +91 9811124255,
                  <br />
                  +91 9811124632
                  <br />
                  011204340655                 
                </p>
              </div>
            </div> */}

            <div className="col-lg-4 col-md-6 col-sm-12 MyItem" style={{width : '50%'}}>
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Contact Details</h3>
                <p>
                Email - info@flyweis.technology 
                  <br />
                  +91 9811124632
                  <br />
                  011204340655        
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
