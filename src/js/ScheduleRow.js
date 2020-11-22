import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiRecordRec } from '@mdi/js';

import CategoryIcon from './CategoryIcon';


const ScheduleRow = (props) => {

  // We will output a new row of dates (and room names) if the day of the current row
  // is not the same as the day of the previous row.

  const today = props.row.when.toDateString();
  const lastDay = props.lastTimestamp.toDateString();

  const classCells = props.roomnames.map( roomname => {
    const item = props.row.classes.find( x => x.room === roomname );

    if ( item && item.title === '' ) {
      return null
    }

    return (
      <Row key={`row-${props.row.when.valueOf}-${roomname}`}>
        { item
          ?
            <>
              <Col md={2} className='bg-drachenwald text-gold d-none d-md-block'>
                {item.youtube
                 ?
                  <span>Prerecorded</span>
                 :
                  <span>{roomname}</span>
                }
              </Col>

              { item.teacher
                ?
                  <Col
                    xs={12} md={7}
                    className="border-left bg-light text-dark border" as={Link} to={'classes/' + item.slug}
                  >
                    {item.title}
                    <span className="d-none d-sm-inline text-muted"><i> - {item.teacher}</i></span>
                  </Col>
                :
                  <Col
                    xs={12} md={7}
                    className="border-left bg-light text-dark border"
                  >
                    {item.title}
                  </Col>
              }
              
              <Col md={2} className='d-none d-md-block text-center'>
                {item.duration}
              </Col>
              <Col md={1} className='d-none d-md-block text-center'>
                { item.category
                  ?
                    <>
                    <CategoryIcon category={item.category} />
                      { item.record === 'yes'
                        ?
                          <>
                            {' '}<Icon path={mdiRecordRec} color="#660000" title="This session may be recorded" />
                          </>
                        :
                        null
                      }
                    </>
                  :
                    null
                }
              </Col>
            </>
          :
            <Col key={`class-${props.row.when.valueOf}-${roomname}`}
              xs={12}
              className="border-left bg-light text-dark"
            >
              {' '}
            </Col>
        }
        
      </Row>
    )
  });

  return (
    <>
      { today !== lastDay
        ?
          <>
            <Row>
              <Col>
                <br />
              </Col>
            </Row>
            <Row xs={1}>
              <Col className="text-center">
                <b>{today}</b>
              </Col>
            </Row>
          </>
        :
          null
      }
      <Row>
        <Col xs={6} className="bg-drachenwald text-gold text-right">
          {props.eventTimezone.nickname}{' '}
          { props.row.when.toLocaleTimeString( 'en-GB', { timeZone: props.eventTimezone.shortname, hour: '2-digit', minute: '2-digit' }) }
        </Col>
        <Col xs={6} className="bg-drachenwald text-gold text-left">
          { props.row.when.toLocaleTimeString( 'en-GB', { hour: '2-digit', minute: '2-digit' }) }
          {' '}{props.timezone}
        </Col>
      </Row>

      {classCells}

    </>
  );
}

export default ScheduleRow;