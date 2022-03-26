import { Container, Row, Col, Button,Dropdown} from 'react-bootstrap';
import React from 'react';
import  { useState } from 'react';
import {MdHelp } from "react-icons/md";

const HelpIcon = props => {
  const [showMessage, setShowMessage] = useState(false)

  function toggleMessage(){
    console.log('toggling message')
    setShowMessage(!showMessage)
  }
return(
  <>
    <MdHelp onClick ={toggleMessage}/>
    {showMessage?
      <>
        <Container className ='help-message-container'>
          <div className ='help-message'>
            {props.message}
          </div>
        </Container>
      </>:null}
  </>
)}

export default HelpIcon;
