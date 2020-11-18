import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Banner from './Banner';

const Housekeeping = (props) => {

  return (
    <>
      <Banner
        headline="Housekeeping and Code of Conduct"
      />
      <Container>

        <Row>
          <Col xs={0} md={1} lg={2}>
            
          </Col>

          <Col>
            <p>Dear all,<br />
              we are all very excited to be bringing together nearly 500 attendees across three days of programming on eight core Zoom channels, as well as the Discord channels.</p>
            <p>There are about 70 or so teachers, as well as volunteers to help with technical support. Please note that everyone is a volunteer, and our technical team will be doing their best to resolve technical issues.</p>
            <p>We also want this to be a friendly, fun and respectful event, and ask that you help us deliver the smoothest possible content with the following Housekeeping steps:</p>
            <p>Keep passwords and Zoom links private – if someone approaches you saying they have lost their email or password, please ask them to contact us directly.</p>
            <p>Should a Zoom channel be disrupted, please leave the session and wait for alternate links – whilst we will endeavour to replace links, it might not always be possible to restart a session. Please bear with us if this happens while we restore that stream.</p>
            <p>Period clothing is recommended, but is not compulsory, particularly if you are new, or needing to go to/from mundane activities due to time zone differences.</p>
            <p>Please be prompt in arriving at the start of a session to pick up on teacher preferences – e.g. how to ask questions.</p>
            <p>If a session is over-running, please be patient. The support will be encouraging a prompt end to the session.</p>
            <p>Some sessions will be recorded – Our recommendation if you do not wish to be seen on this, is to switch off your video feed and mic. </p>
            <p>Should there be bandwidth issues, please turn off your video, it helps reduce congestion and lag.</p>
            <p>Please set your mic to mute until asked to un-mute for questions – unintentional and background sounds will cause the view window to jump to your camera.</p>
            <p>Some teachers will prefer that you ask questions in the chat, this is a good way to jot down that question before you forget it in time for the Q&amp;A.</p>
            <p>If you have additional questions, or were not called during the session, there will be a Discord channel for additional questions and it is a good place to add them there. </p>
            <p>We observe the SCA Code of Conduct and expect participants to:</p>

            <ul>
              <li>act in accordance with the chivalric virtues of honor and service;</li>
              <li>value and respect the worth and dignity of all individuals;</li>
              <li>practice inclusiveness and respect pluralism and diversity;</li>
              <li>promote a safe and respectful environment for all SCA events;</li>
              <li>act with transparency, fairness, integrity and honesty;</li>
              <li>be a responsible steward of SCA resources; and,</li>
              <li>be committed to maintaining the trust of its members and participants.</li>
            </ul>

            <p>Breaches and disruptive behaviour will see offenders removed and the incident reported. We really hope this won’t be necessary, and that it offers the highest hospitality this fair Kingdom can provide online. So, please, maintain honour, respect and decorum and relax into a long weekend of learning and enlightenment!</p>
            <p>All the best from your organising team!</p>

            <p>
              <LinkContainer to="/schedule"><Button variant="primary"><b>See the schedule</b></Button></LinkContainer>
            </p>
          </Col>

          <Col xs={0} md={1} lg={2}>
            {' '}
          </Col>
        </Row>

        



      </Container>
    </>
  );

}

export default Housekeeping;