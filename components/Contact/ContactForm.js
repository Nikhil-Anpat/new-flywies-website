/** @format */

import React, { useState } from "react";
import axios from "axios";
import { store } from "react-notifications-component";
import Router from "next/router";
import Head from "next/head";

const ContactForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [loading, setLoading] = useState(false);
  const [phone, setphone] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const SendContactData = (e) => {
    e.preventDefault();
    gtag_report_conversion();
    try {
      if (email === "" && phone == "" && subject == "" && name == "") {
        return;
      }
      let url = "https://fly-back.vercel.app/api/v1";
      let temp = {
        name,
        email,
        phone,
        subject,
        message,
      };
      axios.post(url, temp).then(
        (res) => {
          setLoading(true);
          store.addNotification({
            title: "",
            message: `Message send successfully`,
            // message: `${res.data.msg}`,
            type: "success",
            insert: "top-right",
            container: "top-right",
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
          // if (res.data.msg === "Message send successfully") {
          if (res.data.status === "OK") {
            setLoading(false);
            Router.push("thankyou");
          }
          setemail("");
          setmessage("");
          setphone("");
          setname("");
          setsubject("");
          console.log("data response:::", res);
        },
        (error) => {
          store.addNotification({
            title: "",
            message: `${error}`,
            type: "danger",
            insert: "top-right",
            container: "top-right",
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
        insert: "top-right",
        container: "top-right",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Flyweis Technology</title>
        <meta
          name="keywords"
          content="Flyweis Services Pvt.Ltd, Flyweis Services, Flyweis, Flyweis Group, Flyweis Technology, Flyweis Services Private Limited"
        />
        <meta
          name="description"
          content="Flyweis Technology Provides Complete IT Solutions to Businesses, Services Related to APP Development, Website Development, Artificial Intelligence, Cyber Secuirity, etc"
        />
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
      <section className="main-contact-area pb-100">
        <div className="container">
          <div className="section-title">
            {/* <span>Contact Us</span> */}
            <h2>Drop us a message for any query</h2>
            <p>
              Please Drop Message for your query, Our Team will respond you
              within 3 Hours
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="contact-wrap contact-pages mb-0">
                <div className="contact-form" id="contactForm">
                  <form onSubmit={SendContactData}>
                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            autoComplete="off"
                            name="name"
                            id="name"
                            required
                            className="form-control"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => {
                              setname(e.target.value);
                            }}
                            maxLength={100}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="email"
                            autoComplete="off"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => {
                              setemail(e.target.value);
                            }}
                            maxLength={100}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            autoComplete="off"
                            className="form-control"
                            placeholder="Your Phone"
                            value={phone}
                            onChange={(e) => {
                              setphone(e.target.value);
                            }}
                            maxLength={20}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="msg_subject"
                            id="msg_subject"
                            autoComplete="off"
                            className="form-control"
                            placeholder="Your Subject"
                            value={subject}
                            onChange={(e) => {
                              setsubject(e.target.value);
                            }}
                            maxLength={100}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            cols="30"
                            rows="5"
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => {
                              setmessage(e.target.value);
                            }}
                            maxLength={10000}
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <button type="submit" className="default-btn btn-two">
                          {loading ? "Loading..." : "Submit"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-img">
                <img loading="lazy" src="/images/contact-img.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
