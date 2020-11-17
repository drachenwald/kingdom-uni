import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Banner from './Banner';
import CategoryIcon from './CategoryIcon';

const ClassList = (props) => {

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
    return  ( a.category < b.category )
            ?
              -1
            :
            ( a.category > b.category )
            ?
              1
            :
            ( a.title.toLowerCase() < b.title.toLowerCase() )
            ?
              -1
            :
            ( a.title.toLowerCase() > b.title.toLowerCase() )
            ?
              1
            :
              0
  });

  return (
    <>
      <Banner
        headline="Class list"
      />

      <Container>
        { classes.map( ( item , i ) => (
            <div key={i}>
              <CategoryIcon category={item.category} />{' '}
              { item.teacher
                ?
                  <Link to={'classes/' + item.slug}>{item.title}<span className="text-muted"> - {item.teacher}</span></Link>
                :
                  <span>{item.title}</span>
              }
            </div>

          ))
        }
      </Container>

    </>
  );
}

export default ClassList;