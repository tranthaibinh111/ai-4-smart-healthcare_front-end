// #region React
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// utils
import {
  getClosest,
  getSiblings,
  slideToggle,
  slideUp,
} from '../../../utils';

// #region AI 4 Smart Healthcare
// #region Data
import AppSettings from '../../../data/appsettings.json';
// #endregion
// #endregion

const MobileMenu = ({ show, onClose }) => {
  // #region Envent
  const onClickHandler = (e) => {
    const target = e.currentTarget;
    const parentEl = target.parentElement;
    if (
      parentEl?.classList.contains('menu-expand')
      || target.classList.contains('menu-expand')
    ) {
      const element = target.classList.contains('icon')
        ? parentEl
        : target;
      const parent = getClosest(element, 'li');
      const { childNodes } = parent;
      const parentSiblings = getSiblings(parent);
      parentSiblings.forEach((sibling) => {
        const sibChildNodes = sibling.childNodes;
        sibChildNodes.forEach((child) => {
          if (child.nodeName === 'UL')
            slideUp(child, 1000);
        });
      });
      childNodes.forEach((child) => {
        if (child.nodeName === 'UL')
          slideToggle(child, 1000);
      });
    }
  };
  // #endregion

  return (
    <div className={`offcanvas offcanvas-mobile-menu ${show ? 'offcanvas-open' : ''}`}>
      <div className="inner">
        <div className="border-bottom mb-3 pb-3 text-end">
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="offcanvas-close" onClick={onClose}>×</button>
        </div>
        <div className="offcanvas-head mb-3">
          <div className="header-top-offcanvas">
            <p>
              <i className="icofont-google-map" />
              {' '}
              <span>Địa chỉ:</span>
              {` ${AppSettings.address}`}
            </p>
          </div>
        </div>
        <nav className="offcanvas-menu">
          <ul>
            <li>
              <NavLink exact to={`${process.env.PUBLIC_URL}/`}>
                <span className="menu-text">Home</span>
              </NavLink>
              <span
                className="menu-expand"
                onClick={onClickHandler}
                aria-hidden="true"
              />
              <ul className="offcanvas-submenu">
                <li>
                  <NavLink
                    exact
                    to={`${process.env.PUBLIC_URL}/`}
                  >
                    Trang chủ
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={`${process.env.PUBLIC_URL}/service`}>
                <span className="menu-text">Dịch vụ</span>
              </NavLink>
              <span
                className="menu-expand"
                onClick={onClickHandler}
                aria-hidden="true"
              />
              <ul className="offcanvas-submenu">
                <li>
                  <NavLink
                    to={`${process.env.PUBLIC_URL}/service`}
                  >
                    Danh sách dịch vụ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={
                      `${process.env.PUBLIC_URL
                      }/service-detalis`
                    }
                  >
                    Chi tiết dịch vụ
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to={`${process.env.PUBLIC_URL}/blog`}>
                <span className="menu-text">blog</span>
              </NavLink>
              <span
                className="menu-expand"
                onClick={onClickHandler}
                aria-hidden="true"
              />
              <ul className="offcanvas-submenu">
                <li>
                  <NavLink
                    to={`${process.env.PUBLIC_URL}/blog`}
                  >
                    Blog list
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={
                      `${process.env.PUBLIC_URL
                      }/blog-details/1`
                    }
                  >
                    Blog details
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to={`${process.env.PUBLIC_URL}/about`}>
                Giới thiệu
              </NavLink>
            </li>

            <li>
              <NavLink to={`${process.env.PUBLIC_URL}/contact`}>
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </nav>

        <ul className="media-wrap">
          <li className="media media-list">
            <span className="media-icon">
              <i className="icofont-clock-time" />
            </span>
            <div className="media-content">
              <span className="media-sub-heading">
                working hours
              </span>
              <span className="media-heading">
                MON - FRI: 9.00 - 21.00
                {' '}
              </span>
            </div>
          </li>

          <li className="media media-list">
            <span className="media-icon">
              <i className="icofont-ui-call" />
            </span>
            <div className="media-content">
              <span className="media-sub-heading">
                hotline 24/7
              </span>
              <a
                className="media-heading"
                href="tel:+0962-58-58-258"
              >
                +0962-58-58-258
              </a>
            </div>
          </li>

          <li className="media media-list">
            <span className="media-icon">
              <i className="icofont-envelope" />
            </span>
            <div className="media-content">
              <span className="media-sub-heading">email us</span>
              <a
                className="media-heading"
                href="mailto:support@clenora.com.uk"
              >
                support@clenora.com.uk
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

// #region Khai báo Props
MobileMenu.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

MobileMenu.defaultProps = {
  show: false,
  onClose: () => { },
};
// #endregion

export default MobileMenu;
