import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import heraldry from '../images/uni-chancellor-badge.svg';

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
            <Nav.Link href="#/register" className="mx-2">Register to attend</Nav.Link>
            <Nav.Link href="#/submitclass" className="mx-2">Submit a class</Nav.Link>
            <Nav.Link href="#/schedule" className="mx-2">See the schedule</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    { props.children }

    <br />

    <Navbar expand="lg" bg="drachenwald" variant="dark">
      <Container>
        <Navbar.Text>
          <br />
          <p>
            &copy; 2020 Drachenwald. This is a subsite of the recognised web site for the Kingdom of Drachenwald in the Society for Creative Anachronism.<br />
            Copyright on all content and images remains with the creators.
          </p>
          <p>
            <a href="https://drachenwald.sca.org/">Visit the main Drachenwald website.</a>
          </p>
        </Navbar.Text>
      </Container>
    </Navbar>
    </>
  );
}

export default Layout;