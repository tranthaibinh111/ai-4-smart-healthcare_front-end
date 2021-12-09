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

const BlogCategory = ({
  match: {
    params: { slug },
  },
}) => {
  // #region Parameters
  const data = BlogData.map((blog) => ({
    ...blog,
    categories: blog.categories.filter((cat) => slugify(cat) === slug),
  })).filter((blog) => blog.categories.length > 0);
  const categoryTitle = data[0].categories[0];
  // #enderegion

  return (
    <Layout>
      <div className="wrapper">
        <Header />
        <SEO title="Hope – Blog Category" />
        <div className="main-content site-wrapper-reveal">
          <Breadcrumb
            prevs={[
              { text: 'Home', path: '/' },
              { text: 'Blog', path: '/blog' },
            ]}
            contentThree={categoryTitle}
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
BlogCategory.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
};

BlogCategory.defaultProps = {
  match: {
    params: {
      slug: '',
    },
  },
};
// #endregion

export default BlogCategory;
