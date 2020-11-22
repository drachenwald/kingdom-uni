import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

import Banner from './Banner';

const NotFound = (props) => {

  const location = useLocation();

  return (
    <>
      <Banner
        headline="Page not found"
      />
      <Container>
        <p>
          There's no page at {location.pathname}
        </p>

        <LinkContainer to="/"><Button variant="primary"><b>Go to the home page</b></Button></LinkContainer>

      </Container>
    </>
  );

}

export default NotFound;