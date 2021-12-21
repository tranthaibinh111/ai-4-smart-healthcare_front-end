// #region React
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// #endregion

// #region Package (third-party)
// #region Swiper
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// #endregion
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import homeData from '../../data/home';
import ServiceData from '../../data/service.json';
// #endregion

// #region Components
import DepartmentWidget from '../../components/sidebar/department';
import SidebarWorkingTime from '../../components/sidebar/sidebar-working-time';
import Appointment from '../../components/sidebar/appointment';
import ServiceDetails from '../../components/service-details';
import AccordionWrapTwo from '../../components/accordion';
import CasesItem from '../../components/cases';
// #endregion
// #endregion

SwiperCore.use([Pagination]);
const ServiceDetailsContainer = ({ data }) => {
  // #region Parameters
  const swiperOption = {
    slidesPerView: 2,
    speed: 1000,
    loop: true,
    spaceBetween: 30,
    autoplay: false,
    pagination: { clickable: true },
    breakpoints: {
      1200: {
        slidesPerView: 2,
      },

      991: {
        slidesPerView: 2,
      },

      767: {
        slidesPerView: 2,
      },

      576: {
        slidesPerView: 2,
      },

      0: {
        slidesPerView: 1,
      },
    },
  };
  // #endregion

  return (
    <section className="department-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="department-wrpp">
              <div className="sidebar-wrapper">
                <DepartmentWidget data={ServiceData} />
                <SidebarWorkingTime />
                <Appointment />
              </div>

              <div className="department-content">
                <ServiceDetails data={data} />

                <div className="team-single">
                  <h2 className="title">
                    <span>Head Of</span>
                    {' '}
                    Department
                  </h2>
                  <div className="membr-info">
                    <h4 className="name">
                      Dr. Genoveva Leannon
                    </h4>
                    <h5 className="designation">
                      Internal Medicine
                    </h5>
                    <div className="desc">
                      <p>
                        Dr. Genoveva Leannon received
                        his medical degree from
                        University of Minnesota Medical
                        School and has been in practice
                        between 6-10 years.
                      </p>
                      <ul>
                        <li>
                          <span>Phone Number</span>
                          <span>(131) 839-6275</span>
                        </li>
                        <li>
                          <span>
                            Years in Practice
                          </span>
                          <span>6 - 10 Years</span>
                        </li>
                        <li>
                          <span>Languages</span>
                          <span>English</span>
                        </li>
                      </ul>
                      <Link to="/" className="btn-link">
                        VIEW FULL PROFILE
                      </Link>
                    </div>
                  </div>
                  <div className="thumb">
                    <img
                      src={
                        `${process.env.PUBLIC_URL
                        }/img/photos/doctor-02.png`
                      }
                      alt="hope"
                    />
                  </div>
                </div>

                <div className="faq-area">
                  <h2 className="title">
                    <span>General</span>
                    {' '}
                    FAQs
                  </h2>
                  <div className="accordian-content">
                    <AccordionWrapTwo />
                  </div>
                </div>

                <div className="case-area">
                  <div className="section-title">
                    <h2 className="title">
                      <span>Cases</span>
                      {' '}
                      Studies
                    </h2>
                    <a className="btn-link" href="#/">
                      View All Cases
                    </a>
                  </div>
                  <Swiper
                    className="case-slider-container"
                    {...swiperOption}
                  >
                    {homeData.cases
                      && homeData.cases.map(
                        (single, key) => (
                          <SwiperSlide key={key}>
                            <CasesItem
                              key={key}
                              data={single}
                            />
                          </SwiperSlide>
                        ),
                      )}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// #region Khai báo Props
ServiceDetailsContainer.propTypes = {
  data: PropTypes.object,
};

ServiceDetailsContainer.defaultProps = {
  data: null,
};
// #endregion

export default ServiceDetailsContainer;
