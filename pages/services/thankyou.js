/** @format */

import React from "react";
import Link from "../../utils/ActiveLink";

const thankyou = () => {
  return (
    <>
      <section className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">Thankyou</h3>
                </div>

                <form>
                  <div className="row">
                    <div className="col-12">
                      <Link href="/contact">
                        <button className="default-btn btn-two" type="submit">
                          OK
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default thankyou;
