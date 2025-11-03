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
          <WhatsOnNowRoom room="The Mended Drum" schedByRoom={props.schedByRoom} now={now} mutebutton={props.mutebutton} />
        </Col>
        <Col xs={12} md={3}>
          <WhatsOnNowRoom room="Ankh Morpork" schedByRoom={props.schedByRoom} now={now} mutebutton={props.mutebutton} />
        </Col>
        <Col xs={12} md={3}>
          <WhatsOnNowRoom room="Lancre" schedByRoom={props.schedByRoom} now={now} mutebutton={props.mutebutton} />
        </Col>
        <Col xs={12} md={3}>
          <WhatsOnNowRoom room="Klatch" schedByRoom={props.schedByRoom} now={now} mutebutton={props.mutebutton} />
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
