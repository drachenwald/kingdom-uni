import React from 'react';
import { Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiYoutube } from '@mdi/js';

const Youtubelink = (props) => (

  props.thisClass.youtube !== 'pending'
    ?
      <>
        <Button variant="primary" href={props.thisClass.youtube}><Icon path={mdiYoutube} title="View this session on Youtube" /><b>{' '}View this session on Youtube</b></Button>
      </>
    :
      <>
        This class will take place in the <b>{props.thisClass.room}</b> room.
      </>

);

export default Youtubelink;