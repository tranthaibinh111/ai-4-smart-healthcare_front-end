// #region React
import React, { useEffect } from 'react';
// #endregion

// #region Package (third-party)
import { useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// #region Redux
import { setLayoutTitle, setHomeFlag } from '../toolkit';
// #endregion

// #region Containers
const PageTitleContainer = React.lazy(() => import('../containers/global/page-title'));
const AboutContainer = React.lazy(() => import('../containers/about'));
// #endregion
// #endregion

const AboutPage = () => {
  // #region Parameters
  // Redux
  const dispatch = useDispatch();
  // #endregion

  useEffect(() => {
    dispatch(setLayoutTitle('Hope – About'));
    dispatch(setHomeFlag(false));
  }, []);

  return (
    <>
      <PageTitleContainer
        image="img/photos/about-bg1.jpg"
        subTitle="Hope medical center"
        title="About <span>Hope</span>"
      />
      <AboutContainer />
    </>
  );
};

export default AboutPage;
