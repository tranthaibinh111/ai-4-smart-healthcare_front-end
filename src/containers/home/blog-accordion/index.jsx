// #region React
import React from 'react';
import { Link } from 'react-router-dom';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import BlogData from '../../../data/blog.json';
// #endregion

// #region Components
import SectionTitle from '../../../components/section-title';
import BlogList from '../../../components/blog';
import AccordionWrap from '../../../components/accordion';
// #endregion
// #endregion

const BlogAccordion = () => (
  <section className="blog-area blog-default-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <SectionTitle title="<span>Tips &amp;</span> Tricks" />
          <div
            className="post-items-style1"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            {BlogData
              && BlogData.slice(0, 3).map((single, key) => <BlogList key={key} data={single} />)}
          </div>
        </div>
        <div className="col-lg-6">
          <SectionTitle
            classOption="mt-md-70"
            title="<span>FAQs</span>"
          />
          <div
            className="accordian-content"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <AccordionWrap />
            <Link className="btn-line" to="/">
              View All Questions
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlogAccordion;
