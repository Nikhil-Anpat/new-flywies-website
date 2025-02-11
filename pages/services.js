import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServicesStyleOne from "../components/Services/ServicesStyleOne";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
class Services extends Component {
  render() {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Services</title>
        </Head>
        <Navbar />


        <div className="blog_img_banner">
          <img loading="lazy" src="/images/service/Services.jpg" alt="" />
        </div>

        <ServicesStyleOne />
        <Footer />
      </>
    );
  }
}

export default Services;
