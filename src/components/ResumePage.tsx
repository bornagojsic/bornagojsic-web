import {FC, memo} from 'react';

const ResumePage : FC = memo(() => {
  return (
    <embed height="800px" src="/resume.pdf" type="application/pdf" width="100%" />
  );
});

export default ResumePage;