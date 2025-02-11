/** @format */
import React from "react";
import Link from "next/link";
import { Modal } from "reactstrap";
import AskQuestionForm from "../ServiceDetails/AskQuestionForm";

const MainBanner = () => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <Modal isOpen={modal} toggle={toggle} centered className="modal">
        <AskQuestionForm setModal={setModal} />
      </Modal>
      <section className="main-banner-area main-banner-area-one">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="banner-text">
                <h1>Artificial Intelligence</h1>
                <p>
                  Flyweis Technology delivers the world’s most technically
                  advanced security intelligence to disrupt adversaries, empower
                  defenders, and protect organizations. Flyweis Technology’s
                  proactive and predictive platform provides elite,
                  context-rich, actionable intelligence in real time that’s
                  intuitive and ready for integration across the security
                  ecosystem. This text aims to impart an understanding of the
                  important and relatively new discipline that focuses on the
                  hidden side of the government. Such hidden side of the
                  government...
                </p>

                <div className="banner-btn">
                  <Link href="/Blogdetail/ArtificialIntelligence">
                    <span className="default-btn">Learn More</span>
                  </Link>

                  <span className="default-btn" onClick={toggle}>
                    Contact Us
                  </span>
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
            src="/images/home-one/shape/animate2.png"
            alt="Image"
          />
          <img
            loading="lazy"
            src="/images/home-one/shape/animate3.png"
            alt="Image"
          />
        </div>
      </section>
    </>
  );
};

export default MainBanner;
