//#region React
import { ReactElement } from 'react';
import SeoComponent from '../shared/components/seo.component';
//#endregion


const HomePageComponent = (): ReactElement => {
  const title = 'Trang chủ - Chăm sóc sức khoẻ thông minh với AI';

  return (
    <>
      <SeoComponent title={title} />
      <div className="wrapper home-default-wrapper">
      </div>
    </>
  );
}

export default HomePageComponent;
