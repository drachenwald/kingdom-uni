import React from 'react';
import { Container } from 'react-bootstrap';

import Banner from './Banner';

const SubmitClass = (props) => {

  return (
    <>
      <Banner
        headline="Submit a class"
      />
      <Container>
        Submit a class
      </Container>
    </>
  );

}

export default SubmitClass;