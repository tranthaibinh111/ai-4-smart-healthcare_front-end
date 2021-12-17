// #region React
import React from 'react';
import { NavLink } from 'react-router-dom';
// #endregion

const MainMenu = () => (
  <nav>
    <ul className="main-menu">
      <li className="active">
        <NavLink className="main-menu-link" exact to="/">
          Trang chủ
        </NavLink>
      </li>
      <li>
        <NavLink
          className="main-menu-link"
          to={`${process.env.PUBLIC_URL}/service`}
        >
          Dịch vụ
        </NavLink>
        <ul className="sub-menu">
          <li>
            <NavLink
              className="sub-menu-link"
              to={`${process.env.PUBLIC_URL}/service`}
            >
              Danh sách dịch vụ
            </NavLink>
          </li>
          <li>
            <NavLink
              className="sub-menu-link"
              to={
                `${process.env.PUBLIC_URL
                }/service-details/1`
              }
            >
              Chi tiết dịch vụ
            </NavLink>
          </li>
        </ul>
      </li>

      <li>
        <NavLink
          className="main-menu-link"
          to={`${process.env.PUBLIC_URL}/blog`}
        >
          Blog
        </NavLink>
        <ul className="sub-menu">
          <li>
            <NavLink
              className="sub-menu-link"
              to={`${process.env.PUBLIC_URL}/blog`}
            >
              Blog list
            </NavLink>
          </li>
          <li>
            <NavLink
              className="sub-menu-link"
              to={`${process.env.PUBLIC_URL}/blog-details/1`}
            >
              Blog Details
            </NavLink>
          </li>
        </ul>
      </li>

      <li>
        <NavLink
          className="main-menu-link"
          to={`${process.env.PUBLIC_URL}/about`}
        >
          Giới thiệu
        </NavLink>
      </li>
      <li>
        <NavLink
          className="main-menu-link"
          to={`${process.env.PUBLIC_URL}/contact`}
        >
          Liên hệ
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default MainMenu;
