// #region React
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
// #endregion

// #region Package (third-party)
import { useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import { referenceData } from '../data';
// #endregion

// #region Redux
import { setLayoutTitle, setHomeFlag, setMenu } from '../toolkit';
// #endregion

// Utils
import { shortTitle } from '../utils';

// Services
import { RootService } from '../shared/services';

// #region Containers
const Breadcrumb = React.lazy(() => import('../containers/global/breadcrumb'));
const ReferenceDetailsContainer = React.lazy(() =>
  import('../containers/reference/reference-details.container')
);
// #endregion
// #endregion

const ReferenceDetailsPage = () => {
  // #region Parameters
  let { slug } = useParams();
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
    dispatch(setMenu('Tài liệu'));
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

    // Title
    setContentThree(shortTitle(reference.title));
    // Data
    setData(reference);

    // #region Related && Recent
    const otherReferences = referenceData.filter((x) => x.slug !== slug);
    const rndIdx = [];

    while (rndIdx.length < 7) {
      const idx = Math.floor(Math.random() * otherReferences.length) + 1;
      const exists = rndIdx.filter((x) => x === idx).length > 0;

      if (!exists) rndIdx.push(idx);
    }

    setRelated(rndIdx.slice(0, 2).map((idx) => otherReferences[idx]));
    setRecent(rndIdx.slice(2).map((idx) => otherReferences[idx]));
    // #endregion
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <>
      <Breadcrumb prevs={breadcrumbs} contentThree={contentThree} />
      <ReferenceDetailsContainer data={data} related={related} recent={recent} />
    </>
  );
};

export default ReferenceDetailsPage;
