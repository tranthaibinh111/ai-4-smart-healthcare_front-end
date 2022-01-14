// #region React
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// #region Package (third-party)
// Redux
import { useSelector, useDispatch } from 'react-redux';
// #endregion

// utils
import { getClosest, getSiblings, slideToggle, slideUp } from '../../utils';

// #region AI 4 Smart Healthcare
// Redux
import { setMenu } from '../../toolkit';
// #endregion

const MobileMenu = ({ appsettings, data, show, onClose }) => {
  // #region Parameters
  // Redux
  const actionLabel = useSelector((state) => state.menu.label);
  const dispatch = useDispatch();
  // #endregion

  // #region Envent
  /**
   * Cài đặt tab menu đã chọn
   * @param {string} label Tab menu đã chọn
   */
  const handleMenu = (label) => dispatch(setMenu(label));

  const onClickHandler = (e) => {
    const target = e.currentTarget;
    const parentEl = target.parentElement;
    if (parentEl?.classList.contains('menu-expand') || target.classList.contains('menu-expand')) {
      const element = target.classList.contains('icon') ? parentEl : target;
      const parent = getClosest(element, 'li');
      const { childNodes } = parent;
      const parentSiblings = getSiblings(parent);

      parentSiblings.forEach((sibling) => {
        const sibChildNodes = sibling.childNodes;
        sibChildNodes.forEach((child) => {
          if (child.nodeName === 'UL') slideUp(child, 1000);
        });
      });
      childNodes.forEach((child) => {
        if (child.nodeName === 'UL') slideToggle(child, 1000);
      });
    }
  };
  // #endregion

  // #region Components
  const submenuComponents = (parentLabel, children) =>
    children.map((menu, idx) => (
      <li key={`sub-menu-${idx}`}>
        <NavLink
          exact={menu.exact}
          to={`${process.env.PUBLIC_URL}${menu.url}`}
          onClick={() => handleMenu(parentLabel)}
        >
          {menu.label}
        </NavLink>
      </li>
    ));

  const menuComponents = (children) =>
    children.map((menu, idx) => (
      <li key={`main-menu-${idx}`} className={menu.label === actionLabel ? 'active' : ''}>
        <NavLink
          exact={menu.exact}
          to={`${process.env.PUBLIC_URL}${menu.url}`}
          onClick={() => handleMenu(menu.label)}
        >
          {menu.label}
        </NavLink>
        {menu.children && (
          <>
            <span className='menu-expand' onClick={onClickHandler} aria-hidden='true' />
            <ul className='offcanvas-submenu'>{submenuComponents(menu.label, menu.children)}</ul>
          </>
        )}
      </li>
    ));
  // #endregion

  return (
    <div className={`offcanvas offcanvas-mobile-menu ${show ? 'offcanvas-open' : ''}`}>
      <div className='inner'>
        <div className='border-bottom mb-3 pb-3 text-end'>
          {/* eslint-disable-next-line react/button-has-type */}
          <button className='offcanvas-close' onClick={onClose}>
            ×
          </button>
        </div>
        <div className='offcanvas-head mb-3'>
          <div className='header-top-offcanvas'>
            <p>
              <i className='icofont-google-map' /> <span>Địa chỉ:</span>
              {` ${appsettings.address}`}
            </p>
          </div>
        </div>
        <nav className='offcanvas-menu'>
          <ul>{menuComponents(data)}</ul>
        </nav>

        <ul className='media-wrap'>
          <li className='media media-list'>
            <span className='media-icon'>
              <i className='icofont-clock-time' />
            </span>
            <div className='media-content'>
              <span className='media-sub-heading'>giờ làm việc</span>
              <span className='media-heading'>MON - FRI: 9.00 - 21.00 </span>
            </div>
          </li>

          <li className='media media-list'>
            <span className='media-icon'>
              <i className='icofont-ui-call' />
            </span>
            <div className='media-content'>
              <span className='media-sub-heading'>hotline 24/7</span>
              <a className='media-heading' href='tel:+0962-58-58-258'>
                +0962-58-58-258
              </a>
            </div>
          </li>

          <li className='media media-list'>
            <span className='media-icon'>
              <i className='icofont-envelope' />
            </span>
            <div className='media-content'>
              <span className='media-sub-heading'>email us</span>
              <a className='media-heading' href='mailto:support@clenora.com.uk'>
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
  appsettings: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
// #endregion

export default MobileMenu;
