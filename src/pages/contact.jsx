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
const GoogleMapContainer = React.lazy(() => import('../containers/global/map'));
const ContactPageContainer = React.lazy(() => import('../containers/contact'));
// #endregion

// #endregion

const ContactPage = () => {
  // #region Parameters
  // Redux
  const dispatch = useDispatch();
  // #endregion

  useEffect(() => {
    dispatch(setLayoutTitle('Hope – Contact'));
    dispatch(setHomeFlag(false));
  }, []);

  return (
    <>
      <GoogleMapContainer classOption="contact-map-area" />
      <ContactPageContainer />
    </>
  );
};

export default ContactPage;
