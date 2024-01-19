import React from 'react';
import { Container, Row, Col, Button, Alert, Card, CardGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Icon from '@mdi/react';
import { mdiYoutube } from '@mdi/js';

import Banner from './Banner';
import WhatsOnNow from './WhatsOnNow';

import register from '../images/cards/register.jpg';
import goldwork from '../images/cards/goldwork.jpg';
import food from '../images/cards/sublety.jpg';

const Home = (props) => {

  const firstDay = new Date(2024,0,19);
  const today = new Date();

  return (
    <>
      <Banner
        headline="Drachenwald Kingdom University "
        subhead="Online – 26-28 January 2024"
      />

      <Container>

        { today < firstDay
          ?
            <p className="text-center">
              Join us for a weekend of online classes from Drachenwald!<br />
              <strong>26-28 January 2024</strong>
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
                <Button variant="primary" href="https://fienta.com/kingdom-university-online"><b>Register</b></Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={register} />
              <Card.Body>
                <Card.Title>Class Schedule</Card.Title>
                <Card.Text>
               &nbsp;
                </Card.Text>
                <LinkContainer to="/Schedule"><Button variant="primary"><b>View schedule</b></Button></LinkContainer>
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
              for Kingdom University decided to turn the event into an online event and offer classes over Zoom. 
              It worked! People enjoyed themselves. It was repeated in 2021, 2022 and 2023.
              </p>

             <p>
             If you have any queries or questions please contact the Deputy University Chancellor
             at <a href="mailto:kuonline-deputy@drachenwald.sca.org">kuonline-deputy@drachenwald.sca.org</a>.
             </p>

               <p><a href="https://discord.gg/ytsq2Bs3B8">Join us on discord</a> for discussion and handout links.</p>
               <p>Join us at the star feast on Saturday! <a href="https://bit.ly/KUonline2024-feast">View recipes.</a> </p>
          </Col>

          <Col xs={0} sm={1} xl={2}>

          </Col>
        </Row>

        <br />

        


        <Row>
          <Col xs={0} sm={1} xl={2}>

          </Col>

          <Col>
            <br />
            <Alert variant="secondary">
              <h3>Event staff</h3>
              <ul>
                <li>THL Alfhild de Foxley</li>
                <li>Viscount Yannick of Normandy</li>
                <li>Magnifica Magdelena Grace Vane</li>
                <li>Magistra Ysabella-Maria de San Lazaro</li>
                <li>Magistra Maria Harsick</li>
                <li>Captain Wolfram Burkhardt von Falkenstein</li>
                <li>Noble Henric van den Casteele</li>
                <li>Viscountess Caitriona of the Ravens, OP</li>
                <li>Lady Kytte of the lake</li>
                
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
