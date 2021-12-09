// #region React
import React from 'react';
// #endregion

// #region Package (third-party)
// #region Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
// #endregion
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import HomeData from '../../../data/home.json';
// #endregion

// #region Components
import SectionTitle from '../../../components/section-title';
import Testimonial from '../../../components/testimonial';
// #endregion
// #endregion

SwiperCore.use([Navigation]);
const TestimonialContainer = () => {
  // #region Parameters
  const swiperOption = {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: '.testimonial-slider-container .swiper-button-next',
      prevEl: '.testimonial-slider-container .swiper-button-prev',
    },
  };
  // #endregion

  return (
    <section
      className="testimonial-area testimonial-default-area testimonial-bg-img bg-img"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/photos/testimonial-bg1.jpg)`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle
              classOption="text-center"
              subTitle="Testimonial"
              title="<span>Trusted</span> From Clients"
            />
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-12"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <Swiper
              className="testimonial-slider-container"
              {...swiperOption}
            >
              {HomeData[5].testimonial
                && HomeData[5].testimonial.map((single, key) => (
                  <SwiperSlide key={key}>
                    <Testimonial
                      key={key}
                      data={single}
                    />
                  </SwiperSlide>
                ))}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialContainer;
