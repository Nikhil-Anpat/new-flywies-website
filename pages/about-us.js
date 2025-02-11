/** @format */

import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import About from "../components/AboutOne/About";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Testimonials from "../components/Common/Testimonials";
import Footer from "../components/Layouts/Footer";
import PartnerSlider from "../components/Common/PartnerSlider";
import Head from "next/head";

class About1 extends Component {
  render() {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>About-Us</title>
        </Head>
        <Navbar />

        <div className="banner_blog">
          <img loading="lazy" src="/images/PagesImage/about.png" alt="" />
        </div>

        <About />
        <MakeYourBusiness />
        <Testimonials />
        <div className="pb-50">
          <PartnerSlider />
        </div>
        <Footer />
      </>
    );
  }
}

export default About1;
