// #region React
import React, { useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// #endregion

// #region Package (third-party)
import AOS from 'aos';
import { useSelector } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// routes
import appRoutes from './app-routing';

// #region Components
import LoadingSpinnerComponent from './components/loading-spinner';
import NavScrollTop from './components/nav-scroll-top';
import Layout from './layouts';
import SEO from './components/seo';
import ScrollToTop from './components/scroll-to-top';
// #endregion
// #endregion

const Header = React.lazy(() => import('./layouts/header/index'));
const Footer = React.lazy(() => import('./layouts/header/index'));

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
    <Suspense fallback={<LoadingSpinnerComponent />}>
      <NavScrollTop>
        <Layout>
          <SEO title={title} />
          <div className={`wrapper ${isHome ? 'home-default-wrapper' : ''}`}>
            <Header />
            <div className="main-content site-wrapper-reveal">
              <Switch>
                {appRoutes.filter((route) => route.component).map((route, idx) => (
                  <Route
                    key={idx}
                    exact={route.exact}
                    path={route.path}
                    name={route.name}
                    render={(props) => <route.component {...props} routes={route.routes} />}
                  />
                ))}

                {/* <Route
                  path={`${`${process.env.PUBLIC_URL}/about`}`}
                  component={AboutPage}
                />
                <Route
                  path={`${`${process.env.PUBLIC_URL}/service`}`}
                  component={ServicePage}
                />
                <Route
                  path={`${`${process.env.PUBLIC_URL}/service-details/:id`}`}
                  component={ServiceDetails}
                />
                <Route
                  path={`${`${process.env.PUBLIC_URL}/blog`}`}
                  component={BlogPage}
                />
                <Route
                  path={`${`${process.env.PUBLIC_URL}/category/:slug`}`}
                  component={BlogCategory}
                />
                <Route
                  path={`${`${process.env.PUBLIC_URL}/tag/:slug`}`}
                  component={BlogTag}
                />
                <Route
                  path={`${`${process.env.PUBLIC_URL}/date/:date`}`}
                  component={BlogDate}
                />
                <Route
                  path={`${`${process.env.PUBLIC_URL}/author/:author`}`}
                  component={BlogAuthor}
                />
                <Route
                  path={`${`${process.env.PUBLIC_URL}/blog-details/:id`}`}
                  component={BlogDetailsPage}
                />
                <Route
                  path={`${`${process.env.PUBLIC_URL}/contact`}`}
                  component={ContactPage}
                /> */}
              </Switch>
            </div>
            <Footer />
            <ScrollToTop />
          </div>
        </Layout>
      </NavScrollTop>
    </Suspense>
  );
};

export default App;
