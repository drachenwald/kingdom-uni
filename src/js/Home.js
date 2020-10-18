import React from 'react';
import { Container, Row, Col, Button, CardDeck, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Banner from './Banner';

import textile from '../images/cards/textile.jpg';
import tapestry from '../images/cards/tapestry.jpg';
import food from '../images/cards/food.jpg';

const Home = (props) => {

  return (
    <>
      <Banner
        headline="Drachenwald Kingdom University"
        subhead="27-29 November 2020."
        button_label="Register to attend..."
        button_url="https://docs.google.com/forms/d/e/1FAIpQLSek2Bwp79IqYuzWxuoclC0ZXn7j8Sxez_T733i00zLnYaFVgQ/viewform"
      />

      <Container>

        <CardDeck>
          <Card>
            <Card.Img variant="top" src={textile} />
            <Card.Body>
              <Card.Title>Teaching</Card.Title>
              <Card.Text>
                Would you like to teach your skills? We would love to hear from you.
              </Card.Text>
              <Button variant="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSe1V1eQp2wWw2ivh6UKOOCZRJiJISMZx89w4cdw1y_8z0WZlQ/viewform"><b>Submit a class</b></Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={tapestry} />
            <Card.Body>
              <Card.Title>Learning</Card.Title>
              <Card.Text>
                We will have classes throughout the weekend, as well as in the days
                leading up to the event.
              </Card.Text>
              <Button variant="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSek2Bwp79IqYuzWxuoclC0ZXn7j8Sxez_T733i00zLnYaFVgQ/viewform"><b>Register to attend</b></Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={food} />
            <Card.Body>
              <Card.Title>Class list</Card.Title>
              <Card.Text>
                A full weekend of classes, plus extra events throughout the week.
              </Card.Text>
              <LinkContainer to="/classlist"><Button variant="primary"><b>See the class list</b></Button></LinkContainer>
            </Card.Body>
          </Card>
        </CardDeck>

        <br />

        <Row>
          <Col xs={0} sm={1} xl={2}>
          </Col>

          <Col>
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

      </Container>
    </>
  );

}

export default Home;