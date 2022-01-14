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
const GoogleMapContainer = React.lazy(() => import('../containers/global/map.container'));
const ContactContainer = React.lazy(() => import('../containers/contact.container'));
// #endregion

// #endregion

const ContactPage = () => {
  // #region Parameters
  // Redux
  const dispatch = useDispatch();
  // #endregion

  useEffect(() => {
    const title = 'Liên hệ';

    dispatch(setLayoutTitle(title));
    dispatch(setHomeFlag(false));
    dispatch(setMenu(title));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GoogleMapContainer classOption='contact-map-area' />
      <ContactContainer />
    </>
  );
};

export default ContactPage;
