import { Container, Row, Col, Button,Dropdown} from 'react-bootstrap';
import React from 'react';
import  { useState } from 'react';
import {MdClose } from "react-icons/md";

const OutcomeMessage = props => {
  const [showMessage, setShowMessage] = useState(false)

  function toggleMessage(){
    console.log('toggling message')
    setShowMessage(!showMessage)
  }
return(
  <>
    {props.screen ==='desktop'?
      <>
        <Container className ={'outcome-message-container-desktop centered-children '
                               + (props.outcomeMessageType==='positive'? 'positive-message':'negative-message')}>
          <Row className='fill-width'>
            <Col xs={1} sm={1} md={1} lg={1} xl={1}>
              &nbsp;
            </Col>
            <Col xs={10} sm={10} md={10} lg={10} xl={10}>
              {props.message}
            </Col>
            <Col xs={1} sm={1} md={1} lg={1} xl={1} >
              <MdClose size='1.6em' onClick ={props.closeMessage}/>
            </Col>
          </Row>
        </Container>
      </>:null}
  {props.screen ==='mobile'?
  <>
    <Container className ='outcome-message-container-mobile'>
      <div className ='outcome-message'>
          {props.message}
        </div>
    </Container>
  </>:null}

  </>
)}

export default OutcomeMessage;
