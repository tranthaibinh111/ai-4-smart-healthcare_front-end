// #region React
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// #endregion

// #region AI 4 Smart Healthcare
// #region Services
import { RootService, SubjectService } from '../../shared/services';
// #endregion
// #endregion

const SidebarSubjects = () => {
  // #region Parameter
  const [subjects, setSubjects] = useState([]);

  const rootService = RootService();
  const subjectService = SubjectService();
  // #endregion

  // #region API
  const getSubjects = async () => {
    const response = await subjectService.getSubjects();

    if (response.success) setSubjects(response.data);
  };
  // #endregion

  useEffect(() => {
    getSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='widget-side-nav'>
      <ul>
        {subjects.map((single, key) => (
          <li key={key}>
            <NavLink activeClassName='active' to={rootService.serviceDetails(single.name)}>
              {single.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarSubjects;
