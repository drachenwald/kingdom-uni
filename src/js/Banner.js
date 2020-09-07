import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Banner = (props) => {

  return (
    <>
      <div className="banner">
        <Row className="h-100">
          <Col sm className="my-auto">
            <Container className="py-5">
              <h1>{props.headline}</h1>
              {
                props.subhead
                ?
                  <h4>
                    { props.subhead }
                  </h4>
                :
                  null
              }
              {
                props.button_label
                ?
                  <>
                    <br />
                    <Button variant="outline-light" href={props.button_url}>{props.button_label}</Button>
                  </>
                :
                  null
              }
              
            </Container>
            
          </Col>
        </Row>
      </div>
      <br />
    </>
  );

}

export default Banner;