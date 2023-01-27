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
              Join us for a weekend of online classes from Drachenwald!<br />
              <strong>27-29 January 2023</strong>
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
                <Card.Title>Schedule</Card.Title>
                <Card.Text>
                  See the programme of classes and workshops.
                </Card.Text>
                <LinkContainer to="/schedule"><Button variant="primary"><b>See the schedule</b></Button></LinkContainer>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={register} />
              <Card.Body>
                <Card.Title>Registration</Card.Title>
                <Card.Text>
                  If you haven't preregistered, email the University Chancellor to get access.
                </Card.Text>
                <Button variant="primary" href="mailto:university@drachenwald.sca.org"><b>Email the Chancellor</b></Button>
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

        <br />

        <Row>
          <Col xs={0} sm={1} xl={2}>

          </Col>

          <Col>
            <Card body>
              <div class="text-center">
                <h3>Feast from the Drachenwald Cookbook</h3>
                <p>
                  Saturday will end with a do-it-yourself period feast
                  with recipes taken from the Drachenwald 30th Year Cookbook
                </p>
                <LinkContainer to="/classes/magdelena-grace-vane/2nd-breakfast-a-feast-for-online-university"><Button variant="primary" className="mx-2"><b>Feast info</b></Button></LinkContainer>
                <Button variant="primary" href="https://www.mijnbestseller.nl/site/?r=userwebsite/index&id=Drachenwald-cookbook/bookdetails/302538" className="mx-2"><b>Buy the cookbook</b></Button>
              </div>
            </Card>
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
                <li>Caitriona  of the Ravens</li>
                <li>THL Maria Harsick</li>
                <li>Lady Swanhilde von Baerenau</li>
                <li>Magnifica Magdelena Grace Vane</li>
                <li>THL Tamara Samuilova</li>
                <li>Viscount Yannick of Normandy, OP</li>
                <li>Maestra Ellisif Gydasdottir</li>
                <li>Noble Henric van den Casteele</li>
                <li>Lady Alfhild de Foxley</li>
                <li>Lady Anneleyn Cornelisse</li>
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
