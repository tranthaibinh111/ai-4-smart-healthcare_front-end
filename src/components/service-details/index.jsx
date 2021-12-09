// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region Package (third-party)
// #region Swiper
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// #endregion
// #endregion

SwiperCore.use([Navigation]);
const ServiceDetails = ({ data }) => {
  // #region Parameters
  const swiperOption = {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: '.department-gallery .swiper-button-next',
      prevEl: '.department-gallery .swiper-button-prev',
    },
  };
  // #endregion

  return (
    <div className="service-wrap">
      <h2 className="title">{data.title}</h2>
      <div className="media">
        {data?.type === 'slider' && (
          <Swiper className="department-gallery" {...swiperOption}>
            {data.sliderThumb
              && data.sliderThumb.map((single, key) => (
                <SwiperSlide key={key}>
                  <img
                    key={key}
                    src={`${process.env.PUBLIC_URL}/${single.image}`}
                    alt="Alexis"
                  />
                </SwiperSlide>
              ))}
            <div className="swiper-button-prev">
              <i className="icofont-rounded-left" />
            </div>
            <div className="swiper-button-next">
              <i className="icofont-rounded-right" />
            </div>
          </Swiper>
        )}
        {data?.type === 'thumbnail' && (
          <div className="department-gallery">
            <img
              src={`${process.env.PUBLIC_URL}/${data.media.image}`}
              alt="Hope"
            />
          </div>
        )}
      </div>

      <div className="content">
        {data.body.map((single, key) => (
          <div className="desc" key={key}>
            {single}
          </div>
        ))}
      </div>

      <div className="price-list-col2">
        <div className="price-list">
          <h4>{data.priceList[0].listTitle}</h4>
          <ul>
            {data.priceList[0].listArray.map((single, key) => (
              <li key={key}>
                {single}
              </li>
            ))}
          </ul>
        </div>
        <div className="price-list">
          <h4>{data.priceList[1].listTitle}</h4>
          <ul>
            {data.priceList[1].listArray.map((single, key) => (
              <li key={key}>
                {single}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// #region Khai báo Props
ServiceDetails.propTypes = {
  data: PropTypes.object,
};

ServiceDetails.defaultProps = {
  data: [],
};
// #endregion

export default ServiceDetails;
