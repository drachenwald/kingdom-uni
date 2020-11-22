import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

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