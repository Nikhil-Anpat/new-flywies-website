/** @format */

import React, { useState } from "react";
import axios from "axios";
import { store } from "react-notifications-component";
import Router from "next/router";
import Head from "next/head";
import { AiOutlineClose } from "react-icons/ai";

const GetQuoteForm = ({ setModal }) => {
  const [loading, setLoading] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  const SendContactData = (e) => {
    e.preventDefault();
    gtag_report_conversion();
    try {
      setLoading(true);
      if (email === "" && phone == "") {
        return;
      }
      let url = "https://fly-back.vercel.app/api/v1";
      let temp = {
        name,
        email,
        phone,
        message,
      };
      axios.post(url, temp).then(
        (res) => {
          store.addNotification({
            title: "",
            message: `Message send successfully`,
            type: "success",
            insert: "bottom-right",
            container: "bottom-right",
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
          Router.push("/thankyou");
          setLoading(false);
          setemail("");
          setmessage("");
          setphone("");
          setname("");
          console.log("data response:::", res);
        },
        (error) => {
          store.addNotification({
            title: "",
            message: `${error}`,
            type: "danger",
            insert: "bottom-right",
            container: "bottom-right",
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });

          console.log("data response error:::", error);
        }
      );
    } catch (error) {
      store.addNotification({
        title: "",
        message: `${error}`,
        type: "danger",
        insert: "bottom-right",
        container: "bottom-right",
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      console.log("data response error:::", error);
    }
  };

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-347809802/rqL9CI2xspUDEIrQ7KUB",
      event_callback: callback,
    });
    return false;
  }
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

      <div className="ask-question">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <AiOutlineClose
            onClick={() => setModal(false)}
            style={{ fontSize: "20px", cursor: "pointer" }}
          />
        </div>
        <h3 className="enquiry_heading">Get Quote</h3>
        <form onSubmit={SendContactData}>
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  id="name"
                  autoComplete="off"
                  className="form-control"
                  placeholder=" Name"
                  maxLength={25}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  id="email"
                  className="form-control"
                  placeholder=" Email"
                  maxLength={30}
                />
              </div>

              <div className="form-group">
                <input
                  autoComplete="off"
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  value={phone}
                  onChange={(e) => {
                    setphone(e.target.value);
                  }}
                  className="form-control"
                  placeholder=" Phone"
                  maxLength={12}
                  minLength={10}
                />
              </div>
            
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  value={message}
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                  cols="30"
                  rows="5"
                  placeholder="Tell us about your project"
                  maxLength={10000}
                ></textarea>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <button className="default-btn btn-two">
                <span className="label">
                  {loading ? "Loading..." : "Submit"}
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default GetQuoteForm;
