// #region React
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Components
import ScrollToTop from '../components/scroll-to-top';
import SEO from '../components/seo';
// #endregion

// #region Containers
import Breadcrumb from '../containers/global/breadcrumb';
import BlogListContainer from '../containers/blog/blog-list';
// #endregion

// #region Layout
import Layout from '../layouts';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
// #endregion
// #endregion

const BlogPage = () => (
  <Layout>
    <SEO title="Hope – Blog" />
    <div className="wrapper">
      <Header />
      <div className="main-content site-wrapper-reveal">
        <Breadcrumb
          classOptionOne="content-style3"
          classOptionTwo="bread-crumbs-style2"
          prevs={[{ text: 'Home', path: '/' }]}
          contentThree="Blog"
          title="<span>Latest From</span> Our Blog"
        />
        <BlogListContainer />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  </Layout>
);

export default BlogPage;
