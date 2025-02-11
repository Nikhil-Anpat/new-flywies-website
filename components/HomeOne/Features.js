/** @format */

import { Modal } from "reactstrap";
import React, { useState } from "react";
import GetQuoteForm from '.././GetQuoteForm'

const Features = () => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);


  return (
    <>
      <Modal isOpen={modal} toggle={toggle} centered className="modal">
        <GetQuoteForm setModal={setModal}   />
      </Modal>

      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 p-0">
              <div className="single-features">
                <i className="flaticon-cloud-computing-1"></i>
                <h3>Cyber Security</h3>
                <p>
                  Phishing is a type of online scam that targets consumers by
                  sending them an e-mail that appears to be from a well-known
                  source – an internet service provider...
                </p>
                <a class="read-more-icon" href="/Blogdetail/datascientist/"><span class="flaticon-right-arrow"></span></a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 p-0">
              <div className="single-features">
                <i className="flaticon-engineer"></i>
                <h3>Block chain</h3>
                <p>
                  Blockchain is a shared, immutable ledger that facilitates the
                  process of recording transactions and tracking assets in a
                  business network. An asset can be tangible...
                </p>

                <a class="read-more-icon" href="/Blogdetail/Whatisblock/"><span class="flaticon-right-arrow"></span></a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
              <div className="single-features" style={{ minHeight: "300px" }}>
                <i className="flaticon-success"></i>
                <h3>Data Scientist</h3>
                <p>
                  Work in data science or analytics, you’re probably well aware
                  of the Python vs. R debate. Although both languages are
                  bringing the future to life...
                </p>
                <a class="read-more-icon" href="/Blogdetail/datascientist/"><span class="flaticon-right-arrow"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
