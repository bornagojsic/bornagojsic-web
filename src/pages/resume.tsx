import {FC, memo} from 'react';
import Page from '../components/Layout/Page';
import PdfPage from '../components/ResumePage';
import {homePageMeta} from '../data/data';

const Resume: FC = memo(() => {
  const {title, description} = homePageMeta;
  return <Page description={description} title={title}>
    <PdfPage/>;
  </Page>
});

export default Resume;