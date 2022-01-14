// #region
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Templates
const ServiceDetailsPage = React.lazy(() => import('./templates/service-details.page'));
const ReferenceDetailsPage = React.lazy(() => import('./templates/reference-details.page'));
const ResearchDetailsPage = React.lazy(() => import('./templates/research-details.page'));
// #endregion

// #region Pages
const HomePage = React.lazy(() => import('./pages/home.page'));
const ReferencePage = React.lazy(() => import('./pages/reference.page'));
const AboutPage = React.lazy(() => import('./pages/about.page'));
const ContactPage = React.lazy(() => import('./pages/contact.page'));
// #endregion
// #endregion

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Trang chủ',
    component: HomePage,
  },
  {
    path: '/chan-doan',
    exact: true,
    name: 'Chẩn đoán',
    redirect: '/chan-doan/s11',
  },
  {
    path: '/chan-doan/:subject',
    exact: true,
    name: 'Chi tiết chẩn đoán',
    component: ServiceDetailsPage,
  },
  {
    path: '/tai-lieu-tham-khao',
    exact: true,
    name: 'Danh sách tài liệu tham khảo',
    component: ReferencePage,
  },
  {
    path: '/tai-lieu-tham-khao/:slug',
    exact: true,
    name: 'Tài liệu tham khảo',
    component: ReferenceDetailsPage,
  },
  {
    path: '/cong-trinh-nghien-cuu',
    exact: true,
    name: 'Công trình nghiên cứu',
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

export default routes;
