import React from 'react';
import { Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiMonitorCellphone } from '@mdi/js';

const Zoomlink = (props) => (

  props.thisClass.zoom
    ?
      <>
        <Button variant="primary" href={props.thisClass.zoom}><Icon path={mdiMonitorCellphone} title="Connect to the Zoom call" /><b>{' '}Join the {props.thisClass.room} room using Zoom</b></Button><br />
        Check your email for password information
      </>
    :
      <>
        This class will take place in the <b>{props.thisClass.room}</b> room.
      </>

);

export default Zoomlink;