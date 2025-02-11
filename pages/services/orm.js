/** @format */

// import React from 'react'
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import React, { Component } from "react";
import ServiceSidebar from ".././../components/ServiceDetails/ServiceSidebar";
import AskQuestionForm from ".././../components/ServiceDetails/AskQuestionForm";
import Head from "next/head";

const orm = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ORM</title>
      </Head>
      <Navbar />

      <div className="blog_img_banner">
        <img loading="lazy" src="/images/service/ORM.png" alt="" />
      </div>

      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
             

                <h3>Online Reputation Management (ORM)</h3>
                <p>
                  Today it is not just feasible for a company to have an online
                  presence. It is equally important to continuously monitor what
                  the audience is speaking about them and accordingly, connect
                  with the audience. If the audience is posting positive
                  content, then your business should appreciate and thank them
                  for the support. If the audience is posting negative content,
                  then you should immediately reach out to the aggrieved persons
                  and understand their pain points to effectively resolve those
                  pain points and assure them of better services moving ahead.
                  ORM is the art of understanding your audience and customers,
                  empathizing with them, and showing them that you genuinely
                  care for them. As a reputed online reputation management
                  service provider, we understand this and ensure that we build
                  your brand with strong roots.
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

export default orm;
