import React, { useState, useEffect } from 'react';

const Ticker = (props) => {

  const [ now, setNow ] = useState( new Date() );

  useEffect(() => {
    const interval = setInterval(() => {
      setNow( new Date() );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <>
      { now.toLocaleTimeString( 'en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) }
      {' '}{shortTimezone}
      <br />
      { now.toLocaleTimeString( 'en-GB', { timeZone: props.eventTimezone.shortname, hour: '2-digit', minute: '2-digit', second: '2-digit' }) }
      {' '}Event
    </>
  );

}

export default Ticker;