// #region React
import React, { useEffect, useState } from 'react';
// #endregion

const ScrollToTop = (props) => {
  // #region Parameters
  const [stick, setStick] = useState(false);
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // #endregion

  // #region Event
  const scrollHandler = (position) => {
    const scrollPos = window.pageYOffset;

    if (scrollPos < 200)
      setStick(false);
    else if (scrollPos < position)
      setStick(true);
    else
      setStick(false);

    return scrollPos;
  };
  // #endregion

  useEffect(() => {
    let position = window.pageYOffset;

    window.addEventListener('scroll', () => {
      position = scrollHandler(position);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        position = scrollHandler(position);
      });
    };
  }, []);

  return (
    <button
      type="button"
      className={`scroll-to-top ${stick ? 'show' : ''}`}
      onClick={onClickHandler}
      {...props}
    >
      <i className="arrow-top icofont-rounded-up" />
      <i className="arrow-bottom icofont-rounded-up" />
    </button>
  );
};

export default ScrollToTop;
