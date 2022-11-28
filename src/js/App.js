import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import Schedule from './Schedule';
import NotFound from './NotFound';
import ClassDetail from './ClassDetail';
import ClassList from './ClassList';
import Housekeeping from './Housekeeping';
import Callforclasses from'./Callforclasses';
import ObsBg from './ObsBg';

function App() {

  // Configure these details for this event

  const eventTimezone = {
    'offset': '+01:00',
    'shortname': 'CET',
    'longname': 'Europe/Stockholm',
    'nickname': 'Event time',
  }

  const roomnames = [ 'The Shire - Lobby', 'Rivendell', 'Helm\'s Deep', 'Gondor', 'Fangorn Forest', 'Mordor', 'Mines of Moria' ]

  const scheduleUrl = 'https://dis.drachenwald.sca.org/data/ku.json';

  // Code starts here

  const [ schedule, setSchedule ] = useState([]);
  const [ schedByRoom, setSchedByRoom ] = useState({});
  const [ flashmsg, setFlashmsg] = useState('');

  // From https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1

  const slugify = ( string ) => {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w-]+/g, '') // Remove all non-word characters
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }

  const slugify_class = ( teacher, title ) => {

    //const yyyymmdd = datestamp.toLocaleDateString( 'sv-SE', { timeZone: eventTimezone.shortname, year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g,'-');
    //const hhmm = datestamp.toLocaleTimeString( 'sv-SE', { timeZone: eventTimezone.shortname, hour: '2-digit', minute: '2-digit' }).replace(/:/,'');
    const teacherslug = slugify( teacher );
    const titleslug = slugify( title );

    return `${teacherslug}/${titleslug}`;
  }


  const assembleSchedule = ( data ) => {
    const schedule = data.reduce( (acc, row) => {

      const classDT = row.when;

      const classDatestamp = new Date( classDT );

      const index = acc.findIndex( x => x.when.valueOf() === classDatestamp.valueOf() );

      const thisclass = {
        ...row,
        when: classDT,
        slug: slugify_class( row.teacher, row.title )
      }

      if ( index === -1 ) {
        acc.push( { 'when': classDatestamp, 'classes': [thisclass] });
      } else {
        acc[index]['classes'].push( thisclass );
      }
      return acc;

    }, [] );

    return schedule;
  };

  const assembleSchedByRoom = ( data ) => {

    let assembly = {};

    for ( let i = 0 ; i < roomnames.length ; i++ ) {
      assembly[roomnames[i]] = data.filter( row => row.room === roomnames[i] )
        .map( row => (
          { title: row.title,
            start: new Date( row.when ),
            end: new Date( row['end_time'] ),
            slug: slugify_class( row.teacher, row.title )
          }
        ))
    }

    return assembly;
  }

  useEffect( () => {
    fetch(scheduleUrl)
      .then(response => response.json())
      .then(data => {
        setFlashmsg( data.flashmsg );
        setSchedByRoom( assembleSchedByRoom( data ) )
        return setSchedule( assembleSchedule( data ))
      })
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    const schedRefreshInterval = setInterval(() => {
      fetch(scheduleUrl, { cache: 'no-cache' })
      .then(response => {
        if ( response.status === 200 ) {
          response.json()
            .then( data => {
              setFlashmsg( data.flashmsg );
              setSchedByRoom( assembleSchedByRoom( data['calendar'] ) )
              return setSchedule( assembleSchedule( data['calendar'] ) )
          })
        }
      })
    }, 120000);
    return () => clearInterval(schedRefreshInterval);
    // eslint-disable-next-line
  }, []);


  return (
    <>
      <Router>
        <Layout eventTimezone={eventTimezone} flashmsg={flashmsg}>
          <Routes>
            <Route exact
              path="/"
              element={ <Home
                          schedByRoom={schedByRoom}
                          roomnames={roomnames}
                        /> }
            />

            <Route
              path="/obsbg"
              element={ <ObsBg
                          schedule={schedule}
                          schedByRoom={schedByRoom}
                          eventTimezone={eventTimezone}
                          roomnames={roomnames}
                        /> }
            />


            <Route
              path="/housekeeping"
              element={ <Housekeeping /> }
            />

            <Route
              path="/callforclasses"
              element={ <Callforclasses /> }
            />

            <Route
              path="/schedule"
              element={ <Schedule
                          schedule={schedule}
                          eventTimezone={eventTimezone}
                          roomnames={roomnames}
                        /> }
            />

            <Route
              path="/classes/:teacher/:slug"
              element={ <ClassDetail
                          schedule={schedule}
                          eventTimezone={eventTimezone}
                          roomnames={roomnames}
                        />}
            />

            <Route
              path="/classlist"
              element={ <ClassList
                          schedule={schedule}
                          eventTimezone={eventTimezone}
                          roomnames={roomnames}
                        />  }
            />

            <Route
              path="*"
              element={ <NotFound /> }
            />

          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
