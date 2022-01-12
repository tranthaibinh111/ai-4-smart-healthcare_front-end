// #region React
import React from 'react'
// #endregion

// #region Package (third-party)
// #region Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import { homeData } from '../../../data'
// #endregion

// #region Components
import Brand from '../../../components/brand'
// #endregion
// #endregion

const BrandContainer = () => {
  // #region Parameters
  const swiperOption = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: false,
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 100,
      },

      992: {
        slidesPerView: 4,
        spaceBetween: 90,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 110,
      },

      576: {
        slidesPerView: 3,
        spaceBetween: 60,
      },

      380: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      0: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  }
  // #endregion

  return (
    <div
      className='brand-section bg-img'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/photos/testimonial-bg1.jpg)`,
      }}
    >
      <div className='container'>
        <div className='row'>
          <div
            className='brand-logo-area brand-logo-default-area'
            data-aos='fade-up'
            data-aos-duration='1200'
          >
            <Swiper className='brand-logo-slider-container' {...swiperOption}>
              {homeData.brand &&
                homeData.brand.map((single, key) => (
                  <SwiperSlide key={key}>
                    <Brand key={key} data={single} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandContainer
