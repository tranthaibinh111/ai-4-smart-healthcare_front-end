// #region React
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import BlogData from '../../data/blog.json';
// #endregion

// #region Components
import Comment from '../../components/comment';
import SectionTitle from '../../components/section-title';
// #endregion
// #endregion

const CommentContainer = () => (
  <div className="comment-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-8">
          <SectionTitle
            classOption="d-flex flex-column-reverse"
            title="<span>Leave</span> A Reply"
            subTitle="Your email address will not be published"
          />
          <div className="comment-form-wrap">
            <Comment
              url=""
              id={BlogData.id}
              title={BlogData.title}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CommentContainer;
