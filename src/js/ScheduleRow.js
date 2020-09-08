import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ScheduleRow = (props) => {

  // We will output a new row of dates (and room names) if the day of the current row
  // is not the same as the day of the previous row.

  const today = props.row.when.toDateString();
  const lastDay = props.lastTimestamp.toDateString();

  const classCells = props.roomnames.map( roomname => {
    const item = props.row.classes.find( x => x.room === roomname );
    return (
      item
      ?
        <Col key={`class-${props.row.when.valueOf}-${roomname}`}
          xs={12} md={2}
          className="border-left bg-light text-dark" as={Link} to={'classes/' + item.slug}
        >
        {item.title}
        </Col>
      :
        <Col key={`class-${props.row.when.valueOf}-${roomname}`}
          xs={12} md={2}
          className="border-left bg-light text-dark"
        >
        {' '}
        </Col>
    )
  });

  return (
    <>
      { today !== lastDay
        ?
          <>
            <Row xs={1}>
              <Col className="bg-drachenwald text-gold text-center">
                <b>{today}</b>
              </Col>
            </Row>
            <Row className="d-none d-md-flex text-center">
              <Col xs={6} md={1} className="bg-drachenwald text-gold">Event&nbsp;time ({props.eventTimezone.shortname})</Col>
              <Col xs={6} md={1} className="bg-drachenwald text-gold">Your&nbsp;time ({props.shortTimezone})</Col>
              <Col xs={12} md={2} className="bg-drachenwald text-gold">Room 1</Col>
              <Col xs={12} md={2} className="bg-drachenwald text-gold">Room 2</Col>
              <Col xs={12} md={2} className="bg-drachenwald text-gold">Room 3</Col>
              <Col xs={12} md={2} className="bg-drachenwald text-gold">Room 4</Col>
              <Col xs={12} md={2} className="bg-drachenwald text-gold">Room 5</Col>
            </Row>
          </>
        :
          null
      }
      <Row>
        <Col xs={6} md={1} className="bg-drachenwald text-gold text-center">
          { props.row.when.toLocaleTimeString( 'en-GB', { timeZone: props.eventTimezone.shortname, hour: '2-digit', minute: '2-digit' }) }
          <span className="d-inline d-md-none"> {props.eventTimezone.nickname}</span>
        </Col>
        <Col xs={6} md={1} className="bg-drachenwald text-gold text-center">
          { props.row.when.toLocaleTimeString( 'en-GB', { hour: '2-digit', minute: '2-digit' }) }
          <span className="d-inline d-md-none"> {props.timezone}</span>
        </Col>

        {classCells}
      </Row>
    </>
  );
}

export default ScheduleRow;