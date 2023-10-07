import React from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';

import Banner from './Banner';

const Callforclasses = (props) => {

  return (
    <>
      <Banner
        headline="Call for Classes"
      />
      <Container>

        <Row>
          <Col xs={0} md={1} lg={2}>

          </Col>

          <Col>


  <Alert variant="secondary" >

              <p>Dear all, <br />    
                We would like to invite everyone to attend another exciting digital Drachenwald Kingdom University event, 26-28 January 2024. The classes will be live classes held on Zoom channels.  
                We will be using a Discord server for chat and socialising during the event. </p>
              <p>Please consider offering a class for this event. We'd love to see classes in:
              </p>
              <ul>
  <li>SCA and History</li>
  <li>Sewing and Costuming</li>
  <li>Other Fibre Arts</li>
  <li>Science</li>
  <li>Fighting, Fencing and Archery</li>
 <li>Music and Dance</li>
  <li>Calligraphy, Illumination and Books</li>
  <li>Penguins (miscellaneous items) </li>
</ul>
              <p><Button variant="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSd6H5DKheYp-umZ7iffoEokFFXeW4cHU8ZGQExqwv9jFQ357g/viewform?fbclid=IwAR3E2IxvqiKLjFZJBG-6lsSVCM7Gawj1qy35DfTfdWaPTZ2iNCoBDRxvFYc">
          <b>Submit a class</b></Button>
              </p>
</Alert>


            <h2>Information on designing classes</h2>
  <p> We would like to encourage both live and pre-recorded classes. 
The latter can have a live Q&A session scheduled during the event. If you are interested in creating a pre-recorded class, we have a number of people who are willing to give you guidance on the creation and editing of a short video. Please contact our fabulous videographer Artemis at <a href="mailto:Artemis.Swann@blinkingowlmedia.co.uk">Artemis.Swann@blinkingowlmedia.co.uk</a> for help and details. </p>
  <p>Please be aware that any recorded items, including both recordings of live sessions and pre-recorded material, must conform to copyright law. This means that all sources of images must be documented and permissions obtained where necessary. For a live presentation that is not being recorded, use for education as well as fair use applies; but if we record and post your video then we need to be careful that fair use is accurately applied. For guidance on how this works, here are some guidelines for the UK - note international rules may also apply:</p>
<ul>
<li><a href="https://copyrightservice.co.uk/copyright/p29_video_copyright">Video copyright</a></li>
<li><a href="https://copyrightservice.co.uk/copyright/p09_fair_use">Fair use</a></li>
<li><a href="https://copyrightservice.co.uk/copyright/p27_work_of_others">Work of others</a></li>
</ul>
<p>We ask that when designing your class, and during the class itself, you make sure to allow time at the end for questions, and for a transition period of no less than 5 minutes between your class and the next scheduled class. This allows classes to start on time and for attendees to transition between ‘rooms’ in an orderly manner. </p>
<p>We will assign a teaching assistant to all classes. This person will be responsible for watching the time, alerting the speaker to the end of the session, and (having worked this out with the speaker beforehand) either alerting them to questions in the chat, or reading out questions from the chat at the end of the session before opening the floor to further questions. They will also help if the session suffers technical difficulties; although please remember that our TAs are volunteers, and may not be particularly technically proficient. They will however alert our technical team to any problems that arise. </p>
<p>We strongly recommend that you practice delivering your presentation or session beforehand. This can be either with your friends, or you are welcome to contact a member of staff to arrange a practice session (<a href="mailto:DWKUChancellor@gmail.com">DWKUChancellor@gmail.com</a>). This will give you time to get used to using Zoom, and to practice the transitions between different cameras, presentations and other inputs.</p>

<p>All the best from your organising team!</p>

            <p><Button variant="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSd6H5DKheYp-umZ7iffoEokFFXeW4cHU8ZGQExqwv9jFQ357g/viewform?fbclid=IwAR3E2IxvqiKLjFZJBG-6lsSVCM7Gawj1qy35DfTfdWaPTZ2iNCoBDRxvFYc"><b>Submit a class</b></Button>
              </p>
          </Col>

          <Col xs={0} md={1} lg={2}>
            {' '}
          </Col>
        </Row>





      </Container>
    </>
  );

}

export default Callforclasses;
