import React, { useState, useEffect } from "react";
import axios from "axios";
import Script from "next/script";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";

const Index4 = () => {
  const [show, setShow] = useState(false);

  const [amount, setamount] = useState(null);
  const [name, setname] = useState("");

  const [description, setdescription] = useState("");

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 992) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const SendpaymentData = (des) => {
    try {
      let url = "https://www.demoflyweis.in/flyweisbackend/sendPaymentData";
      let temp = {
        name: name,
        amount: amount,
        description: des + " \n" + description,
      };
      axios.post(url, temp).then(
        (res) => {
          console.log("data flyweis:::", res);
       
        },

        (error) => {
          console.log("data response error:::", error);
        }
      );
    } catch (error) {
      console.log("data response error:::", error);
    }
  };

  const proceeds = (amount) => {
    if (amount !== "") {
      var options = {
        key: "rzp_live_szpETIIqZnUItv",
        amount: amount * 100,
        currency: "INR",
        name: "Flyweis Technology",
        description: "Transaction",
        first: "Transaction",

        image: "data:image/jpeg;base64,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nWvd+vTUzkiZ444/1nWPUcoKtSS3JIxjoY2RROnnmsOLYYYg9sfO8sa53dzQAGk7P7d+wW/bpseRE2xBJaZOXvAhiFUPfNI54B8rQ1x6A9u2zpTYy9WpG2LNaSeOwyrtsUrYjzVrMdprXOcx3kcWgPGt67Eev5WyDWXb9q2yWT26G9FOa72xSsdbPM58Tntc0HuOoPQn7pab7nUFYxzEbn3Qmo4XYqbbFR7pJoIY7Mc3NVPjlvK/xAN8vUb8ux12ARoLtG1j5I4bTWx2HxiWSDZMsALiGiYa0HEAOA2ejhvW9Du9cjvZO1efEWxT2xO6JrhzeEHg8nMABvQ1vXfqo7tl925euPBDrVmewQTzFviPLw3f07fotV8+436c+7NvJETr1/CuiIuriIiIoiIgL6T/AKdZ/YkwFp/VoksY1zj3b70kA+3Vzfpv8q+bKWvPPUnr2q7zHPXlZNC9vdr2HYP8qTG3bBlnFeLPq/H+d/p+PGMrv1bybHNkLTp0VMHTz0/P7o+nN8l8jV7LZO3mMhayFrQknLQ1jd8kUbRytjZv0H8n1VFSI014nN8W++wiItPnEREBERAREQEREQRERRERAREQEREQREQEREBERAREQEREBERAREQEREBERARERRERARERBERARERRERAREQEREBEREEREBERARERRERARERBERARERRERAREQEREBEREEREBERARERXOymyiKKbKbKIgbKbKIgbKbKIoGymyiIGymyiIGymyiIGymyiIGymyiKhspsoiBsoiKD//Z",
        order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          SendpaymentData("Payment Successfull");

        },

        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        SendpaymentData("Payment Not Successfull");

      });
      rzp1.open();
    } else {
      alert("Enter Valid Amount");
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <Navbar />
      <MainBanner />


      <div>
 

        <div>
          <div className="ask-question col-lg-12 col-md-12">
    
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    className="form-control"
                    required
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <input
                    type="number"
                    autoComplete="off"
                    className="form-control"
                    required
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => {
                      setamount(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-12 col-sm-12">
                <div className="form-group">
                  <textarea
                    rows="3"
                    autoComplete="off"
                    className="form-control"
                    required
                    placeholder="Description"
                    value={description}
                    onChange={(e) => {
                      setdescription(e.target.value);
                    }}
                    maxLength={10000}
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <button
                  className="default-btn btn-two"
                  onClick={() => proceeds(amount)}
                >
                  <span className="btn-whatsapp-pulse">
                    <i class="bx bxl-whatsapp"></i>
                  </span>
                  <span className="label">Pay Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index4;
