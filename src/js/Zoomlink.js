import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiMonitorCellphone } from '@mdi/js';

const Zoomlink = (props) => {

  const [ showHint, setShowHint ] = useState( false );

  return (
    props.thisClass.zoom
      ?
        <>
          <Button variant="primary" href={props.thisClass.zoom}><Icon path={mdiMonitorCellphone} title="Connect to the Zoom call" /><b>{' '}Join the {props.thisClass.room} room using Zoom</b></Button><br /><br />
          Check your email for password information.{' '}
          
          { showHint
            ?
              <>
                <Button variant="secondary" size="sm" onClick={() => setShowHint( !showHint ) }>Hide info</Button>
                <Alert variant="secondary">
                    The welcome email was sent to registered attendees on <b>Sunday 22 November</b> at about 22:37 CET,
                    with the subject line <b>"Information for those who have registered for Drachenwald Kingdom University"</b>.
                    This email includes password information for the Zoom rooms each day.
                    <br /><br />
                    If you don't have this mail in your inbox, please check your spam folder; and then if you still
                    can't find it, contact <b>university@drachenwald.sca.org</b>.
                </Alert>
              </>
            :
              <Button variant="secondary" size="sm" onClick={() => setShowHint( !showHint ) }>Which email?</Button>
          }
        </>
      :
        <>
          This class will take place in the <b>{props.thisClass.room}</b> room.
        </>
  )

};

export default Zoomlink;