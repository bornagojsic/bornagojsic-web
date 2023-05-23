import {FC, memo} from 'react';

import {homePageMeta} from '../data/data';
import PdfPage from '../components/ResumePage';
import Page from '../components/Layout/Page';

const Resume: FC = memo(() => {
  const {title, description} = homePageMeta;
  return <Page description={description} title={title}>
    <PdfPage />;
  </Page>
});

export default Resume;