import React from 'react';
import { Container, Row, Col, Button, CardDeck, Card, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
//import Icon from '@mdi/react';
//import { mdiYoutube } from '@mdi/js';

import Banner from './Banner';
// import WhatsOnNow from './WhatsOnNow';

import register from '../images/cards/register.jpg';
import goldwork from '../images/cards/goldwork.jpg';
import food from '../images/cards/sublety.jpg';

const Home = (props) => {

  return (
    <>
      <Banner
        headline="Drachenwald Kingdom University"
        subhead="19-21 November 2021"
      />

      <Container>

        <CardDeck>
          <Card>
            <Card.Img variant="top" src={goldwork} />
            <Card.Body>
              <Card.Title>Call for Classes</Card.Title>
              <Card.Text>
                We're looking for both live and recorded classes.
              </Card.Text>
              <LinkContainer to="/callforclasses"><Button variant="primary"><b>Read more...</b></Button></LinkContainer>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={register} />
            <Card.Body>
              <Card.Title>Registration</Card.Title>
              <Card.Text>
                Sign up to attend. Submit a class if you want to teach. 
              </Card.Text>
              <Button variant="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSeZj4XFu_C8-zc5ejLYZL-kUQaGz4UqOyrR-_bBU5WF2XcA0g/viewform"><b>Register here</b></Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={food} />
            <Card.Body>
            <Card.Title>Housekeeping</Card.Title>
              <Card.Text>
               Guidelines for online conduct of teachers, assistants and attendees
              </Card.Text>
              //<LinkContainer to="/classes/lady-amphelise-de-wodeham/join-us-for-the-feast"><Button variant="primary"><b>More info about the feast</b></Button></LinkContainer>
              <LinkContainer to="/housekeeping"><Button variant="primary"><b>More about conduct</b></Button></LinkContainer>
            </Card.Body>
          </Card>
        </CardDeck>

        <br />
        <br />

      

        <Row>
          <Col xs={0} sm={1} xl={2}>
          </Col>

          <Col>
            <br />
            <Alert variant="secondary">
              <h3>Event staff</h3>
              <ul>
              <li>Event Steward: Elen  Benet</li>
               <li> Chancellor: Caitrona  of the Ravens</li>
              <li> Food and Feast: Amphelise  de Wodeham</li>
               <li> Website: Maria  Harsick</li>
                <li> Social Media: Henric  van den Casteele</li>
               <li> Technology Maestro: Yannick  of Normandy</li>
              </ul>

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
