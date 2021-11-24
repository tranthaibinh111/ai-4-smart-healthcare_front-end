//#region React
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
//#endregion

const NavScrollTopComponent = (props: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return props.children;
}

export default withRouter(NavScrollTopComponent);
