// #region React
import React, { useEffect } from 'react';
// #endregion

// #region Package (third-party)
import { useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// #region Redux
import { setLayoutTitle, setHomeFlag, setMenu } from '../toolkit';
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
    const title = 'Giới thiệu';

    dispatch(setLayoutTitle(title));
    dispatch(setHomeFlag(false));
    dispatch(setMenu(title));
  }, []);

  return (
    <>
      <PageTitleContainer
        image="img/photos/about-bg1.jpg"
        subTitle="Giới thiệu"
        title="AI 4 Smart Healthcare"
      />
      <AboutContainer />
    </>
  );
};

export default AboutPage;
