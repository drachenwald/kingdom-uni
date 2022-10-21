import React from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
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


<br />
            <Alert variant="secondary">

              <p>Dear all, <br />
                we would like to invite everyone to attend another exciting digital Drachenwald Kingdom University event, 19-21 November 2021. The classes will be a combination of live and recorded classes held on Zoom channels and using a Discord server for chat and socialising during the event. </p>
              <p>
              </p>
              <p><LinkContainer to="/schedule"><Button variant="primary"><b>View schedule</b></Button></LinkContainer>
              </p>

            </Alert>



            <h2>Housekeeping</h2>
  <p>We are all very excited to be bringing you another event via Zoom and Discord channels. We  want this to be a friendly, fun and respectful event, and ask that you help us deliver the smoothest possible content with the following Housekeeping steps:</p>
<ul>
  <li>Please remember that everyone is a volunteer, and our technical team will be doing their best to resolve technical issues.</li>
  <li>Keep passwords and Zoom links private – if someone approaches you saying they have lost their email or password, please ask them to contact us directly.</li>
<li>If a Zoom channel is disrupted, please leave the session and wait for alternate links – whilst we will endeavour to replace links, it might not always be possible to restart a session. Please bear with us if this happens while we restore that stream. Messages will be posted on Discord, and where possible, facebook.</li>
  <li>Period clothing is recommended, but is not compulsory, particularly if you are new, or needing to go to/from mundane activities due to time zone differences.</li>
  <li>Please be prompt in arriving at the start of a session to pick up on teacher preferences, such as how to ask questions. Also, please remember to leave promptly at the end of each session. </li>
  <li>If a session is over-running, please be patient. The support team will be encouraging a prompt end to the session.</li>
  <li>Some sessions may be recorded. If you do not wish to be seen on the recording, we recommend that you switch off your video feed and mic. </li>
  <li>If there are bandwidth issues, please turn off your video; it helps reduce congestion and lag.</li>
  <li>Please set your mic to mute until asked to un-mute for questions. Unintentional and background sounds will cause the view window to jump to your camera.</li>
  <li>Some teachers will prefer that you ask questions in the chat. This is a good way to jot down that question before you forget it in time for the Q&amp;A.</li>
  <li>If you have additional questions, or were not called during the session, there will be a Discord channel for  extra questions. Please add your additional questions to that channel, and keep the discussion going! </li>
</ul>
<h2>Code of conduct</h2>
<p>We observe the SCA Code of Conduct and expect all participants to:</p>
<ul><li>act in accordance with the chivalric virtues of honor and service;</li>
<li>value and respect the worth and dignity of all individuals;</li>
<li>practice inclusiveness and respect pluralism and diversity;</li>
<li>promote a safe and respectful environment for all SCA events;</li>
<li>act with transparency, fairness, integrity and honesty;</li>
<li>be a responsible steward of SCA resources; and,</li>
<li>be committed to maintaining the trust of its members and participants.</li>
</ul>
	<p>Breaches and disruptive behaviour will see offenders removed and the incident reported. We really hope this won’t be necessary.</p>
  <p>We hope Kingdom University  offers the highest hospitality this fair Kingdom can provide online. So, please, maintain honour, respect and decorum and relax into a long weekend of learning and enlightenment!</p>
<p>All the best from your organising team!</p>

            <p>
              <LinkContainer to="/schedule"><Button variant="primary"><b>View schedule</b></Button></LinkContainer>
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
