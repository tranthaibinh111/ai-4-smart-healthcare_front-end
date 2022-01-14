// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region Package (third-party)
// #region Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
// #endregion
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import homeData from '../../data/home';
// #endregion

// #region Components
import { SectionTitle, Team } from '../../components';
// #endregion
// #endregion

SwiperCore.use([Pagination]);
const TeamContainer = () => {
  // #region Parameters
  const team = homeData?.team || [];
  const swiperOption = {
    loop: false,
    speed: 600,
    spaceBetween: 30,
    slidesPerView: 3,
    pagination: { clickable: true },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },

      991: {
        slidesPerView: 2,
      },

      767: {
        slidesPerView: 2,
      },

      560: {
        slidesPerView: 2,
      },

      0: {
        slidesPerView: 1,
      },
    },
  };
  // #enregion

  // #region Render
  const renderSingle = (single) => (
    <div className='col-md-4 offset-md-4 col-sm-12'>
      <Team data={single} />
    </div>
  );

  const renderTeam = (team) => (
    <div className='col-lg-12' data-aos='fade-up' data-aos-duration='1300'>
      <Swiper className='team-slider-container' {...swiperOption}>
        {team.map((single, key) => (
          <SwiperSlide key={key}>
            <Team key={key} data={single} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
  // #endregion

  return (
    <div className='team-area team-default-area bg-gray'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <SectionTitle classOption='text-center' subTitle='' title='<span>Tác giả</span>' />
          </div>
        </div>
        <div className='row'>
          {team.length === 1 && renderSingle(team[0])}
          {team.length !== 1 && renderTeam(team)}
        </div>
      </div>
    </div>
  );
};

export default TeamContainer;
