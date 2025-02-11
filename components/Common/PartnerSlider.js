/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const options = {
  slidesPerView: 3,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  speed: 500,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
};


const PartnerSlider = () => {
  return (
    <section className="brand-area-two ptb-70 pt-70">
      <div className="container">
        <Swiper {...options} className="brand-wrap" modules={[Autoplay]}>
          <SwiperSlide>
            <div className="single-brand">
              <a href="#" target="_blank">
                <img loading="lazy" src="/images/team/a1.png" alt="Image" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-brand">
              <a href="#" target="_blank">
                <img loading="lazy" src="/images/team/a2.png" alt="Image" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-brand">
              <a href="#" target="_blank">
                <img loading="lazy" src="/images/team/a3.png" alt="Image" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-brand">
              <a href="#" target="_blank">
                <img loading="lazy" src="/images/team/a4.png" alt="Image" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-brand">
              <a href="#" target="_blank">
                <img loading="lazy" src="/images/team/a5.png" alt="Image" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-brand">
              <a href="#" target="_blank">
                <img loading="lazy" src="/images/team/a6.png" alt="Image" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-brand">
              <a href="#" target="_blank">
                <img loading="lazy" src="/images/team/a7.png" alt="Image" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-brand">
              <a href="#" target="_blank">
                <img loading="lazy" src="/images/team/a8.png" alt="Image" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerSlider;
