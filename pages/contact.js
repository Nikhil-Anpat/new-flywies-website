import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
class Contact extends Component {
  render() {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Contact-Us</title>
          

        </Head>
        <Navbar />
        <PageBanner
          pageTitle="Contact Style One"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Contact Style One"
        />
        <ContactInfo />
        <ContactForm />
        <Footer />
      </>
    );
  }
}

export default Contact;
