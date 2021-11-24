//#region React
import { ReactElement, Suspense } from 'react';
//#endregion

//#region AI for smart healtcare
//#region routers
import AppRouter from './app-router.module';
//#endregion

//#region components
import { LoaderComponent, NavScrollTopComponent} from './shared/components';
//#endregion
//#endregion

const App = (): ReactElement => {
  return (
    <NavScrollTopComponent>
      <Suspense fallback={<LoaderComponent/>}>
        <AppRouter/>
      </Suspense>
    </NavScrollTopComponent>
  );
}

export default App;
