// #region
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Templates
const ServiceDetails = React.lazy(() => import('./templates/service-details'));
const ReferenceDetailsPage = React.lazy(() => import('./templates/reference-details'));
const ResearchDetailsPage = React.lazy(() => import('./templates/research-details'));
// #endregion

// #region Pages
const HomePage = React.lazy(() => import('./pages/index'));
const ServicePage = React.lazy(() => import('./pages/service'));
const ReferencePage = React.lazy(() => import('./pages/reference'));
const AboutPage = React.lazy(() => import('./pages/about'));
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
    exact: true,
    name: 'Danh sách tài liệu tham khảo',
    component: ReferencePage,
  },
  {
    path: '/tai-lieu-tham-khao/:slug',
    name: 'Tài liệu tham khảo',
    exact: true,
    component: ReferenceDetailsPage,
  },
  {
    path: '/cong-trinh-nghien-cuu',
    name: 'Công trình nghiên cứu',
    exact: true,
    component: ResearchDetailsPage,
  },
  {
    path: '/gioi-thieu',
    name: 'Giới thiệu',
    component: AboutPage,
  },
  {
    path: '/lien-he',
    name: 'Liên hệ',
    component: ContactPage,
  },
];

export default appRoutes;
