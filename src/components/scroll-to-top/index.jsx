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

  useEffect(() => {
    let position = window.pageYOffset;

    const scrollHandler = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos < 200)
        setStick(false);
      else if (scrollPos < position)
        setStick(true);
      else
        setStick(false);

      position = scrollPos;
    };

    window.addEventListener('scroll', () => {
      scrollHandler();
    });
    return () => {
      window.removeEventListener('scroll', () => {
        scrollHandler();
      });
    };
  }, [stick]);

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
