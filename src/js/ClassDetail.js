import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Icon from '@mdi/react';
import { mdiRecordRec, mdiClockTimeThreeOutline } from '@mdi/js';

import Banner from './Banner';
import CategoryIcon from './CategoryIcon';

const ClassDetail = (props) => {

  const { teacher, slug } = useParams();
  const class_slug = `${teacher}/${slug}`;

  console.log(props);

  // const classDatestamp = `${yyyymmdd}T${hhmm.substring(0,2)}:${hhmm.substring(2,4)}${props.eventTimezone.offset}`;
  // const classDate = new Date( classDatestamp )

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

  const classes = props.schedule.reduce( ( acc, slot ) => (
    acc.concat( slot.classes.filter( c => c.title ) )
  ), [] ).sort( ( a, b ) => {
    return ( a.title.toLowerCase() < b.title.toLowerCase() ) ? -1 : ( a.title.toLowerCase() > b.title.toLowerCase() ) ? 1 : 0
  });

  //const row = props.schedule.find( x => x.when.valueOf() === classDate.valueOf() );
  const thisClass = classes.find( x => x.slug === class_slug )

  console.log( thisClass );
  const desc = thisClass.desc.split('\n').reduce((total, line, index) => [total, <br key={index}/>, line]);
  console.log( desc );

  const usertimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const classDate = new Date( thisClass.when + props.eventTimezone.offset )

  const classtime = (
    <p>

    { classDate.toLocaleDateString( 'en-GB', { weekday: 'short', day: 'numeric', month: 'short' } ) }
    {' '}at{' '}
    <b>{ classDate.toLocaleTimeString( 'en-GB', { hour: '2-digit', minute: '2-digit' }) }</b> {usertimezone}
    {
      usertimezone !== props.eventTimezone.longname
      ?
        <>
          <br />
          { classDate.toLocaleDateString( 'en-GB', { timeZone: props.eventTimezone.shortname, weekday: 'short', day: 'numeric', month: 'short' } ) }
          {' '}at{' '}
          <b>{ classDate.toLocaleTimeString( 'en-GB', { timeZone: props.eventTimezone.shortname, hour: '2-digit', minute: '2-digit' }) }</b> {props.eventTimezone.longname}
        </>
      :
        null
    }
    
    </p>
  )
  

  return (
    <>
      <Banner
        headline={thisClass.title}
      />
      <Container>
        <h3>
          Hosted by {thisClass.teacher}
        </h3>

        {classtime}

        <p>
          {desc}
        </p>

        <p>
          <CategoryIcon category={thisClass.category} /> {thisClass.category}<br />
          <Icon path={mdiClockTimeThreeOutline} title="Duration" /> Duration {thisClass.duration}
          { thisClass.record === 'yes'
            ?
              <>
                <br /><Icon path={mdiRecordRec} color="#660000" title="This session may be recorded" />This session may be recorded. If you would prefer not to be recorded, please disable your camera and microphone for this session.
              </>
            :
            null
          }
        </p>

        {
          thisClass.handouts
          ?
            <p><Button variant="primary" href={thisClass.handouts}><b>View class materials</b></Button></p>
          :
            null
        }

        <p>
          { thisClass.zoom
            ?
              <Button variant="primary" href={thisClass.zoom}><b>Join the {thisClass.room} room</b></Button>
            :
              <>
                This class will take place in the <b>{thisClass.room}</b> room.
              </>
          }
        </p>

        <p>
          <LinkContainer to="/schedule"><Button variant="primary"><b>See the schedule</b></Button></LinkContainer>{' '}
          <LinkContainer to="/classlist"><Button variant="primary"><b>See the class list</b></Button></LinkContainer>
        </p>

        { thisClass.trailer
          ?
            <p><br /><a href={thisClass.trailer}>Trailer</a></p>
          :
            null
        }

      </Container>
    </>
  );

}

export default ClassDetail;