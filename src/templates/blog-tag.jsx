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

const BlogTag = ({
  match: {
    params: { slug },
  },
}) => {
  // #region Parameters
  const data = BlogData.map((blog) => ({
    ...blog,
    tags: blog.tags.filter((tag) => slugify(tag) === slug),
  })).filter((blog) => blog.tags.length > 0);
  const tagTitle = data[0].tags[0];
  // #endregion

  return (
    <Layout>
      <SEO title="Hope – Blog Tag" />
      <div className="wrapper">
        <Header />
        <div className="main-content site-wrapper-reveal">
          <Breadcrumb
            prevs={[
              { text: 'Home', path: '/' },
              { text: 'Blog', path: '/blog' },
            ]}
            contentThree={tagTitle}
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
BlogTag.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
};

BlogTag.defaultProps = {
  match: {
    params: {
      slug: '',
    },
  },
};
// #endregion

export default BlogTag;
