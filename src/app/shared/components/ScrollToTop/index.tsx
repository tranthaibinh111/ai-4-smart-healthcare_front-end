//#region React
import { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
//#endregion


class ScrollToTopComponent extends Component<RouteComponentProps> {
  componentDidUpdate(prevProps: RouteComponentProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTopComponent);
