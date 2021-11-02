import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import WhatsOnNowRoom from './WhatsOnNowRoom';

const WhatsOnNow = (props) => {

  const [ now, setNow ] = useState( new Date() );

  useEffect(() => {
    const whatsOnInterval = setInterval(() => {
      setNow( new Date() );
    }, 60000);
    return () => clearInterval(whatsOnInterval);
  }, []);

  return (
    <>
      <Row>
        <Col className="text-center">
          <h2>What's on now</h2>
          <br />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={3}>
          <WhatsOnNowRoom room="LITTLE BLUE" schedByRoom={props.schedByRoom} now={now} />
        </Col>
        <Col xs={12} md={3}>
          <WhatsOnNowRoom room="EMPEROR" schedByRoom={props.schedByRoom} now={now} />
        </Col>
        <Col xs={12} md={3}>
          <WhatsOnNowRoom room="ROCKHOPPER" schedByRoom={props.schedByRoom} now={now} />
        </Col>
        <Col xs={12} md={3}>
          <WhatsOnNowRoom room="ADELIE" schedByRoom={props.schedByRoom} now={now} />
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
        </Col>
      </Row>

      
    </>
  );

}

export default WhatsOnNow;