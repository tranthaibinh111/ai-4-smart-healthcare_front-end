// #region React
import React from 'react';
import { Link } from 'react-router-dom';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import { appSettingsData, keywordData } from '../data';
// #endregion

// #region Utils
import { keywordUrl } from '../utils';
// #endregion

// #region Components
import { Logo } from '../components';
// #endregion
// #endregion

const Footer = () => (
  <footer className='footer-area'>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6 col-md-5 col-lg-6 col-xl-6'>
          <div className='widget-item'>
            <div className='about-widget'>
              <Logo classOption='footer-logo' image='/logo-dark.png' />
              <ul className='widget-contact-info'>
                <li className='info-address'>
                  <i className='icofont-location-pin' />
                  {appSettingsData.address}
                </li>
                <li className='info-mail'>
                  <i className='icofont-email' />
                  <a href={`mailto://${appSettingsData.email}`}>{appSettingsData.email}</a>
                </li>
                <li className='info-phone'>
                  <i className='icofont-ui-call' />
                  <a href={`tel://${appSettingsData.hotline.replaceAll('.', '')}`}>
                    {appSettingsData.hotline}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-6 offset-md-1 col-lg-5 offset-lg-0 col-xl-6 d-lg-none d-xl-block'>
          <div className='widget-item d-inline-block'>
            <h4 className='widget-title line-bottom'>Keywords</h4>
            <div className='widget-tags'>
              <ul>
                {keywordData &&
                  keywordData.map((keyword, idx) => (
                    <li key={`keyword-${idx}`}>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href={keywordUrl(keyword.text, keyword.search)}
                      >
                        {keyword.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='footer-bottom'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-sm-12'>
            <div className='widget-copyright'>
              <p>
                &copy; 2021 <span className='text-uppercase'>AI 4 Smart Healthcare</span>. Bản quyền{' '}
                <i className='icofont-heart-alt' /> của <Link to='/'>Binh Tran</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
