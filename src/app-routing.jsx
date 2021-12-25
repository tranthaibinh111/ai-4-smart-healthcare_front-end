// #region
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Templates
const ServiceDetails = React.lazy(() => import('./templates/service-details'));
const BlogDetailsPage = React.lazy(() => import('./templates/blog-details'));
const BlogCategory = React.lazy(() => import('./templates/blog-category'));
const BlogTag = React.lazy(() => import('./templates/blog-tag'));
const BlogDate = React.lazy(() => import('./templates/blog-date'));
const BlogAuthor = React.lazy(() => import('./templates/blog-author'));
// #endregion

// #region Pages
const HomePage = React.lazy(() => import('./pages/index'));
const AboutPage = React.lazy(() => import('./pages/about'));
const ServicePage = React.lazy(() => import('./pages/service'));
const BlogPage = React.lazy(() => import('./pages/reference'));
const ContactPage = React.lazy(() => import('./pages/contact'));
// #endregion
// #endregion

const appRoutes = [
  {
    path: '/',
    exact: true,
    name: 'Trang chủ',
    component: HomePage,
  },
  {
    path: '/gioi-thieu',
    name: 'Giới thiệu',
    component: AboutPage,
  },
  {
    path: '/chuc-nang',
    name: 'Chức năng',
    component: ServicePage,
  },
  {
    path: '/chuc-nang/:id',
    name: 'Thông tin dịch vụ',
    component: ServiceDetails,
  },
  {
    path: '/tai-lieu-tham-khao',
    name: 'Tài liệu tham khảo',
    component: BlogPage,
  },
  {
    path: '/category/:slug',
    name: 'Danh mục Blog',
    component: BlogCategory,
  },
  {
    path: '/tag/:slug',
    name: 'Nhã Blog',
    component: BlogTag,
  },
  {
    path: '/date/:date',
    name: 'Ngày Blog',
    component: BlogDate,
  },
  {
    path: '/author/:author',
    name: 'Tác giả Blog',
    component: BlogAuthor,
  },
  {
    path: '/blog-details/:id',
    name: 'Chi tiết Blog',
    component: BlogDetailsPage,
  },
  {
    path: '/lien-he',
    name: 'Liên hệ',
    component: ContactPage,
  },
];

export default appRoutes;
