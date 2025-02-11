/** @format */

import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import { Modal } from "reactstrap";
import GetQuoteForm from "../components/GetQuoteForm";
import EnquiryForm from "../components/enquiryForm";
import PartnerSlider from "../components/Common/PartnerSlider";

const Index = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Head>
        <script
          async
          custom-element="amp-analytics"
          src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-347809802"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'AW-347809802');
          `,
          }}
        />
      </Head>

      <Modal isOpen={modal} toggle={toggle} centered className="modal">
        <GetQuoteForm setModal={setModal} />
      </Modal>

      <Navbar />

      <div className="main-banner-area main-banner-area-three mb-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="container"></div>
                <div className="banner-text">
                  <h1>
                    Expert Website Development Solutions Tailored to your
                    Business Objectives
                  </h1>
                  <p>
                    At Flyweis Technology, We specialize in creating captivating
                    and functional websites that engage visitors, drive
                    conversions, and reflect your unique brand identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="over-shape">
          <img
            loading="lazy"
            src="/images/home-one/shape/animate1.png"
            alt="Image"
          />
          <img
            loading="lazy"
            src="/images/home-one/shape/animate1.png"
            alt="Image"
          />
          <img
            loading="lazy"
            src="/images/home-one/shape/animate2.png"
            alt="Image"
          />
          <img
            loading="lazy"
            src="/images/home-one/shape/animate2.png"
            alt="Image"
          />
          <img
            loading="lazy"
            src="/images/home-one/shape/animate3.png"
            alt="Image"
          />
        </div>

        <div className="white-shape">
          <img
            loading="lazy"
            src="/images/home-three/bottom-shape.png"
            alt="Image"
          />
        </div>
      </div>

      <section className="choose-ue-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="choose-title">
                <h2>
                  We just don’t create websites - we provide end-to-end services
                  for your business.
                </h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="choose-content">
                <ul>
                  <li>
                    <span>
                      01 <i className="flaticon-technical-support"></i>
                    </span>
                    <h3>Security</h3>
                    <p>
                      Our websites and apps are highly secure and we use the
                      latest encryption techniques to secure the flow of data
                    </p>
                  </li>

                  <li className="ml">
                    <span>
                      02 <i className="flaticon-shield"></i>
                    </span>
                    <h3>Deployment</h3>
                    <p>
                      Post development, we deploy the solution onto your hosting
                      server and manage all dependencies to ensure smoothness
                    </p>
                  </li>

                  <li className="ml-25">
                    <span>
                      03 <i className="flaticon-support"></i>
                    </span>
                    <h3>Maintenance and Support</h3>
                    <p>
                      We offer ongoing maintenance and support to keep your
                      website up to date and performing optimally
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="choose-img">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-area pt-100 pb-70">
        <div className="features-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-cloud-computing-1"></i>
                  <h3>E-Commerce Website</h3>
                  <p>
                    At Flyweis Technology, We specialize in crafting dynamic and
                    user-friendly e-commerce websites that drive sales, boost
                    conversions, and enhance your brand's online presence.
                  </p>

                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-engineer"></i>
                  <h3> Travel website</h3>
                  <p>
                    Your travel website should reflect your unique offerings and
                    brand identity. Our tailored solutions ensure your website
                    stands out in the crowded travel market, attracting more
                    visitors and conversions.
                  </p>

                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-success"></i>
                  <h3>Service Website</h3>
                  <p>
                    Engage your audience with interactive elements that enhance
                    their experience. From contact forms to live chat, we
                    provide tools that foster meaningful connections with your
                    visitors.
                  </p>
                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-cloud-computing-1"></i>
                  <h3>Education Website</h3>
                  <p>
                    Foster active participation with interactive elements. From
                    quizzes and assessments to discussion forums, we provide
                    tools that encourage collaborative learning.
                  </p>

                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-success"></i>
                  <h3>Restaurant Website</h3>
                  <p style={{ minHeight: "108px" }}>
                    Make booking a table a breeze with our user-friendly
                    reservation system. Encourage diners to secure their spot at
                    your restaurant with just a few clicks.
                  </p>

                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>{" "}
              <div className="col-lg-4 col-sm-6 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-engineer"></i>
                  <h3>Grocery Website</h3>
                  <p style={{ minHeight: "108px" }}>
                    Showcase a diverse range of groceries and products with a
                    comprehensive catalog. Categorize items intuitively for easy
                    navigation.
                  </p>

                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-sm-6 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-cloud-computing-1"></i>
                  <h3>Retail Website</h3>
                  <p>
                    Your store is unique, and so should be your website. We
                    tailor the design and functionality to match your brand
                    identity and cater to your specific product offerings.
                  </p>

                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-engineer"></i>
                  <h3>Wholesale Website</h3>
                  <p>
                    Showcase your diverse range of products with a user-friendly
                    catalog. From multiple categories to advanced filtering
                    options, we ensure buyers can easily find what they need.
                  </p>

                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-engineer"></i>
                  <h3>Custom Website </h3>
                  <p>
                    Your website is an extension of your brand, and we ensure it
                    reflects your identity flawlessly. Our skilled designers
                    create captivating visuals and layouts that resonate with
                    your audience.
                  </p>

                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offer-shape">
          <img
            loading="lazy"
            src="/images/shape/services-shape/1.png"
            alt="Image"
          />
          <img
            loading="lazy"
            src="/images/shape/services-shape/2.png"
            alt="Image"
          />
          <img
            loading="lazy"
            src="/images/shape/services-shape/3.png"
            alt="Image"
          />
          <img
            loading="lazy"
            src="/images/shape/services-shape/4.png"
            alt="Image"
          />
          <img
            loading="lazy"
            src="/images/shape/services-shape/5.png"
            alt="Image"
          />
          <img
            loading="lazy"
            src="/images/shape/services-shape/6.png"
            alt="Image"
          />
        </div>
      </section>

      <section className="business-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="business-content">
                <h2>Make Your Business More Competitive And Enduring</h2>
              </div>

              <div className="single-business">
                <i className="flaticon-chip"></i>
                <h3>Our Mission</h3>
                <p>
                  Our Mission is seeing businesses growing with our skills &
                  efforts, Which makes us more happy is that a business which
                  was associated with us and shows a growth that makes us more
                  motivated to do so.
                </p>
              </div>

              <div className="single-business">
                <i className="flaticon-blockchain"></i>
                <h3>Our Vision</h3>
                <p>
                  Our Vision is to create a name in the Industry which
                  associated with creating an environment for Businesses in
                  which they feel Confident, Independent in this growing techy
                  world. Most of the businesses who comes to us feels helpless &
                  our Vision to make them feel Confident.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">3840</span>
                    </h2>
                    <p>Project Completed</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">350</span>
                    </h2>
                    <p>Team Members</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">93%</span>
                    </h2>
                    <p>Happy Clients</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">24*7</span>
                    </h2>
                    <p>Customer Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-50">
        <section className="business-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="business-content">
                  <h2 style={{ textAlign: "center" }}>PORTFOLIO</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PartnerSlider />
      </div>

      <Footer />
    </>
  );
};

export default Index;
