import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { readRemoteFile } from 'react-papaparse';

import Layout from './Layout';
import Home from './Home';
import SubmitClass from './SubmitClass';
import Schedule from './Schedule';
import NotFound from './NotFound';
import ClassDetail from './ClassDetail';
import ClassList from './ClassList';

function App() {

  // Configure these details for this event

  const eventTimezone = {
    'offset': '+01:00',
    'shortname': 'CET',
    'longname': 'Europe/Stockholm',
    'nickname': 'Event time',
  }

  const roomnames = [ 'one', 'two', 'three', 'four', 'five' ]

  const scheduleUrl = 'https://scripts.drachenwald.sca.org/calendar/data/ku-schedule.tsv';

  // Code starts here

  const [ schedule, setSchedule ] = useState([]);

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

  const slugify_class = ( datestamp, title ) => {
    
    const yyyymmdd = datestamp.toLocaleDateString( 'sv-SE', { timeZone: eventTimezone.shortname, year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g,'-');
    const hhmm = datestamp.toLocaleTimeString( 'sv-SE', { timeZone: eventTimezone.shortname, hour: '2-digit', minute: '2-digit' }).replace(/:/,'');
    const titleslug = slugify( title );

    return `${yyyymmdd}/${hhmm}/${titleslug}`;
  }


  const assembleSchedule = ( data ) => {
    const schedule = data.reduce( (acc, row) => {

      const [ classDate, classTime ] = row.when.split(" ",2);
      const classHHMM = ( "0" + classTime ).slice(-5);

      const classDatestamp = new Date( `${classDate}T${classHHMM}${eventTimezone.offset}` );

      const index = acc.findIndex( x => x.when.valueOf() === classDatestamp.valueOf() );

      const thisclass = {
        ...row,
        slug: slugify_class( classDatestamp, row.title )
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

  useEffect( () => {
    readRemoteFile(scheduleUrl, {
      download: true,
      header: true,
      delimiter: '\t',
      complete: (results) => {
        setSchedule( assembleSchedule( results.data ) );
      }
    });
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
                                  />}
            />

            <Route
              path="/submitclass"
              render={(props) => <SubmitClass
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
              path="/classes/:yyyymmdd/:hhmm/:slug"
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
