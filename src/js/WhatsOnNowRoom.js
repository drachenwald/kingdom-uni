import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const WhatsOnNowRoom = (props) => {

  const nowish = new Date( props.now.getTime() + 5*1000 );

  let onNow;

  if ( props.schedByRoom[props.room] ) {
    onNow = props.schedByRoom[props.room]
      .find( row => ( row.start < nowish && row.end > nowish ));
  } else {
    return (
      <span className="text-muted">Loading...</span>
    )
  }

  return (
    <>
      { onNow
        ?
          <>
            <b>{props.room} room</b><br />
            <span className="text-muted">
              <small>
                {onNow.start.toLocaleTimeString( [], { hour: '2-digit', minute: '2-digit' } )}
                -
                {onNow.end.toLocaleTimeString( [], { hour: '2-digit', minute: '2-digit' } )}
              </small>
              <br />
            </span>
            {onNow.title}<br />
            <LinkContainer to={ '/classes/' + onNow.slug}><Button variant="primary"><b>Participate</b></Button></LinkContainer>
            <br /><br />
          </>
        :
          <>
            <b>{props.room} room</b><br />
            <span className="text-muted">Not currently active</span>
            <br /><br />
          </>
      }
    </>
  )

};

export default WhatsOnNowRoom;