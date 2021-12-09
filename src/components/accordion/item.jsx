// #region React
import React, {
  useContext,
  useEffect,
  Children,
  isValidElement,
  cloneElement,
} from 'react';
import PropTypes from 'prop-types';
// #endregion

import { AccordionContext } from './context';

const AccordionItem = ({ children, id }) => {
  // #region Parameters
  const { setIdsOnInit, activeId } = useContext(AccordionContext);
  // #endregion

  useEffect(() => {
    if (!setIdsOnInit)
      return;

    setIdsOnInit(id);
  }, [id]);

  // #region Components
  const childrenWithProps = Children.map(children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    const props = { id, activeId };

    if (isValidElement(child))
      return cloneElement(child, props);

    return child;
  });
  // #endregion

  return (
    <div className="accordion-item" id={id}>
      {childrenWithProps}
    </div>
  );
};

// #region Khai báo Props
AccordionItem.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

AccordionItem.defaultProps = {
  id: 0,
};
// #endregion

export default AccordionItem;
