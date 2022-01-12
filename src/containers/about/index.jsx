// #region React
import React from 'react'
import { Link } from 'react-router-dom'
import { LightgalleryItem, LightgalleryProvider } from 'react-lightgallery'
// #endregion

// #region AI 4 Smart Healthcare
// #region Services
import { RootService } from '../../shared/services'
// #endregion
// #endregion

const AboutContainer = () => {
  // #region Parameters
  const rootService = RootService()
  // #endregion

  // #region Components
  const linkAlexNetComponent = (component = 'AlexNet') => (
    <Link
      to={rootService.referenceDetails(
        'imagenet-classification-with-deep-convolutional-neural-networks'
      )}
    >
      {component}
    </Link>
  )
  const linkYDongComponent = () => (
    <Link
      to={rootService.referenceDetails(
        'evaluations-of-deep-convolutional-neural-networks-for-automatic-identification-of-malaria-infected-cells'
      )}
      dangerouslySetInnerHTML={{ __html: 'Y. Dong' }}
    />
  )
  // #endregion

  return (
    <div className='about-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <p className='text-pra' data-aos='fade-up'>
              Công trình nghiên cứu này, tôi đã ứng dụng CNN chẩn đoán các bệnh
              rối loại suy giảm thần kinh vận động thông qua việc phân loại tín
              hiệu EEG.
            </p>
            <div
              className='service-list-content'
              data-aos='fade-up'
              data-aos-duration='1200'
            >
              <h4 className='title'>Mô hình AlexNet</h4>
              <div className='desc'>
                {linkAlexNetComponent(
                  <img
                    src={rootService.img(
                      '/img/about/alexnet-architectuure.png'
                    )}
                    alt='Kiến trúc mô hình AlexNet'
                  />
                )}
              </div>
              <div className='desc'>
                <p className='text-block'>
                  {linkAlexNetComponent()} là mô hình mạng Nơ-ron tích chập mà
                  tôi sẽ áp dụng.
                </p>
              </div>
              <div className='desc'>
                <p>
                  Hiệu quả của mô hình {linkAlexNetComponent()} đã được{' '}
                  {linkYDongComponent()} thể hiện trong nghiên cứu trong việc
                  phân loại các tế bào bị nhiễm sốt rét. Theo{' '}
                  {linkYDongComponent()}
                  {', '}
                  phân loại bằng {linkAlexNetComponent()} (98.13%) cho kết quả
                  cao hơn các công cụ máy học truyền thống (~7%).
                </p>
              </div>
              <div className='desc'>
                <p>
                  Từ sự thành công của {linkYDongComponent()}
                  {', '}
                  tôi tin tưởng rằng mô hình AlexNet sẽ là mô hình thích hợp
                  nhất cho chẩn đoán bệnh rối loạn suy giảm thân kinh vận động
                  thông qua phân loại các tín hiệu EEG.
                </p>
              </div>
            </div>
            <div
              className='office-center-content'
              data-aos='fade-up'
              data-aos-duration='1200'
            >
              <h4 className='title'>Hình ảnh nghiên cứu</h4>
              <div className='row'>
                <div className='col-md-6 offset-md-3' data-aos='fade-up'>
                  <div className='gallery-item mb-30'>
                    <LightgalleryProvider>
                      <LightgalleryItem
                        group='any'
                        src={rootService.img(
                          '/img/about/diagnostic-process.png'
                        )}
                      >
                        <div className='thumb'>
                          <div className='lightbox-image'>
                            <img
                              src={rootService.img(
                                '/img/about/diagnostic-process.png'
                              )}
                              alt='Mô hình đề xuất'
                            />
                          </div>
                          <div className='overlay'>
                            <i className='icofont-plus' />
                          </div>
                        </div>
                      </LightgalleryItem>
                    </LightgalleryProvider>
                  </div>
                </div>
                <div
                  className='col-md-8 offset-md-2'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                >
                  <div className='gallery-item'>
                    <LightgalleryProvider>
                      <LightgalleryItem
                        group='any'
                        src={rootService.img(
                          '/img/about/compare-accuracy-f1-chart.png'
                        )}
                      >
                        <div className='thumb'>
                          <div className='lightbox-image'>
                            <img
                              src={rootService.img(
                                '/img/about/compare-accuracy-f1-chart.png'
                              )}
                              alt='So sánh với các phương pháp phân loại khác'
                            />
                          </div>
                          <div className='overlay'>
                            <i className='icofont-plus' />
                          </div>
                        </div>
                      </LightgalleryItem>
                    </LightgalleryProvider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContainer
