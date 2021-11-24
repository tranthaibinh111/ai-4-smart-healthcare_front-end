//#region React
import { ReactElement } from 'react';
//#endregion


const LoaderComponent = (): ReactElement => {
  return (
    <div className="loader-bg">
      <div className="loader-track">
        <div className="loader-fill" />
      </div>
    </div>
  );
};

export default LoaderComponent;
