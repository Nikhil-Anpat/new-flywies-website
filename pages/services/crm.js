/** @format */

import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";

import React, { Component } from "react";
import ServiceSidebar from ".././../components/ServiceDetails/ServiceSidebar";
import AskQuestionForm from ".././../components/ServiceDetails/AskQuestionForm";
import Head from "next/head";
const crm = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CRM</title>
      </Head>
      <Navbar />

      <div className="blog_img_banner">
        <img loading="lazy" src="/images/service/CRM.png" alt="" />
      </div>

      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <h3>CRM</h3>
                <p>
                  All businesses that are serving end customers need some form
                  of a Customer Relationship Management (CRM) tool to manage the
                  customer support and sales process effectively. We provide CRM
                  development and integration services for all businesses from
                  startups to enterprises. We can develop custom CRM
                  applications and also work on integrating existing popular CRM
                  solutions such as Salesforce, Zoho, and HubSpot. We consult
                  all stakeholders to understand your business requirements and
                  accordingly provide the best possible solution. To know more
                  about our CRM services, kindly get in touch!
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

export default crm;
