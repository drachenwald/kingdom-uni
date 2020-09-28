import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Banner from './Banner';
// eslint-disable-next-line
import ScheduleRow from './ScheduleRow';

const Schedule = (props) => {

  const [ now, setNow ] = useState( new Date() );

  useEffect(() => {
    const interval = setInterval(() => {
      setNow( new Date() );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Long timezone (e.g. Europe/Dublin)

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <>
      <Banner
        headline="Schedule"
      />

      <Container>

        <Row>
          <Col></Col>
          <Col xs="auto" className="bg-drachenwald text-gold text-center">
            It is now<br />
            { now.toLocaleTimeString( 'en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) }
            {' '}{timezone}
            <br />
            { now.toLocaleTimeString( 'en-GB', { timeZone: props.eventTimezone.shortname, hour: '2-digit', minute: '2-digit', second: '2-digit' }) }
            {' '}{props.eventTimezone.nickname}
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col><br /></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs="auto">
            <h3>Coming soon. Watch this space...</h3>
          </Col>
          <Col></Col>
        </Row>

        

      </Container>
      
    </>
  );

  /*

  const shortTZ = () => {
    // Short timezone (e.g. GMT) from https://gist.github.com/redoPop/3915761
  
    const dateObject = new Date();
    const dateString = dateObject + "";
    let shortTimezone = (
      // Works for the majority of modern browsers
      dateString.match(/\(([^)]+)\)$/) ||
      // IE outputs date strings in a different format:
      dateString.match(/([A-Z]+) [\d]{4}$/)
    );
  
    if (shortTimezone) {
      // Old Firefox uses the long timezone name (e.g., "Central
      // Daylight Time" instead of "CDT")
      shortTimezone = shortTimezone[1].match(/[A-Z]/g).join("");
    }
  
    return shortTimezone;
  
  }

  const shortTimezone = shortTZ();

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

  */

}

export default Schedule;