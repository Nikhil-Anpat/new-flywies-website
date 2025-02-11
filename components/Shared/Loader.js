/** @format */

import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div
        className={`preloader ${
          this.props.loading ? "" : "preloader-deactivate"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="spinner">
              <img
                loading="lazy"
                src="/images/loderimage.png"
                alt="logo"
                className="loder_image_size"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
