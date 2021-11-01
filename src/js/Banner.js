import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Banner = (props) => {

  return (
    <>
      <div className="banner">

            <Container>
              <h1 className="pt-5">{props.headline}</h1>
              {
                props.subhead
                ?
                  <h4>
                    { props.subhead }
                  </h4>
                :
                  null
              }
              {
                props.button_label
                ?
                  <>
                    <br />
                    <Button variant="outline-light" href={props.button_url}>{props.button_label}</Button>
                  </>
                :
                  null
              }

              <h1 className="pb-1">&nbsp;</h1>
              
            </Container>

      </div>
      <br />
    </>
  );

}

export default Banner;