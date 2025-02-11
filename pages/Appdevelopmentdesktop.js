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
                <div className="banner-text">
                  <h1>
                    Transform Your Vision into Reality with Professional App
                    Development
                  </h1>
                  <p>
                    Elevate your business with cutting-edge mobile APP solutions
                    tailored to your unique needs. At Flyweis Technology, we
                    specialize in crafting innovative and user-centric mobile
                    applications that drive engagement, boost productivity, and
                    deliver seamless user experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
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
                  We just don’t create Applications - we provide end-to-end
                  services for your business.
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
                      Our Applications are highly secure and we use the latest
                      encryption techniques to secure the flow of data
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
                      Application up to date and performing optimally
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
                  <h3>E-Commerce App</h3>
                  <p>
                    We design an intuitive user interface that enables seamless
                    navigation, encouraging users to browse, select, and
                    purchase products effortlessly.
                  </p>

                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-engineer"></i>
                  <h3> Travel App</h3>
                  <p>
                    Your customers can plan and book their journeys on the go,
                    making travel arrangements conveniently from their
                    smartphone
                  </p>

                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-success"></i>
                  <h3>Service App</h3>
                  <p>
                    Showcase your range of services and allow customers to
                    choose the specific service they need, tailoring their
                    experience.
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
                  <i className="flaticon-machine-learning"></i>
                  <h3>Education App</h3>
                  <p>
                    Learning becomes convenient and accessible, enabling users
                    to access educational resources from their smartphones and
                    tablets.
                  </p>

                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-health"></i>
                  <h3>Restaurant App</h3>
                  <p style={{ minHeight: "108px" }}>
                    Keep customers informed about their order status and
                    estimated delivery or pickup times for a transparent and
                    satisfying experience.
                  </p>

                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-shield"></i>
                  <h3>Grocery App</h3>
                  <p style={{ minHeight: "108px" }}>
                    Showcase a wide range of fresh produce, pantry staples, and
                    household items, providing customers with a diverse
                    selection.
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
                  <i className="flaticon-artificial-intelligence"></i>
                  <h3>Retail App</h3>
                  <p>
                    With our Retail App, customers can browse and shop your
                    products on the go, making purchases with ease from their
                    smartphones.
                  </p>

                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-technical-support"></i>
                  <h3>Fintech APP</h3>
                  <p>
                    Contact us today for a free consultation and let our Fintech
                    App development experts create a platform that elevates your
                    financial services.
                  </p>

                  <button className="getCode" onClick={() => toggle()}>
                    Get Quote <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 p-0">
                <div className="single-features" style={{ minHeight: "354px" }}>
                  <i className="flaticon-machine-learning"></i>
                  <h3>Custom App </h3>
                  <p>
                    Our expert team is dedicated to creating customized
                    solutions that empower your business and deliver a seamless
                    user experience.
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
