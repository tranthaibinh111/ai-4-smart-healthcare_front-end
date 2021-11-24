//#region React
import { ReactElement } from 'react';
import SeoComponent from '../shared/components/seo.component';
//#endregion


const HomePageComponent = (): ReactElement => {
  const _title = 'Trang chủ - Chăm sóc sức khoẻ thông minh với AI';

  return (
    <>
      <SeoComponent title={_title} />
      <h1>Trang chủ</h1>
    </>
  );
}

export default HomePageComponent;
