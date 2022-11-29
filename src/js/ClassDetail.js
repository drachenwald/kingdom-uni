import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container, Spinner, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Icon from '@mdi/react';
import { mdiRecordRec, mdiClockTimeThreeOutline } from '@mdi/js';

import Banner from './Banner';
import CategoryIcon from './CategoryIcon';
import Youtubelink from './Youtubelink';
import Zoomlink from './Zoomlink';
import Duration from './Duration';
import ClassLevelIcon from './ClassLevelIcon';

const ClassDetail = (props) => {

  const { teacher, slug } = useParams();
  const class_slug = `${teacher}/${slug}`;

  const location = useLocation();

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

  const thisClass = classes.find( x => x.slug === class_slug )

  if ( !thisClass ) {

    return (
      <>
      <Banner
        headline="Class not found"
      />
      <Container>
        <p>
          There's no class at {location.pathname}.
        </p>

        <p>
          Check the schedule in case this class has been moved, or cancelled.
        </p>

        <LinkContainer to="/schedule"><Button variant="primary"><b>See the schedule</b></Button></LinkContainer>

      </Container>
    </>
    )
  }

  const desc = thisClass.desc.split('\n').reduce((total, line, index) => [total, <br key={index}/>, line]);

  const usertimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const classDateString = thisClass.when
  const classDate = new Date( classDateString )

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

        { thisClass.materials
          ?
            <p><strong>Materials needed:</strong> { thisClass.materials }</p>
          :
            null
        }

        { thisClass.capacity.toLowerCase() === 'any'
          ?
            null
          :
            <p>This class has a maximum attendance of <strong>{ thisClass.capacity }</strong> participants.</p>
        }

        <p>
          <CategoryIcon category={thisClass.category} /> {thisClass.category}<br />
          <Icon path={mdiClockTimeThreeOutline} title="Duration" /> <Duration mins={thisClass['length-in-minutes']} />
          { thisClass.record === 'yes'
            ?
              <>
                <br /><Icon path={mdiRecordRec} color="#660000" title="This session may be recorded" />This session may be recorded. If you would prefer not to be recorded, please disable your camera and microphone for this session.
              </>
            :
            null
          }
          { thisClass.level
            ?
              <>
                <br /><ClassLevelIcon level={thisClass.level} />{thisClass.level} level class.
              </>
            :
              null
          }
        </p>

        {
          thisClass.handouts
          ?
            <p><Button variant="primary" href={thisClass.handouts}><b>View class handout</b></Button></p>
          :
            null
        }

        <div>
          { thisClass.youtube
            ?
              <Youtubelink thisClass={thisClass} />
            :
              <Zoomlink thisClass={thisClass} />
          }
        </div>

        <br />
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