import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

import heraldry from '../images/uni-chancellor-badge.svg';
import drachenwald_arms from '../images/drachenwald-arms.svg';

const Layout = (props) => {
  return (
    <>
      <Navbar expand="lg" bg="drachenwald" variant="dark">
        <Container>
          <Navbar.Brand href="#/">
            <img
              alt=""
              src={heraldry}
              width="100"
              className="d-inline-block align-middle"
            />{' '}
            Kingdom University
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSek2Bwp79IqYuzWxuoclC0ZXn7j8Sxez_T733i00zLnYaFVgQ/viewform" className="mx-2">Register to attend</Nav.Link>
              <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSe1V1eQp2wWw2ivh6UKOOCZRJiJISMZx89w4cdw1y_8z0WZlQ/viewform" className="mx-2">Submit a class</Nav.Link>
              <Nav.Link href="#/schedule" className="mx-2">See the schedule</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      { props.children }

      <br />

      <Navbar expand="lg" bg="drachenwald" variant="dark">
        <Container>
          <Row>
            <Col xs="auto">
              <Navbar.Brand href="https://drachenwald.sca.org/">
                <img
                  alt=""
                  src={drachenwald_arms}
                  width="90"
                  className="d-inline-block align-middle"
                />
              </Navbar.Brand>
            </Col>
            <Col className="align-middle">
              <Navbar.Text className="align-middle">
                <p>
                  &copy; 2020 Drachenwald. This is a subsite of the recognised web site for the Kingdom of Drachenwald in the Society for Creative Anachronism.<br />
                  Copyright on all content and images remains with the creators.
                </p>
                <p>
                  <a href="https://drachenwald.sca.org/">Visit the main Drachenwald website.</a>
                </p>
              </Navbar.Text>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Layout;