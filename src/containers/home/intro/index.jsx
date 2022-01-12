// #region React
import React from 'react'
import PropTypes from 'prop-types'
// #endregion

// #region Package (third-party)
// #region Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
// #endregion
// #endregion

// #region AI 4 Smart Healthcare
// #region Components
import Intro from '../../../components/intro'
// #endregion
// #endregion

SwiperCore.use([Navigation])
const IntroContainer = ({ data }) => {
  // #region Parameters
  const swiperOption = {
    loop: true,
    speed: 600,
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.hero-slider .swiper-button-next',
      prevEl: '.hero-slider .swiper-button-prev',
    },
  }
  // #endregion

  return (
    <div className='hero-slider-area'>
      <Swiper effect='fade' className='hero-slider' {...swiperOption}>
        {data &&
          data.map((single, key) => (
            <SwiperSlide key={key}>
              <Intro key={key} data={single} />
            </SwiperSlide>
          ))}
        <div className='swiper-button-prev'>
          <i className='icofont-arrow-left' />
        </div>
        <div className='swiper-button-next'>
          <i className='icofont-arrow-right' />
        </div>
      </Swiper>
    </div>
  )
}

// #region Khai báo Props
IntroContainer.propTypes = {
  data: PropTypes.array.isRequired,
}
// #endregion

export default IntroContainer
