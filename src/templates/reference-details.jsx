// #region React
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// #region Package (third-party)
import { useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import { referenceData } from '../data';
// #endregion

// #region Redux
import { setLayoutTitle, setHomeFlag } from '../toolkit';
// #endregion

// Services
import { RootService } from '../shared/services';

// #region Containers
const Breadcrumb = React.lazy(() => import('../containers/global/breadcrumb'));
const ReferenceDetailsContainer = React.lazy(() => import('../containers/reference/reference-details'));
// #endregion
// #endregion

const ReferenceDetailsPage = ({ match: { params: { slug } } }) => {
  // #region Parameters
  // eslint-disable-next-line prefer-const
  let history = useHistory();

  const [contentThree, setContentThree] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [data, setData] = useState(null);
  const [related, setRelated] = useState([]);
  const [recent, setRecent] = useState([]);

  // Redux
  const dispatch = useDispatch();

  // AI 4 Smart Healthcare
  // Services
  const rootService = RootService();

  const title = 'Tài liệu tham khảo';
  // #enderegion

  useEffect(() => {
    // #region Header
    dispatch(setLayoutTitle(title));
    dispatch(setHomeFlag(false));
    setBreadcrumbs([
      { text: 'Trang chủ', path: rootService.home },
      { text: title, path: rootService.references() },
    ]);
    // #enregion

    const reference = referenceData.find((x) => x.slug === slug);

    if (!reference) {
      history.push(rootService.references);
      return;
    }

    // #region Title
    if (reference.title.length > 30)
      setContentThree(`${reference.title.slice(0, 30)}...`);
    else
      setContentThree(reference.title);
    // #endregion

    // Data
    setData(reference);

    // #region Related && Recent
    const otherReferences = referenceData.filter((x) => x.slug !== slug);
    const rndIdx = [];

    while (rndIdx.length < 7) {
      const idx = Math.floor(Math.random() * otherReferences.length) + 1;
      const exists = rndIdx.filter((x) => x === idx).length > 0;

      if (!exists)
        rndIdx.push(idx);
    }

    setRelated(rndIdx.slice(0, 2).map((idx) => otherReferences[idx]));
    setRecent(rndIdx.slice(2).map((idx) => otherReferences[idx]));
    // #endregion
  }, [slug]);

  return (
    <>
      <Breadcrumb prevs={breadcrumbs} contentThree={contentThree} />
      <ReferenceDetailsContainer data={data} related={related} recent={recent} />
    </>
  );
};

// #region Khai báo Props
ReferenceDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
// #endregion

export default ReferenceDetailsPage;
