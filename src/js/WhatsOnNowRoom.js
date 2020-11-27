import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const WhatsOnNowRoom = (props) => {

  const now = new Date();
  const nowish = new Date( now.getTime() + 5*60000 );

  let onNow;

  if ( props.schedByRoom[props.room] ) {
    onNow = props.schedByRoom[props.room]
      .find( row => ( row.start < nowish && row.end > nowish ));
  } else {
    return (
      <span className="text-muted">Loading...</span>
    )
  }

  if ( onNow ) {

    return (
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
        {onNow.title}<br /><br />
        <LinkContainer to={ '/classes/' + onNow.slug}><Button variant="primary"><b>Participate</b></Button></LinkContainer>
        <br /><br />
      </>
    )

  }

  const onNext = onNow = props.schedByRoom[props.room]
    .find( row => ( row.start > nowish && row.title.indexOf("**CANCELLED**") === -1 ));

  return (
    <>
      <b>{props.room} room</b><br />

      { onNext
        ?
          <>
            <span className="text-muted">
              <small>Coming up at {onNext.start.toLocaleTimeString( [], { hour: '2-digit', minute: '2-digit' } )}</small><br />
              {onNext.title}
            </span>
            <br /><br />
          </>
        :
          <>
            <span className="text-muted">Room has closed</span>
          </>
      }
    </>

  )



};

export default WhatsOnNowRoom;