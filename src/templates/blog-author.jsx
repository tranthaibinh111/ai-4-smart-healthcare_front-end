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

const BlogAuthor = ({
  match: {
    params: { author },
  },
}) => {
  // #region Parameters
  const data = BlogData.filter((blog) => slugify(blog.author) === author);
  const authorTitle = data[0].author;
  // #endregion

  return (
    <Layout>
      <SEO title="Hope – Blog Author" />
      <div className="wrapper">
        <Header />
        <div className="main-content site-wrapper-reveal">
          <Breadcrumb
            prevs={[
              { text: 'Home', path: '/' },
              { text: 'Blog', path: '/blog' },
            ]}
            contentThree={authorTitle}
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
BlogAuthor.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      author: PropTypes.string,
    }),
  }),
};

BlogAuthor.defaultProps = {
  match: {
    params: {
      author: '',
    },
  },
};
// #endregion

export default BlogAuthor;
