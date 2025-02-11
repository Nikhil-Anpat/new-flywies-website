/** @format */

import React, { Component } from "react";

class Portfoliobanner extends Component {
  render() {
    let onImgLoad = ({ target: img }) => {
      const { offsetHeight, offsetWidth } = img;
      console.log(offsetHeight, offsetWidth);
    };

    return (
      <div className="page-title-area item-bg1">
        <div className="page-title-content">
          <div className="banner_img">
            <img
              loading="lazy"
              src="/images/banner2.png"
              alt=""
              onLoad={onImgLoad}
            />
          </div>
          <div className="container">
            <div className="banner-heading"></div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Portfoliobanner;
