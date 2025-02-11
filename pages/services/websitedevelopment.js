/** @format */

// import React from 'react'
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";

import React, { Component } from "react";
import ServiceSidebar from ".././../components/ServiceDetails/ServiceSidebar";
import AskQuestionForm from ".././../components/ServiceDetails/AskQuestionForm";
import Head from "next/head";

const websitedevelopment = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Website Development</title>
      </Head>

      <Navbar />

      <div className="blog_img_banner">
        <img loading="lazy" src="/images/service/WEB_DEVELOPMENT.png" alt="" />
      </div>

      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <h3>Website Development</h3>
                <p>
                  With the ongoing Covid-19 pandemic, it is evident that
                  businesses need to transform into a digital working
                  environment. The basis step for this digital transformation to
                  take place is to get a professional website developed for your
                  business that will allow your existing and potential customers
                  to find you, get in touch with you, and avail of your
                  services. We are a leading Web Development company that can
                  design and develop visually appealing, functional, and secure
                  websites for your business as per your business requirements.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <AskQuestionForm />
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default websitedevelopment;
