// #region React
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// #region Package (third-party)
// Redux
import { useSelector, useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// Redux
import { setLabel } from '../../../toolkit/menu-slice';
// #endregion

const MainMenu = ({ data }) => {
  // #region Parameters
  // Redux
  const actionLabel = useSelector((state) => state.menu.label);
  const dispatch = useDispatch();
  // #endregion

  // #region Event
  /**
   * Cài đặt tab menu đã chọn
   * @param {string} label Tab menu đã chọn
   */
  const handleMenu = (label) => dispatch(setLabel(label));
  // #enregion

  // #region Components
  const submenuComponents = (parentLabel, children) => children.map((menu, idx) => (
    <li key={`sub-menu-${idx}`}>
      <NavLink
        className="sub-menu-link"
        exact={menu.exact}
        to={`${process.env.PUBLIC_URL}${menu.url}`}
        onClick={() => handleMenu(parentLabel)}
      >
        {menu.label}
      </NavLink>
    </li>
  ));

  const menuComponents = (children) => children.map((menu, idx) => (
    <li key={`main-menu-${idx}`} className={menu.label === actionLabel ? 'active' : ''}>
      <NavLink
        className="main-menu-link"
        exact={menu.exact}
        to={`${process.env.PUBLIC_URL}${menu.url}`}
        onClick={() => handleMenu(menu.label)}
      >
        {menu.label}
      </NavLink>
      {menu.children && (
        <ul className="sub-menu">
          {submenuComponents(menu.label, menu.children)}
        </ul>
      )}
    </li>
  ));
  // #endregion

  return (
    <nav>
      <ul className="main-menu">
        {menuComponents(data)}
      </ul>
    </nav>
  );
};

// #region Khai báo Props
MainMenu.propTypes = {
  data: PropTypes.array.isRequired,
};
// #endregion

export default MainMenu;
