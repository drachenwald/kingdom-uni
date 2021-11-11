import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Icon from '@mdi/react';
import { mdiAlert } from '@mdi/js';

import heraldry from '../images/uni-chancellor-badge.svg';
import drachenwald_arms from '../images/drachenwald-arms.svg';
import dcbadge from '../images/dcbadge.png';

import Ticker from './Ticker';

const Layout = (props) => {
  return (
    <>
      <Navbar expand="lg" bg="drachenwald" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                alt=""
                src={heraldry}
                width="95"
                className="d-inline-block align-middle"
              />{' '}
              Kingdom University
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse>


            <Nav className="ml-auto">
            <LinkContainer to="/schedule"><Nav.Link className="mx-1">Schedule</Nav.Link></LinkContainer>
              <LinkContainer to="/housekeeping"><Nav.Link className="mx-2">Housekeeping</Nav.Link></LinkContainer>
            </Nav>
            <Nav>
              <Nav.Item>&nbsp;&nbsp;&nbsp;</Nav.Item>
              <Nav.Item className="bg-drachenwald text-gold text-left">
                <div style={{width: '145px', textAlign: 'right'}} >
                  <Ticker {...props} />
                </div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      { props.flashmsg
        ?
          <div className="bg-warning">
            <Container>
              <div className="text-center">
                <Icon path={mdiAlert} title="Alert" />{' '}
                {props.flashmsg}
              </div>
            </Container>
          </div>
        :
          null
      }


      { props.children }

      <br />

      <Navbar expand="lg" bg="drachenwald" variant="dark">
        <Container>
          <Row>
            <Col xs="auto">
              <Navbar.Brand href="https://drachenwald.sca.org/">
                <img
                  alt="Drachenwald logo"
                  src={drachenwald_arms}
                  width="90"
                  className="d-inline-block align-middle"
                />
              </Navbar.Brand>
            </Col>
            <Col >
              <Navbar.Text className="align-middle">
                <p>
                  &copy; 2020 Drachenwald. This is a subsite of the recognised web site for the Kingdom of Drachenwald in the Society for Creative Anachronism.<br />
                  Copyright on all content and images remains with the creators.
                </p>
                <p>
                  <a href="https://drachenwald.sca.org/">drachenwald.sca.org</a>
                </p>
              </Navbar.Text>
            </Col>
            <Col xs="auto" className="align-right">
            <img
                  alt=""
                  src={dcbadge}
                  width="100"
                  className="d-inline-block align-middle"
                />
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Layout;
