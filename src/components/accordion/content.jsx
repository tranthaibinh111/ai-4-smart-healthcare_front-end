// #region React
import React, {
  useContext,
  useRef,
  useEffect,
  memo,
} from 'react';
import PropTypes from 'prop-types';
// #endregion

// utils
import { slideUp, slideDown } from '../../utils';

import { AccordionContext } from './context';

const AccordionContent = ({ children, id }) => {
  // #region Parameters
  const { activeId, isInit } = useContext(AccordionContext);
  const isActive = id === activeId;
  const ref = useRef(null);
  // #endregion

  useEffect(() => {
    if (isInit && isActive)
      slideDown(ref.current);

    if (!isInit) {
      if (isActive)
        slideDown(ref.current);
      else
        slideUp(ref.current);
    }
  }, [activeId, isInit, isActive]);

  return (
    <div ref={ref} className="accordion-content">
      {children}
    </div>
  );
};

// #region Khai báo Props
AccordionContent.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

AccordionContent.defaultProps = {
  id: 0,
};
// #endregion

export default memo(AccordionContent);
