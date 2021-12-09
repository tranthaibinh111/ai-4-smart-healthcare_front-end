import AOS from 'aos';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/index';
import AboutPage from './pages/about';
import ServicePage from './pages/service';
import ServiceDetails from './templates/service-details';
import BlogPage from './pages/blog';
import BlogDetailsPage from './templates/blog-details';
import BlogCategory from './templates/blog-category';
import BlogTag from './templates/blog-tag';
import BlogDate from './templates/blog-date';
import BlogAuthor from './templates/blog-author';
import ContactPage from './pages/contact';
import NavScrollTop from './components/nav-scroll-top';

const App = () => {
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
    <Router>
      <NavScrollTop>
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL + '/'}`}
            exact
            component={HomePage}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/about'}`}
            component={AboutPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/service'}`}
            component={ServicePage}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/service-details/:id'
              }`}
            component={ServiceDetails}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/blog'}`}
            component={BlogPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/category/:slug'}`}
            component={BlogCategory}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/tag/:slug'}`}
            component={BlogTag}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/date/:date'}`}
            component={BlogDate}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/author/:author'}`}
            component={BlogAuthor}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/blog-details/:id'}`}
            component={BlogDetailsPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/contact'}`}
            component={ContactPage}
          />
        </Switch>
      </NavScrollTop>
    </Router>
  );
};

export default App;
