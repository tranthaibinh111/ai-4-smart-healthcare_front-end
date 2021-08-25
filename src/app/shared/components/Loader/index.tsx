//#region React
import { Component } from 'react';
//#endregion


class LoaderComponent extends Component {
  render() {
    return (
        <div className="loader-bg">
            <div className="loader-track">
                <div className="loader-fill"/>
            </div>
        </div>
    );
  }
};

export default LoaderComponent;
