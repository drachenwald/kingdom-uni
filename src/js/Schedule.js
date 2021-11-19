import React from 'react';
import { Container, Spinner, Row, Col, Alert } from 'react-bootstrap';

import Banner from './Banner';
import ScheduleRow from './ScheduleRow';

const Schedule = (props) => {

  if ( !Array.isArray(props.schedule) || !props.schedule.length ) {
    return (
      <>
        <Banner
          headline="Loading..."
        />
        <Container>
          <Spinner animation="border" />
        </Container>
      </>
    );
  }

  // Long timezone (e.g. Europe/Dublin)

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const shortTimezone = 'Your time'

  let lastTimestamp = new Date(1);

  return (
    <>
      <Banner
        headline="Schedule"
      />

      <Container>

        <Row>
          <Col xs={12} className="text-center">
            Event time is <b>Central European Time</b>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            Your timezone is <b>{timezone}</b>
          </Col>
        </Row>

        {
          props.schedule.map( ( row, i ) => {

            const outputRow = <ScheduleRow
                                key={i}
                                row={row}
                                index={i}
                                lastTimestamp={lastTimestamp}
                                timezone={timezone}
                                shortTimezone={shortTimezone}
                                eventTimezone={props.eventTimezone}
                                roomnames={props.roomnames}
                              />;

            lastTimestamp = row.when;

            return outputRow;

          })
        }
        <Row>
          <Col xs={0} sm={1} xl={2}>

          </Col>

          <Col>
            <br />  <Alert variant="secondary">
          <h3>Class details</h3>
          <ul>
          <li>If you would like more information about individual classes, please follow the links to the class descriptions, where handouts and videos will be available if provided to the event staff beforehand. </li>
          <li>Teachers, if you need to change information about your class, or provide a handout, please email the university chancellor on <a href="mailto:dwkuchancellor@gmail.com">dwkuchancellor@gmail.com</a>.  </li>
          </ul>

        </Alert></Col>

        <Col xs={0} sm={1} xl={2}>

        </Col>
      </Row>

      </Container>

    </>
  );


}

export default Schedule;
