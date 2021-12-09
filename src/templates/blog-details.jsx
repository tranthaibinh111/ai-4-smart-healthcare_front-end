// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import BlogData from '../data/blog.json';
// #endregion

// #region Components
import ScrollToTop from '../components/scroll-to-top';
import SEO from '../components/seo';
// #endregion

// #region Containers
import Breadcrumb from '../containers/global/breadcrumb';
import BlogDetailsContainer from '../containers/blog/blog-details';
import CommentContainer from '../containers/comment-container';
// #endregion

// #region Layout
import Layout from '../layouts';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
// #endregion
// #endregion

const BlogDetailsPage = ({
  match: {
    params: { id },
  },
}) => {
  // #region Parameters
  const blogId = parseInt(id, 10);
  const data = BlogData.filter((blogItem) => blogItem.id === blogId);
  // #endregion

  return (
    <Layout>
      <SEO title="Hope – Blog Details" />
      <div className="wrapper">
        <Header />
        <div className="main-content site-wrapper-reveal">
          <Breadcrumb
            prevs={[
              { text: 'Home', path: '/' },
              { text: 'Blog', path: '/blog' },
            ]}
            contentThree={data[0]?.title}
          />
          <BlogDetailsContainer data={data[0]} />
          <CommentContainer />
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </Layout>
  );
};

// #region Khai báo Props
BlogDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

BlogDetailsPage.defaultProps = {
  match: {
    params: {
      id: 0,
    },
  },
};
// #endregion

export default BlogDetailsPage;
