import React from 'react';
import { Container, Row, Col, Button, CardDeck, Card, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Banner from './Banner';
import WhatsOnNow from './WhatsOnNow';

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

        <WhatsOnNow schedByRoom={props.schedByRoom} roomnames={props.roomnames} />

        <br />

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