import React, { useState, useEffect } from 'react';

const Ticker = (props) => {

  const [ now, setNow ] = useState( new Date() );

  useEffect(() => {
    const interval = setInterval(() => {
      setNow( new Date() );
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      { now.toLocaleTimeString( 'en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) }
      {' '}Your time
      <br />
      { now.toLocaleTimeString( 'en-GB', { timeZone: props.eventTimezone.shortname, hour: '2-digit', minute: '2-digit', second: '2-digit' }) }
      {' '}Event time
    </>
  );

}

export default Ticker;