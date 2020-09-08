import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner, Button } from 'react-bootstrap';

import Banner from './Banner';

const ClassDetail = (props) => {

  const { yyyymmdd, hhmm, slug } = useParams();
  const class_slug = `${yyyymmdd}/${hhmm}/${slug}`;

  const classDatestamp = `${yyyymmdd}T${hhmm.substring(0,2)}:${hhmm.substring(2,4)}${props.eventTimezone.offset}`;
  const classDate = new Date( classDatestamp )

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

  const row = props.schedule.find( x => x.when.valueOf() === classDate.valueOf() );
  const thisClass = row.classes.find( x => x.slug === class_slug )

  const usertimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <>
      <Banner
        headline={thisClass.title}
      />
      <Container>
        <h3>
          Hosted by {thisClass.teacher}
        </h3>
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

        <p><Button variant="primary" href="#/schedule"><b>Return to schedule</b></Button></p>Are ye For the

      </Container>
    </>
  );

}

export default ClassDetail;