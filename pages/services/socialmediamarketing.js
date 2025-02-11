/** @format */

// import React from 'react'
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import React, { Component } from "react";
import ServiceSidebar from ".././../components/ServiceDetails/ServiceSidebar";
import AskQuestionForm from ".././../components/ServiceDetails/AskQuestionForm";
import Head from "next/head";

const socialmediamarketing = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Social Media Marketing</title>
      </Head>
      <Navbar />

      <div className="blog_img_banner">
        <img loading="lazy" src="/images/service/SOCIAL_MARKETING.png" alt="" />
      </div>

      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <h3>Social Media Marketing</h3>

                <p>
                  Social media marketing makes use of popular social media
                  platforms including, but not limited to, Facebook, LinkedIn,
                  Twitter, Instagram, YouTube, and Pinterest. Social media
                  marketing includes creating and sharing content about your
                  business on social media where it can be used to specifically
                  target your custom audience, and build a base of loyal
                  customers. It is one of the easiest and quickest ways to reach
                  your customers. The team of social media experts at our
                  company make sure to leverage the full power of social media
                  platforms for your business. We understand your business
                  requirements and accordingly then use the benefits of each
                  platform to our advantage by targeting highly specific
                  audiences in a cost-effective manner. Brand recognition plays
                  a very important role for any business and hence social media
                  marketing for a business should make use of a proper content
                  strategy so as to streamline the flow of information. This
                  generally helps businesses to garner positive reviews from
                  followers. Social media is a powerful tool for your business
                  in order to increase website traffic and raise awareness among
                  the target audience.
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

export default socialmediamarketing;
