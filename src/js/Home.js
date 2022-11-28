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

  const firstDay = new Date(2023,0,27);
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
            <p className="text-center">
              Join us for a weekend of online classes from Drachenwald!
            </p>
          :
            (
              <WhatsOnNow schedByRoom={props.schedByRoom} />
            )
        }

        <br />

        { <CardGroup>
            <Card>
              <Card.Img variant="top" src={goldwork} />
              <Card.Body>
                <Card.Title>Offer to teach</Card.Title>
                <Card.Text>
                  Would you like to give a class, lecture or workshop?
                </Card.Text>
                <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdTQ8IJvc8gRloUvW4FASCDgl2LlSJNBHQx8OhXM1KlWxg9gw/viewform" variant="primary"><b>Fill in the form</b></Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={register} />
              <Card.Body>
                <Card.Title>Registration</Card.Title>
                <Card.Text>
                  Registration will open shortly.
                </Card.Text>
                <Button variant="primary" disabled><b>Coming soon</b></Button>
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
             <h3>What’s Kingdom University online all about?</h3>
             
             <p>Due to Covid 19 the ensuing pandemic and the cancellation of events in 2020 the event staff
              for Kingdom University decided to tun the event into an online event and offer classes over Zoom.
              It worked! People enjoyed themselves. It was repeated in 2021 because we were still not having
              in person events much.</p>
             
             <p>In 2022 Kingdom University was able to be held and was enjoyed by all, though those who couldn’t
              make it asked about hybrid or an online event. I after consultation with some hobbits decided that
              the people of Drachenwald deserve Second University. So we are bringing you KU Online 2023. </p>

             <p>
             If you have any queries or questions plrase contact the University Chancellor
             at <a href="mailto:university@drachenwald.sca.org">university@drachenwald.sca.org</a>.
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
