//#region React
import { Component, Suspense } from 'react';
//#endregion

//#region AI for smart healtcare
//#region routers
import AppRouter from './AppRouter';
//#endregion
//#region components
import ScrollToTop from './shared/components/ScrollToTop';
import LoaderComponent from './shared/components/Loader';
//#endregion
//#endregion

class App extends Component {
  render() {
    return (
      <ScrollToTop>
        <Suspense fallback={<LoaderComponent/>}>
          <AppRouter/>
        </Suspense>
      </ScrollToTop>
    );
  }
}

export default App;
