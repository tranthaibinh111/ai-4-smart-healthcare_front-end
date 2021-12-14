// #region React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region Package (third-party)
import { useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import ServiceData from '../data/service.json';
// #endregion

// #region Redux
import { setLayoutTitle, setHomeFlag } from '../toolkit';
// #endregion

// #region Containers
const Breadcrumb = React.lazy(() => import('../containers/global/breadcrumb'));
const ServiceDetailsContainer = React.lazy(() => import('../containers/service-details'));
// #endregion
// #endregion

const ServiceDetails = ({
  match: {
    params: { id },
  },
}) => {
  // #region Parameters
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [data, setData] = useState(null);
  const [title, setTitle] = useState(null);

  // Redux
  const dispatch = useDispatch();
  // #endregion

  useEffect(() => {
    dispatch(setLayoutTitle('Hope – Service Details'));
    dispatch(setHomeFlag(false));
    setBreadcrumbs([
      { text: 'Home', path: '/' },
      { text: 'Service', path: '/service' },
    ]);

    // Lấy dịch vụ theo ID
    const services = ServiceData.filter((service) => service.id === parseInt(id, 10));

    if (services.length > 0) {
      setData(services[0]);
      setTitle(services[0].title);
    }
  }, []);

  return (
    <>
      <Breadcrumb prevs={breadcrumbs} contentThree={title} />
      <ServiceDetailsContainer data={data} />
    </>
  );
};

// #region Khai báo Props
ServiceDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

ServiceDetails.defaultProps = {
  match: {
    params: {
      id: 0,
    },
  },
};
// #endregion

export default ServiceDetails;
