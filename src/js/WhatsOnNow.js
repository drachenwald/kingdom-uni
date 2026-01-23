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
        <Col xs={12} md={4}>
          <WhatsOnNowRoom room="The Mended Drum" schedByRoom={props.schedByRoom} now={now} mutebutton={props.mutebutton} />
        </Col>
        <Col xs={12} md={4}>
          <WhatsOnNowRoom room="Ankh Morpork" schedByRoom={props.schedByRoom} now={now} mutebutton={props.mutebutton} />
        </Col>
        <Col xs={12} md={4}>
          <WhatsOnNowRoom room="Lancre" schedByRoom={props.schedByRoom} now={now} mutebutton={props.mutebutton} />
        </Col>
        <Col xs={12} md={4}>
          <WhatsOnNowRoom room="Klatch" schedByRoom={props.schedByRoom} now={now} mutebutton={props.mutebutton} />
        </Col>
        <Col xs={12} md={4}>
          <WhatsOnNowRoom room="Sto Lat" schedByRoom={props.schedByRoom} now={now} mutebutton={props.mutebutton} />
        </Col>
        <Col xs={12} md={4}>
          <WhatsOnNowRoom room="Genua" schedByRoom={props.schedByRoom} now={now} mutebutton={props.mutebutton} />
        </Col>
        <Col xs={12} md={4}>
          <WhatsOnNowRoom room="Quirm" schedByRoom={props.schedByRoom} now={now} mutebutton={props.mutebutton} />
        </Col>
        <Col xs={12} md={4}>
          <WhatsOnNowRoom room="Unseen University" schedByRoom={props.schedByRoom} now={now} mutebutton={props.mutebutton} />
        </Col>
        <Col xs={12} md={4}>
          <WhatsOnNowRoom room="The Chalk" schedByRoom={props.schedByRoom} now={now} mutebutton={props.mutebutton} />
        </Col>
        <Col xs={0} md={4}>
        </Col>
        <Col xs={12} md={4}>
          <WhatsOnNowRoom room="Sto Helit" schedByRoom={props.schedByRoom} now={now} mutebutton={props.mutebutton} />
        </Col>
        <Col xs={0} md={4}>
        </Col>
      </Row>
      
    </>
  );

}

export default WhatsOnNow;
