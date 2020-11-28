import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { readRemoteFile } from 'react-papaparse';

import Layout from './Layout';
import Home from './Home';
import Schedule from './Schedule';
import NotFound from './NotFound';
import ClassDetail from './ClassDetail';
import ClassList from './ClassList';
import Housekeeping from './Housekeeping';

function App() {

  // Configure these details for this event

  const eventTimezone = {
    'offset': '+01:00',
    'shortname': 'CET',
    'longname': 'Europe/Stockholm',
    'nickname': 'Event time',
  }

  const roomnames = [ 'Cambridge', 'Leiden', 'Bologna', 'Al-Azhar', 'Sorbonne', 'Urbino', 'Tartu', 'Oxford',
                      'SpareA', 'SpareB', 'SpareC', 'SpareD' ]

  const scheduleUrl = 'https://scripts.drachenwald.sca.org/json/ku.json';

  // Code starts here

  const [ schedule, setSchedule ] = useState([]);
  const [ schedByRoom, setSchedByRoom ] = useState({});

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

      const classDT = row.when.replace('Z','') + eventTimezone.offset;

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
            start: new Date( row.when.replace('Z','') + eventTimezone.offset ),
            end: new Date( row['end time'].replace('Z','') + eventTimezone.offset ),
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
        setSchedByRoom( assembleSchedByRoom( data ) )
        return setSchedule( assembleSchedule( data ))
      })
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const schedRefreshInterval = setInterval(() => {
      fetch(scheduleUrl)
      .then(response => {
        if ( response.status === 200 ) {
          response.json()
            .then( data => {
              setSchedByRoom( assembleSchedByRoom( data ) )
              return setSchedule( assembleSchedule( data ) )
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
        <Layout eventTimezone={eventTimezone}>
          <Switch>
            <Route exact
              path="/"
              render={(props) => <Home
                                    {...props}
                                    schedByRoom={schedByRoom}
                                    roomnames={roomnames}
                                  />}
            />

            <Route
              path="/housekeeping"
              render={(props) => <Housekeeping
                                    {...props}
                                  />}
            />

            <Route
              path="/schedule"
              render={(props) => <Schedule
                                    {...props}
                                    schedule={schedule}
                                    eventTimezone={eventTimezone}
                                    roomnames={roomnames}
                                  />}
            />

            <Route
              path="/classes/:teacher/:slug"
              render={(props) => <ClassDetail
                                    {...props}
                                    schedule={schedule}
                                    eventTimezone={eventTimezone}
                                    roomnames={roomnames}
                                  />}
            />

            <Route
              path="/classlist"
              render={(props) => <ClassList
                                    {...props}
                                    schedule={schedule}
                                    eventTimezone={eventTimezone}
                                    roomnames={roomnames}
                                  />}
            />

            <Route
              path="*"
              render={(props) => <NotFound
                                    {...props}
                                  />}
            />

          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
