/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const options = {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  speed: 2000,
  margin: 30,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
};

const Testimonials = () => {
  return (
    <section className="client-area ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>What Clients Say About Us</h2>
        </div>

        <Swiper
          {...options}
          className="mySwiper client-wrap"
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="single-client">
              <i className="quotes flaticon-left-quotes-sign"></i>
              <p>
                I was bit confused before choosing company for my social media
                marketing task, so I came across few companies everyone was
                giving big comitments so I got confused but I have to choose
                someone among them. I was dealing with varun he gave his full
                effort to guide luckily I made right choice. Thanks Flyweis
              </p>

              <ul>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
              </ul>

              <div className="client-img">
                <img loading="lazy" src="/images/clients/1.png" alt="Image" />
                <h3>Smita Joshi</h3>
                <span>Business Woman</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-client">
              <i className="quotes flaticon-left-quotes-sign"></i>
              <p>
                I am digital marketing manager in travel company, I have
                suggested my owner to outsource our daily development work
                because due to less technical knowledge it is very difficult for
                us to get output from any employee if we hire. My friend
                suggested me flyweis and we are happy that we went to right
                place
              </p>

              <ul>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
              </ul>

              <div className="client-img">
                <img loading="lazy" src="/images/clients/2.png" alt="Image" />
                <h3>Imran Khan</h3>
                <span>Digital Marketing</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-client">
              <i className="quotes flaticon-left-quotes-sign"></i>
              <p>
                I made the website from Flyweis Technology. Team was absolutely
                great and very prompt in terms of services. Whenever I call they
                were prompt in receiving my calls. They were available 24*7. I
                must recommend to use their services.
              </p>

              <ul>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
              </ul>

              <div className="client-img">
                <img loading="lazy" src="/images/clients/3.png" alt="Image" />
                <h3>Vivek Sharma</h3>
                <span>Business Owner</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-client">
              <i className="quotes flaticon-left-quotes-sign"></i>
              <p>
                I was bit confused before choosing company for my social media
                marketing task, so I came across few companies everyone was
                giving big comitments so I got confused but I have to choose
                someone among them. I was dealing with varun he gave his full
                effort to guide luckily I made right choice. Thanks Flyweis
              </p>

              <ul>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
              </ul>

              <div className="client-img">
                <img loading="lazy" src="/images/clients/1.png" alt="Image" />
                <h3>Smita Joshi</h3>
                <span>Business Woman</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-client">
              <i className="quotes flaticon-left-quotes-sign"></i>
              <p>
                I am digital marketing manager in travel company, I have
                suggested my owner to outsource our daily development work
                because due to less technical knowledge it is very difficult for
                us to get output from any employee if we hire. My friend
                suggested me flyweis and we are happy that we went to right
                place
              </p>

              <ul>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
              </ul>

              <div className="client-img">
                <img loading="lazy" src="/images/clients/2.png" alt="Image" />
                <h3>Imran Khan</h3>
                <span>Digital Marketing</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-client">
              <i className="quotes flaticon-left-quotes-sign"></i>
              <p>
                I made the website from Flyweis Technology. Team was absolutely
                great and very prompt in terms of services. Whenever I call they
                were prompt in receiving my calls. They were available 24*7. I
                must recommend to use their services.
              </p>

              <ul>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
                <li>
                  <i className="bx bxs-star"></i>
                </li>
              </ul>

              <div className="client-img">
                <img loading="lazy" src="/images/clients/3.png" alt="Image" />
                <h3>Vivek Sharma</h3>
                <span>Business Owner</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
