import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import WhatsOnNowRoom from './WhatsOnNowRoom';

const WhatsOnNow = (props) => {

  const [ now, setNow ] = useState( new Date() );

  useEffect(() => {
    const interval = setInterval(() => {
      setNow( new Date() );
    }, 60000);
    return () => clearInterval(interval);
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
          <WhatsOnNowRoom room="Cambridge" schedByRoom={props.schedByRoom} now={now} />
        </Col>
        <Col xs={12} md={3}>
          <WhatsOnNowRoom room="Leiden" schedByRoom={props.schedByRoom} now={now} />
        </Col>
        <Col xs={12} md={3}>
          <WhatsOnNowRoom room="Bologna" schedByRoom={props.schedByRoom} now={now} />
        </Col>
        <Col xs={12} md={3}>
          <WhatsOnNowRoom room="Al-Azhar" schedByRoom={props.schedByRoom} now={now} />
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={3}>
          <WhatsOnNowRoom room="Sorbonne" schedByRoom={props.schedByRoom} now={now} />
        </Col>
        <Col xs={12} md={3}>
          <WhatsOnNowRoom room="Urbino" schedByRoom={props.schedByRoom} now={now} />
        </Col>
        <Col xs={12} md={3}>
          <WhatsOnNowRoom room="Tartu" schedByRoom={props.schedByRoom} now={now} />
        </Col>
        <Col xs={12} md={3}>
          <WhatsOnNowRoom room="Oxford" schedByRoom={props.schedByRoom} now={now} />
        </Col>
      </Row>
      
    </>
  );

}

export default WhatsOnNow;