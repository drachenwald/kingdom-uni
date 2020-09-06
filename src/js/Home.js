import React from 'react';
import { Container, Row, Col, Button, CardDeck, Card } from 'react-bootstrap';

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
        button_label="See the schedule..."
        button_url="#/schedule"
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
              <Button variant="primary" href="#/submitclass"><b>Submit a class</b></Button>
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
              <Button variant="primary"><b>Register to attend</b></Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={food} />
            <Card.Body>
              <Card.Title>Meeting</Card.Title>
              <Card.Text>
                It might be virtual, but that doesn't stop us having a feast.
              </Card.Text>
              <Button variant="primary"><b>Drachenwald website</b></Button>
            </Card.Body>
          </Card>
        </CardDeck>

        <br />

        <Row>
          <Col xs={0} sm={1} xl={2}>
          </Col>

          <Col>
            <p>
            Greetings Drachenwald and guests from around the Knowne World,
            </p>
            <p>
              We  invite you to attend Drachenwald’s Kingdom University in the Year of the Long Reign. This year due to the plague being visited upon us, we are going Virtual.  What this means for the University this year is that classes will be held via online platforms – Zoom and Discord. We will also have a social space on Discord for the event. 
            </p>
            <p>
              The event itself will be mainly held between Friday 27th and Sunday 29th November. Due to nature of this year we are taking advantage and intend to have some lead in classes in the weeks prior. 
            </p>
            <p>
              Come join us for the many classes in different fields (link to class schedule/descriptions), court (link to court times and which courts), feast (link to menu and proposed time), bardic circle (link to???) and general merriment and companionship. 
            </p>
            <p>
              We will be running this event on Central Drachenwald time (CET) to take advantage of the ethereal nature of the event. However the times on the schedule will be linked to your own time zone thanks to the wonderful website team.  (Have I interpreted the timezone alignment wrong?)
            </p>
            <p>
              If you have a class proposal please fill out this form (link to class proposals).
            </p>
            <p>
              We intend to record as many of the classes as possible over the event. 
            </p>
            <p>
              Looking forward to see as many of you as possible at University.
            </p>
            <p>
              Guy (Role)<br />
              Caitriona - University Chancellor<br />
              Yannick (Role)
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