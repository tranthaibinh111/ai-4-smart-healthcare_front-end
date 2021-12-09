// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region Package (third-party)
import { DiscussionEmbed } from 'disqus-react';
// #endregion

const Comment = ({ url, id, title }) => {
  // #region Parameters
  const disqusShortname = 'mitech-1';
  const disqusConfig = {
    url,
    identifier: `${id}`,
    title,
  };
  // #endregion

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};

// #region Khai báo Props
Comment.propTypes = {
  url: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
};

Comment.defaultProps = {
  url: '',
  id: 0,
  title: '',
};
// #endregion

export default Comment;
