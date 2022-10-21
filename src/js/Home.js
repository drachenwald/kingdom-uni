import React from 'react';
import { Container, Row, Col, Button, Alert, Card, CardGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
//import Icon from '@mdi/react';
//import { mdiYoutube } from '@mdi/js';

import Banner from './Banner';
import WhatsOnNow from './WhatsOnNow';

import register from '../images/cards/register.jpg';
import goldwork from '../images/cards/goldwork.jpg';
import food from '../images/cards/sublety.jpg';

const Home = (props) => {

  const firstDay = new Date(2021,10,19);
  const today = new Date();

  return (
    <>
      <Banner
        headline="Drachenwald Kingdom University"
        subhead="Online – 27-29 January 2023"
      />

      <Container>

        { today < firstDay
          ?
            null
          :
            (
              <WhatsOnNow schedByRoom={props.schedByRoom} />
            )
        }

        { <CardGroup>
            <Card>
              <Card.Img variant="top" src={goldwork} />
              <Card.Body>
                <Card.Title>Schedule</Card.Title>
                <Card.Text>
                  View all classes running over the weekend.
                </Card.Text>
                <LinkContainer to="/schedule"><Button variant="primary"><b>Read more...</b></Button></LinkContainer>
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
                <LinkContainer to="/housekeeping"><Button variant="primary"><b>Read about conduct</b></Button></LinkContainer>
              </Card.Body>
            </Card>
          </CardGroup>
        }

        <br />
        <br />
        <Row>
          <Col xs={0} sm={1} xl={2}>

          </Col>

          <Col>
             <h3>Kingdom University is now closed</h3>
             <p>Thankyou to everyone - the teachers, the attendees and the event team for making this event such a special one. </p>
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
              <ul>
                <li> Chancellor: Caitrona  of the Ravens</li>
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
