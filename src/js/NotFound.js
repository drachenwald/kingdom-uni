import React from 'react';
import { Container, Button } from 'react-bootstrap';
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

        <Button variant="primary" href="#/"><b>Go to the home page</b></Button>

      </Container>
    </>
  );

}

export default NotFound;