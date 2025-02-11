import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import FaqContent from "../components/Faq/FaqContent";
import AskQuestionForm from "../components/Faq/AskQuestionForm";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
class Faq extends Component {
  render() {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>FAQ</title>
          

        </Head>
        <Navbar />

        <div className="blog_img_banner">
          <img
            loading="lazy"
            src="/images/faq.png"
            alt=""
            className="native_image_height"
          />
        </div>
        <FaqContent />
        <AskQuestionForm />
        <Footer />
      </>
    );
  }
}

export default Faq;
