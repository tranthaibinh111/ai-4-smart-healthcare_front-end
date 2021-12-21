// #region React
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import BlogData from '../../../data/blog.json';
// #endregion

// #region Components
import SectionTitle from '../../../components/section-title';
import BlogList from '../../../components/blog';
// #endregion
// #endregion

const BlogAccordion = () => (
  <section className="blog-area blog-default-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <SectionTitle title="<span>Tài liệu tham khảo</span>" />
          <div
            className="post-items-style1"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            {BlogData
              && BlogData.slice(0, 3).map((single, key) => <BlogList key={key} data={single} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlogAccordion;
