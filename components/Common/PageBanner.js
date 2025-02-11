/** @format */

import React, { Component } from "react";

class PageBanner extends Component {
  render() {
    return (
      <div className="page-title-area item-bg1">
        <div className="page-title-content">
          <div className="banner_img">
            <img loading="lazy" src="/images/PagesImage/contact.png" alt="" />
          </div>
          <div className="container">
            <div className="banner-heading"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageBanner;
