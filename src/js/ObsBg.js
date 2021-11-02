import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import WhatsOnNow from './WhatsOnNow';

const ObsBg = (props) => {

  return (
    <>
      <Container>
        <Row>
            <Col>
                <h1>
                    <br /><br /><br />
                </h1>
            </Col>
        </Row>

        <WhatsOnNow schedByRoom={props.schedByRoom} mutebutton={true} />

        <Row>
            <Col>
                <h1>
                    <br /><br /><br />
                </h1>
            </Col>
        </Row>
        
      </Container>
    </>
  );

}

export default ObsBg;