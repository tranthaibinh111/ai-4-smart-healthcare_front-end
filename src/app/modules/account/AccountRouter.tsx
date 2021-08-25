//#region React
import React, { Suspense, ReactElement } from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
//#endregion

//#region AI for smart healthcare
import LoaderComponent from '../../shared/components/Loader';
//#endregion


const NotFoundPageComponent = React.lazy(() => import('../../pages/NotFoundPage'));
const LoginPageComponent = React.lazy(() => import('./pages/LoginPage'));

const AccountRouters = (): ReactElement => {
  let { path } = useRouteMatch();

  return (
    <Suspense fallback={<LoaderComponent />}>
      <Switch>
        <Route exact path={path} render={() => (<Redirect to={`${path}/login`} />)} />
        <Route path={`${path}/login`} render={() => (<LoginPageComponent />)} />
        <Route path='*' render={() => (<NotFoundPageComponent />)} />
      </Switch>
    </Suspense>
  );
}

export default AccountRouters;
