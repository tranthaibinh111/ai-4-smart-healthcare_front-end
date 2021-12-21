// #region React
import React from 'react';
import { Link } from 'react-router-dom';
// #endregion

// #region AI 4 Smart Healthcare
// Data
import appSettingsData from '../../data/appsettings';

// #region Components
import SocialIcon from '../../components/social-icon';
import Newsletter from '../../components/newsletter';
import Logo from '../../components/logo';
// #endregion
// #endregion

const Footer = () => (
  <footer className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
          <div className="widget-item">
            <div className="about-widget">
              <Logo
                classOption="footer-logo"
                image="/img/logo-dark.png"
              />
              <ul className="widget-contact-info">
                <li className="info-address">
                  <i className="icofont-location-pin" />
                  {appSettingsData.address}
                </li>
                <li className="info-mail">
                  <i className="icofont-email" />
                  <a href={`mailto://${appSettingsData.email}`}>
                    {appSettingsData.email}
                  </a>
                </li>
                <li className="info-phone">
                  <i className="icofont-ui-call" />
                  <a href={`tel://${appSettingsData.hotline.replaceAll('.', '')}`}>
                    {appSettingsData.hotline}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 offset-md-1 col-lg-3 offset-lg-0 col-xl-3 d-lg-none d-xl-block">
          <div className="widget-item d-inline-block">
            <h4 className="widget-title line-bottom">
              Popular Tags
            </h4>
            <div className="widget-tags">
              <ul>
                <li>
                  <Link to="/">Amazing</Link>
                </li>
                <li>
                  <Link to="/">Envato</Link>
                </li>
                <li>
                  <Link to="/">Themes</Link>
                </li>
                <li>
                  <Link to="/">Clean</Link>
                </li>
                <li>
                  <Link to="/">Wordpress</Link>
                </li>
                <li>
                  <Link to="/">Creative</Link>
                </li>
                <li>
                  <Link to="/">Mutilpurpose</Link>
                </li>
                <li>
                  <Link to="/">Retina Ready</Link>
                </li>
                <li>
                  <Link to="/">Twitter</Link>
                </li>
                <li>
                  <Link to="/">Responsive</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
          <div className="widget-item">
            <h4 className="widget-title line-bottom">
              Recent Posts
            </h4>
            <nav className="widget-posts">
              <ul className="posts-item">
                <li>
                  <Link to="/">
                    <i className="icon icofont-rounded-double-right" />
                    Lorem Ispum dolor sit amet putilor
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="icon icofont-rounded-double-right" />
                    Medical is all about quality.
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="icon icofont-rounded-double-right" />
                    Is your website user friendly ?
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="icon icofont-rounded-double-right" />
                    Ai offer weekly updates &amp; more.
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="icon icofont-rounded-double-right" />
                    Customer should love your web.
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="icon icofont-rounded-double-right" />
                    Your site smooth and stunning.
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 offset-md-1 col-lg-4 offset-lg-0 col-xl-3">
          <div className="widget-item">
            <h4 className="widget-title line-bottom">
              Newsletter
            </h4>
            <div className="widget-newsletter">
              <p>
                Sign up for our mailing list to get latest
                updates and offers.
              </p>
              <Newsletter mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
            </div>
            <div className="widget-social-icons">
              <SocialIcon
                path="https://twitter.com/"
                icon="icofont-twitter"
              />
              <SocialIcon
                path="https://myaccount.google.com/"
                icon="icofont-google-plus"
              />
              <SocialIcon
                path="https://www.pinterest.com/"
                icon="icofont-pinterest"
              />
              <SocialIcon
                path="https://rss.com/"
                icon="icofont-rss"
              />
              <SocialIcon
                path="https://www.facebook.com/"
                icon="icofont-facebook"
              />
              <SocialIcon
                path="https://dribbble.com/"
                icon="icofont-dribbble"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12">
            <div className="widget-copyright">
              <p>
                &copy; 2021
                {' '}
                <span className="text-uppercase">hope</span>
                . Bản quyền
                {' '}
                <i className="icofont-heart-alt" />
                {' '}
                của
                {' '}
                <Link to="/">Binh Tran</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
