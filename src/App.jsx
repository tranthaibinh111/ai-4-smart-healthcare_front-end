// #region React
import React, { useEffect, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
// #endregion

// #region Package (third-party)
// AOS
import AOS from 'aos'
// Redux
import { useSelector } from 'react-redux'
// Helmet
import { HelmetData } from 'react-helmet-async'
// #endregion

// #region AI 4 Smart Healthcare
// routes
import appRoutes from './app-routing'

// #region Components
import LoaderSpinnerComponent from './components/loader-spinner'
import NavScrollTop from './components/nav-scroll-top'
import SEO from './components/seo'
import ScrollToTop from './components/scroll-to-top'
// #endregion
// #endregion

const Header = React.lazy(() => import('./layouts/header'))
const Footer = React.lazy(() => import('./layouts/footer'))
const helmetData = new HelmetData({})

const App = () => {
  // #region Parameters
  // Redux
  const title = useSelector((state) => state.layout.title)
  const isHome = useSelector((state) => state.layout.isHome)
  // #endregion

  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      once: true,
      easing: 'ease',
    })
    AOS.refresh()
  }, [])

  return (
    <Suspense fallback={<LoaderSpinnerComponent />}>
      <NavScrollTop>
        <SEO helmetData={helmetData} title={title} />
        <div className={`wrapper ${isHome ? 'home-default-wrapper' : ''}`}>
          <Header />
          <div className='main-content site-wrapper-reveal'>
            <Suspense fallback={<LoaderSpinnerComponent />}>
              <Switch>
                {appRoutes
                  .filter((route) => route.component)
                  .map((route, idx) => (
                    <Route
                      key={idx}
                      exact={route.exact}
                      path={route.path}
                      name={route.name}
                      render={(props) => (
                        <route.component {...props} routes={route.routes} />
                      )}
                    />
                  ))}
              </Switch>
            </Suspense>
            <ScrollToTop />
          </div>
          <Footer />
        </div>
      </NavScrollTop>
    </Suspense>
  )
}

export default App
