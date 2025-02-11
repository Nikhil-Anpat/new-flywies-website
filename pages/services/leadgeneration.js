/** @format */

// import React from 'react'
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import React, { Component } from "react";
import ServiceSidebar from ".././../components/ServiceDetails/ServiceSidebar";
import AskQuestionForm from ".././../components/ServiceDetails/AskQuestionForm";
import Head from "next/head";

const leadgeneration = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Lead Generation</title>
      </Head>
      <Navbar />

      <div className="blog_img_banner">
        <img loading="lazy" src="/images/service/LEADGENERATION.png" alt="" />
      </div>

      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <h3>Lead Generation</h3>

                <p>
                  PPC is a marketing technique to target a very specific portion
                  of the internet users and convert them into possible
                  customers. In PPC campaigns, you have to pay a small amount of
                  money every time your website or ad gets a click or a visitor.
                  It is a way to generate instant and highly targeted traffic
                  for your business. It provides instant results but comes with
                  a cost. PPC marketing is generally not affordable for smaller
                  companies due to the high costs associated with it. Our PPC
                  experts work on leading PPC platforms such as Google Ads,
                  Facebook Ads, Bing Ads, and Quora Ads. They know how to devise
                  strategies which will help to provide the maximum results on
                  your investment into paid ads. Our professionals are also
                  certified in Google Ads which adds to their credibility.
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

export default leadgeneration;
