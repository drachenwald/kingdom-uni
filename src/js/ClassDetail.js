import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Banner from './Banner';

const ClassDetail = (props) => {

  const { teacher, slug } = useParams();
  const class_slug = `${teacher}/${slug}`;

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

  const classtime = null;

  /*
  const usertimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const classtime = (
    <p>

    { row.when.toLocaleDateString( 'en-GB', { weekday: 'short', day: 'numeric', month: 'short' } ) }
    {' '}at{' '}
    <b>{ row.when.toLocaleTimeString( 'en-GB', { hour: '2-digit', minute: '2-digit' }) }</b> {usertimezone}
    {
      usertimezone !== props.eventTimezone.longname
      ?
        <>
          <br />
          { row.when.toLocaleDateString( 'en-GB', { timeZone: props.eventTimezone.shortname, weekday: 'short', day: 'numeric', month: 'short' } ) }
          {' '}at{' '}
          <b>{ row.when.toLocaleTimeString( 'en-GB', { timeZone: props.eventTimezone.shortname, hour: '2-digit', minute: '2-digit' }) }</b> {props.eventTimezone.longname}
        </>
      :
        null
    }
    
    </p>
  )
  */

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
          {thisClass.desc}
        </p>

        {
          thisClass.handouts
          ?
            <p><Button variant="primary" href={thisClass.handouts}><b>View class materials</b></Button></p>
          :
            null
        }

        <p><LinkContainer to="/classlist"><Button variant="primary"><b>Return to class list</b></Button></LinkContainer></p>

      </Container>
    </>
  );

}

export default ClassDetail;