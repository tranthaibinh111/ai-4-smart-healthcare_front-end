// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// Utils
import { keywordUrl } from '../../utils';
// #endregion

const SidebarKeyword = ({ data }) => (
  <div className='widget-tags tags-style2'>
    <ul>
      {data.length > 0 &&
        data.map((single, key) => (
          <li key={key}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <a
              href={keywordUrl(single.text, single.search)}
              target='_blank'
              rel='noreferrer'
              dangerouslySetInnerHTML={{ __html: single.name }}
            />
          </li>
        ))}
    </ul>
  </div>
);

// #region Khai báo Props
SidebarKeyword.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      search: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

SidebarKeyword.defaultProps = {
  data: [],
};
// #endregion

export default SidebarKeyword;
