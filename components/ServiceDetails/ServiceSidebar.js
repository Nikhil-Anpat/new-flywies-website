/** @format */

import Router from "next/router";
import React, { Component } from "react";

class ServiceSidebar extends Component {
  render() {
    return (
      <>
        <div className="service-sidebar-area">


          <div className="service-list">
            <h3 className="service-details-title">Contact Info</h3>
            <ul>
              <li className="cont_info">
                <span style={{ display: "flex" }}>
                  <a href="tel:+91 9205941300" className="px-0">
                    +91 9205941300
                  </a>
                </span>

                <i className="bx bx-phone-call bx-rotate-270"></i>
              </li>
              <li className="cont_info">
                info@flyweis.technology
                <i className="bx bx-envelope"></i>
              </li>
              <li
                className="cont_info"
                onClick={() =>
                  Router.push(
                    "https://flyweis.technology/thankingyou?id=Information"
                  )
                }
              >
                Live chat with experts
                {/* <i className='bx bx-whatapp'></i> */}
                <a href="https://flyweis.technology/thankingyou?id=Information">
                  <i className="bx bxl-whatsapp"></i>
                </a>
              </li>
              
            </ul>
          </div>

         
        </div>
      </>
    );
  }
}

export default ServiceSidebar;
