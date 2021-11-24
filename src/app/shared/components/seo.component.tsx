//#region React
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
//#endregion

//#region AI 4 smart healthcare
import { Seo } from '../interfaces'
//#endregion

const SeoComponent = ({title}: Seo): ReactElement => {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="Chăm sóc sức khoẻ thông minh với AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
    );
}

export default SeoComponent;
