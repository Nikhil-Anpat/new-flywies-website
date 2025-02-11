/** @format */

// import React from 'react'
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import React, { Component } from "react";
import ServiceSidebar from ".././../components/ServiceDetails/ServiceSidebar";
import AskQuestionForm from ".././../components/ServiceDetails/AskQuestionForm";
import Head from "next/head";
const chatsoftware = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Chat Software</title>
      </Head>
      <Navbar />

      <div className="blog_img_banner">
        <img loading="lazy" src="/images/service/CHAT.png" alt="" />
      </div>

      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <h3>Chat Software</h3>
                <p>
                  Real-time communication has become very important to engage
                  and retain customers, more so when they are browsing your
                  company website or using its mobile application. This has put
                  a lot of emphasis on the use of robust and secure chat
                  software which can be integrated with websites and mobile
                  apps. This software allows company representatives to interact
                  with the website visitor whilst he/she is browsing the website
                  and helps the business in improving lead generation. We offer
                  custom chat software development and integration services for
                  businesses.
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

export default chatsoftware;
