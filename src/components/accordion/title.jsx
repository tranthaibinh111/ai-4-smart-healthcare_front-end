// #region React
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// #endregion

import { AccordionContext } from './context';

const AccordionTitle = ({ children, id }) => {
  // #region Parameters
  const { toggleActive, activeId, setIsInit } = useContext(AccordionContext);
  const isActive = id === activeId;
  // #endregion

  // #region Event
  const clickHandler = () => {
    if (!toggleActive || !id || !setIsInit)
      return;

    setIsInit(false);
    toggleActive(id);
  };
  // #endregion

  return (
    <div
      aria-hidden="true"
      className={`accordion-header ${isActive ? 'active' : ''}`}
      type="button"
      onClick={clickHandler}
    >
      <span className="icon closed">
        <i className="icon-add icon-plus icofont-thin-down" />
      </span>
      <span className="icon opened">
        <i className="icon-remove icon-minus icofont-close-line" />
      </span>
      <span className="title">{children}</span>
    </div>
  );
};

// #region Khai báo Props
AccordionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

AccordionTitle.defaultProps = {
  id: 0,
};
// #endregion

export default AccordionTitle;
