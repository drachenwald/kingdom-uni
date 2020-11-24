import React from 'react';
import { Container, Spinner, Row, Col } from 'react-bootstrap';

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

      </Container>
      
    </>
  );


}

export default Schedule;