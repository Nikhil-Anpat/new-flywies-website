import React, { useEffect } from "react";
import Router from "next/router";
import ThankYouNavbar from "../components/Layouts/ThankYouNavbar";
import Link from "next/link";
import Footer from "../components/Layouts/Footer";

const thankyou = () => {
  return (
    <>
      <ThankYouNavbar />
      <div className="thanks_page">
        <div className="thankpage">
          
          <h2 className="class_thenk text-center">Thank You</h2>
          <p className="connect text-center">
            We will Connect with you Shortly
          </p>
          <div className="home_div text-center">
            <Link href="/">
              <button type="button" class="btn btn-success">
                <span class="flaticon-left-arrow"></span>
                <span className="backhome">Back To Home</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default thankyou;
