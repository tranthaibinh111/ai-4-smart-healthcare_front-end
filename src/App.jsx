// #region React
import React, { useEffect, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// #endregion

// #region Package (third-party)
// AOS
import AOS from 'aos';
// Redux
import { useSelector } from 'react-redux';
// Helmet
import { HelmetData } from 'react-helmet-async';
// #endregion

// #region AI 4 Smart Healthcare
// routes
import routes from './app-routing';

// #region Components
import { LoaderSpinner, NavScrollTop, ScrollToTop, SEO } from './components';
// #endregion
// #endregion

const HeaderContainer = React.lazy(() => import('./layouts/header.container'));
const FooterContainer = React.lazy(() => import('./layouts/footer.container'));
const helmetData = new HelmetData({});

const App = () => {
  // #region Parameters
  // Redux
  const title = useSelector((state) => state.layout.title);
  const isHome = useSelector((state) => state.layout.isHome);
  // #endregion

  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      once: true,
      easing: 'ease',
    });
    AOS.refresh();
  }, []);

  return (
    <Suspense fallback={<LoaderSpinner />}>
      <NavScrollTop>
        <SEO helmetData={helmetData} title={title} />
        <div className={`wrapper ${isHome ? 'home-default-wrapper' : ''}`}>
          <HeaderContainer />
          <div className='main-content site-wrapper-reveal'>
            <Suspense fallback={<LoaderSpinner />}>
              <Switch>
                {routes
                  .filter((route) => route.component)
                  .map((item, idx) => (
                    <Route
                      key={idx}
                      exact={item.exact}
                      path={item.path}
                      name={item.name}
                      render={(props) => <item.component {...props} routes={item.routes} />}
                    />
                  ))}
                {routes
                  .filter((route) => route.redirect)
                  .map((item, idx) => (
                    <Route key={idx} exact={item.exact} path={item.path} name={item.name}>
                      <Redirect to={item.redirect} />
                    </Route>
                  ))}
              </Switch>
            </Suspense>
            <ScrollToTop />
          </div>
          <FooterContainer />
        </div>
      </NavScrollTop>
    </Suspense>
  );
};

export default App;
