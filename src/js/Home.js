import React from 'react';
import { Container, Row, Col, Button, CardDeck, Card, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Banner from './Banner';

import textile from '../images/cards/textile.jpg';
import gaita from '../images/cards/gaita.jpg';
import food from '../images/cards/food.jpg';

const Home = (props) => {

  return (
    <>
      <Banner
        headline="Drachenwald Kingdom University"
        subhead="27-29 November 2020"
      />

      <Container>

        <CardDeck>
          <Card>
            <Card.Img variant="top" src={textile} />
            <Card.Body>
              <Card.Title>Schedule</Card.Title>
              <Card.Text>
                Plus evening sessions in the week leading up to the event.
              </Card.Text>
              <LinkContainer to="/schedule"><Button variant="primary"><b>See the schedule</b></Button></LinkContainer>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={gaita} />
            <Card.Body>
              <Card.Title>Ball and Live Music</Card.Title>
              <Card.Text>
                Mistress Judith will lead us in the dance to LIVE music from Gaita.
              </Card.Text>
              <LinkContainer to="/classes/kingdom-of-drachenwald/ball"><Button variant="primary"><b>More info about the ball</b></Button></LinkContainer>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={food} />
            <Card.Body>
            <Card.Title>Feast</Card.Title>
              <Card.Text>
                Cook along with Amphelise's recipes, then join us over dinner.
              </Card.Text>
              <LinkContainer to="/classes/lady-amphelise-de-wodeham/join-us-for-the-feast"><Button variant="primary"><b>More info about the feast</b></Button></LinkContainer>
            </Card.Body>
          </Card>
        </CardDeck>

        <br />

        <Row>
          <Col xs={0} sm={1} xl={2}>
          </Col>

          <Col>
            <Alert variant="warning">
              <h2>Registration has closed</h2>
              <p>Registration closed on Saturday 21st November. If you registered, you should have an email
                from Sunday 22nd with connection details and other important information.</p>
            </Alert>
            <br />
            <p>
              Greetings Drachenwald and guests from around the Knowne World! 
            </p>
            <p>
              We invite you to attend Drachenwald’s Kingdom University in the Year of the Long Reign. This year due to the plague being visited upon us, we are going virtual - this year classes will be held via Zoom and Discord. We will also have a social space on Discord for the duration of the event. 
              The event itself will be mainly held between Friday 27th and Sunday 29th November. We also hope to take advantage of the situation and intend to have some lead-in classes in the weeks prior. 
            </p>
            <p>
              Come join us for the many classes on interesting subjects, Royal courts, feast, bardic circles, and general merriment and companionship. 
            </p>
            <p>
              We will be running this event on Central Drachenwald time (CET), but the times on the schedule will be linked to your own time zone thanks to the wonderful website team so you know exactly when things are happening.
            </p>
            <p>
              This is an excellent opportunity for you to teach, no matter where you’re from. Anyone can submit a class proposal! We also hope to record as many of the classes as possible during the event, and make them available later. 
            </p>
            <p>
              We’re looking forward to seeing as many of you as possible at University!
            </p>
            <p>
              Guy De Dinan - Event Steward<br />
              Catriona of the Ravens - University Chancellor
            </p>
            <p>
              Please direct any questions to <a href="mailto:university@drachenwald.sca.org">university@drachenwald.sca.org</a>
            </p>
          </Col>

          <Col xs={0} sm={1} xl={2}>
          </Col>
        </Row>

        <Row>
          <Col xs={0} sm={1} xl={2}>
          </Col>

          <Col>
            <br />
            <Alert variant="secondary">
              <h3>Event staff</h3>
              <p>
                TH Lord Guy de Dinan - Event Steward<br />
                Viscountess Caitriona of the Ravens - Kingdom Chancellor
              </p>
            
              <p>
                Web Team:<br />
                TH Lady Marcella di Cavallino<br />
                Lady Yda Van Boulogne<br />
                TH Lady Sela de la Rosa
              </p>

              <p>
                Lady Shirin Duxt Feroz - Queen of Discord<br />
                Viscount Yannick of Normandy - Zoom Tech<br />
                Henric vanden Casteele - Social Media<br />
                Lord Aodhan dha Cheist - Games and Gaming<br />
                Lady Amphelise de Wodeham - Feast cook
              </p>

            </Alert>
          </Col>

          <Col xs={0} sm={1} xl={2}>
          </Col>
        </Row>

      </Container>
    </>
  );

}

export default Home;