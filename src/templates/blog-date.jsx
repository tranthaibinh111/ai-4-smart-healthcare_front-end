// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import BlogData from '../data/blog.json';
// #endregion

// utils
import { slugify } from '../utils';

// #region Components
import ScrollToTop from '../components/scroll-to-top';
import SEO from '../components/seo';
// #endregion

// #region Containers
import Breadcrumb from '../containers/global/breadcrumb';
import BlogItemContainer from '../containers/blog/blog-item';
// #endregion

// #region Layout
import Layout from '../layouts';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
// #endregion
// #endregion

const BlogDate = ({
  match: {
    params: { date },
  },
}) => {
  // #region Parameters
  const data = BlogData.filter((blog) => slugify(blog.date) === date);
  const dateTitle = data[0].date;
  // #endregion

  return (
    <Layout>
      <SEO title="Hope – Blog Date" />
      <div className="wrapper">
        <Header />
        <div className="main-content site-wrapper-reveal">
          <Breadcrumb
            prevs={[
              { text: 'Home', path: '/' },
              { text: 'Blog', path: '/blog' },
            ]}
            contentThree={dateTitle}
          />
          <BlogItemContainer data={data} />
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </Layout>
  );
};

// #region Khai báo Props
BlogDate.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      date: PropTypes.string,
    }),
  }),
};

BlogDate.defaultProps = {
  match: {
    params: {
      date: '',
    },
  },
};
// #endregion

export default BlogDate;
