import React from 'react';
import { Container, Row, Col, Button, Card, CardGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Banner from './Banner';
import WhatsOnNow from './WhatsOnNow';

import register from '../images/cards/register.jpg';
import goldwork from '../images/cards/goldwork.jpg';
import food from '../images/cards/sublety.jpg';

const Home = (props) => {

  const firstDay = new Date(2026,1,6);
  const today = new Date();

  return (
    <>
      <Banner
        headline="Drachenwald Kingdom University "
        subhead="Online – 6-8 February 2026"
      />

      <Container>

        { today < firstDay
          ?
            <p className="text-center">
              Join us for a weekend of online classes from Drachenwald!<br />
              <strong>6-8 February 2026</strong>
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
                <Card.Title>Registration</Card.Title>
                <Card.Text>
                  Sign up to attend Kingdom University online.
                </Card.Text>
                <Button variant="primary" href="https://fienta.com/kingdom-university-online-132118"><b>Register to attend</b></Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={register} />
              <Card.Body>
                <Card.Title>Teach</Card.Title>
                <Card.Text>
                  Apply to present a class or activity at the event.
                </Card.Text>
                <Button variant="primary" href="https://docs.google.com/forms/d/e/1FAIpQLScrnJYTwTwlMP_KMncCCMdRKEZGGY87WtpA48WFad6PbJig3Q/viewform"><b>Propose a class</b></Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={food} />
              <Card.Body>
                <Card.Title>Housekeeping</Card.Title>
                <Card.Text>
                  Guidelines for online conduct of teachers, assistants and attendees.
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
              for Kingdom University decided to turn the event into an online event and offer classes over Zoom. 
              It worked! People enjoyed themselves. It has been repeated annually since.
              </p>

             <p>
             If you have any queries or questions please contact the Deputy University Chancellor
             at <a href="mailto:kuonline-deputy@drachenwald.sca.org">kuonline-deputy@drachenwald.sca.org</a>.
             </p>

               <p><a href="https://discord.gg/ytsq2Bs3B8">Join us on discord</a> for discussion and handout links.</p>
          </Col>

          <Col xs={0} sm={1} xl={2}>

          </Col>
        </Row>

        <br />


      </Container>
    </>
  );

}

export default Home;
