// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import { LightgalleryItem, LightgalleryProvider } from 'react-lightgallery';
// #endregion

// #region Packate
// utils
import { flatDeep, slugify, containsObject } from '../../utils';

// #region AI 4 Smart Healthcare
// #region Data
import AboutData from '../../data/about.json';
import ServiceData from '../../data/service.json';
// #endregion

// #region Components
import AboutAddress from '../../components/about-address';
// #endregion
// #endregion

const AboutContainer = () => {
  // #region Parameters
  const cats = ServiceData.map((item) => item.categories);
  const singleCatArray = flatDeep(cats);
  // eslint-disable-next-line prefer-const
  let categories = [];
  singleCatArray.forEach((cat) => {
    const obj = {
      title: cat.trim(),
      slug: slugify(cat),
      count: 1,
    };
    const objIndex = containsObject(obj, categories);
    if (objIndex !== -1) {
      const prevCount = categories[objIndex].count;
      categories[objIndex] = {
        title: cat.trim(),
        slug: slugify(cat),
        count: prevCount + 1,
      };
    } else
      categories.push(obj);
  });
  // #endregion

  return (
    <div className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-pra" data-aos="fade-up">
              {/* eslint-disable-next-line max-len */}
              Công trình nghiên cứu này, tôi đã ứng dụng CNN chẩn đoán các bệnh rối loại suy giảm thần kinh vận động thông qua việc phân loại tín hiệu EEG.
            </p>
            <div
              className="service-list-content"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h4 className="title">{AboutData[1].title}</h4>
              {AboutData[1].excerpt.map((single, i) => (
                <div key={i} className="desc">
                  {single}
                </div>
              ))}
              <div
                className="service-list"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <ul>
                  {ServiceData.slice(0, 4).map(
                    (single, i) => (
                      <li key={i}>
                        <Link
                          to={
                              `${process.env
                                .PUBLIC_URL
                              }/service-details/${slugify(
                                single.id,
                              )}`
                            }
                        >
                          {single.title}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
                <ul>
                  {ServiceData.slice(4, 8).map(
                    (single, i) => (
                      <li key={i}>
                        <Link
                          to={
                              `${process.env
                                .PUBLIC_URL
                              }/service-details/${slugify(
                                single.id,
                              )}`
                            }
                        >
                          {single.title}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
                <ul>
                  {ServiceData.slice(0, 4).map(
                    (single, i) => (
                      <li key={i}>
                        <Link
                          to={
                              `${process.env
                                .PUBLIC_URL
                              }/service-details/${slugify(
                                single.id,
                              )}`
                            }
                        >
                          {single.title}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
            <div
              className="office-center-content"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h4 className="title">{AboutData[2].title}</h4>
              {AboutData[2].excerpt.map((single, i) => (
                <div key={i} className="desc">
                  {single}
                </div>
              ))}
              <div className="row">
                <div className="col-md-6" data-aos="fade-up">
                  <div className="gallery-item mb-30">
                    <LightgalleryProvider>
                      <LightgalleryItem
                        group="any"
                        src={
                          process.env.PUBLIC_URL
                          + AboutData[3].gallery
                            .imageOne
                        }
                      >
                        <div className="thumb">
                          <div className="lightbox-image">
                            <img
                              src={
                                process.env
                                  .PUBLIC_URL
                                + AboutData[3]
                                  .gallery
                                  .imageOne
                              }
                              alt="gallery"
                            />
                          </div>
                          <div className="overlay">
                            <i className="icofont-plus" />
                          </div>
                        </div>
                      </LightgalleryItem>
                    </LightgalleryProvider>
                  </div>
                </div>
                <div
                  className="col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <div className="gallery-item mb-30">
                    <LightgalleryProvider>
                      <LightgalleryItem
                        group="any"
                        src={
                          process.env.PUBLIC_URL
                          + AboutData[3].gallery
                            .imageTwo
                        }
                      >
                        <div className="thumb">
                          <div className="lightbox-image">
                            <img
                              src={
                                process.env
                                  .PUBLIC_URL
                                + AboutData[3]
                                  .gallery
                                  .imageTwo
                              }
                              alt="gallery"
                            />
                          </div>
                          <div className="overlay">
                            <i className="icofont-plus" />
                          </div>
                        </div>
                      </LightgalleryItem>
                    </LightgalleryProvider>
                  </div>
                </div>
                <div
                  className="col-md-12"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="gallery-item">
                    <LightgalleryProvider>
                      <LightgalleryItem
                        group="any"
                        src={
                          process.env.PUBLIC_URL
                          + AboutData[3].gallery
                            .imageThree
                        }
                      >
                        <div className="thumb">
                          <div className="lightbox-image">
                            <img
                              src={
                                process.env
                                  .PUBLIC_URL
                                + AboutData[3]
                                  .gallery
                                  .imageThree
                              }
                              alt="gallery"
                            />
                          </div>
                          <div className="overlay">
                            <i className="icofont-plus" />
                          </div>
                        </div>
                      </LightgalleryItem>
                    </LightgalleryProvider>
                  </div>
                </div>
              </div>
              <div
                className="office-address-content"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {AboutData[4].address.map((single, i) => (
                  <AboutAddress key={i} data={single} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
