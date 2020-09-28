import React from 'react';

import Banner from './Banner';
// eslint-disable-next-line
import ScheduleRow from './ScheduleRow';

const Schedule = (props) => {

  return (
    <>
      <Banner
        headline="Schedule"
      />

      <h3 className="text-center">Coming soon. Watch this space...</h3>
      
    </>
  );

  /*

  // Long timezone (e.g. Europe/Dublin)

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

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