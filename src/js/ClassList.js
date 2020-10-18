import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Banner from './Banner';

const ClassList = (props) => {

  const classes = props.schedule.reduce( ( acc, slot ) => (
    acc.concat( slot.classes.filter( c => c.title ) )
  ), [] ).sort( ( a, b ) => {
    return ( a.title.toLowerCase() < b.title.toLowerCase() ) ? -1 : ( a.title.toLowerCase() > b.title.toLowerCase() ) ? 1 : 0
  });

  console.log( classes );

  return (
    <>
      <Banner
        headline="Class list"
      />

      <Container>
        { classes.map( ( item , i ) => (
            <div key={i}>
              <Link to={'classes/' + item.slug}>{item.title} - <span className="text-muted">{item.teacher}</span></Link>
            </div>

          ))
        }
      </Container>

    </>
  );
}

export default ClassList;