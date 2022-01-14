// #region React
import React, { useState, useEffect } from 'react';
// #endregion

// #region Package (third-party)
import { useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import { referenceData, researchData } from '../data';
// #endregion

// #region Redux
import { setLayoutTitle, setHomeFlag } from '../toolkit';
// #endregion

// Utils
import { shortTitle } from '../utils';

// Services
import { RootService } from '../shared/services';

// #region Containers
const Breadcrumb = React.lazy(() => import('../containers/global/breadcrumb'));
const ResearchDetailsContainer = React.lazy(() =>
  import('../containers/research/research-details.container')
);
// #endregion
// #endregion

const ReferenceDetailsPage = () => {
  // #region Parameters
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
  // #enderegion

  useEffect(() => {
    // #region Header
    dispatch(setLayoutTitle('Công trình nghiên cứu'));
    dispatch(setHomeFlag(false));
    setBreadcrumbs([
      { text: 'Trang chủ', path: rootService.home },
      { text: 'Tài liệu', path: rootService.references() },
    ]);
    // #enregion

    // Title
    setContentThree(shortTitle(researchData.title));
    setData(researchData);

    // #region Related && Recent
    const rndIdx = [];

    while (rndIdx.length < 7) {
      const idx = Math.floor(Math.random() * referenceData.length) + 1;
      const exists = rndIdx.filter((x) => x === idx).length > 0;

      if (!exists) rndIdx.push(idx);
    }

    setRelated(rndIdx.slice(0, 2).map((idx) => referenceData[idx]));
    setRecent(rndIdx.slice(2).map((idx) => referenceData[idx]));
    // #endregion
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb prevs={breadcrumbs} contentThree={contentThree} />
      <ResearchDetailsContainer data={data} related={related} recent={recent} />
    </>
  );
};

export default ReferenceDetailsPage;
