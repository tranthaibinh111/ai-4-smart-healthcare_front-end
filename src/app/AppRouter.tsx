//#region React
import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
//#endregion

//#region AI for smart healtcare
//#region routers
import AccountRouters from './modules/account/AccountRouter';
//#endregion
//#endregion


const NotFoundPageComponent = React.lazy(() => import('./pages/NotFoundPage'));
const HomePageComponent = React.lazy(() => import('./pages/HomePage'));

const AppRouter = (): ReactElement => {
  return (
    <Switch>
      <Route exact path='/' render={() => (<HomePageComponent/>)} />
      <Route path='/account' component={AccountRouters} />
      <Route path='*' render={() => (<NotFoundPageComponent/>)} />
    </Switch>
  );
}

export default AppRouter;
