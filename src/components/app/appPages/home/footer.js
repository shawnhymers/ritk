import React from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import {SiTiktok} from "react-icons/si";
import {BsInstagram, BsYoutube} from "react-icons/bs";
import  { useState,useRef } from 'react';
import LargeModal from "../../../standardComponents/largeModal"
import { sendForm } from 'emailjs-com';

const Footer = props => {

  const [userEmail, setUserEmail]=useState('')
  const [showContactModal, setShowContactModal]=useState(false)
  const [message,setMessage]=useState('')

  const form = useRef();

  function toggleContactModal(){
    if (userEmail!=='' && !showContactModal) {
      setShowContactModal(true)
    }
    else {
      setShowContactModal(false)
    }
  }

  function submitMessage(e){
    if (message!=='') {
      console.log(message)
      toggleContactModal()
      e.preventDefault();
      sendForm('service_5dpwlhk', 'template_rj36e27', form.current, '3OvB9yd-0dJbR1VD2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  }
}

  function updateMessage(e){
    console.log(e.target.value)
    setMessage(e.target.value);
  }

  function updateEmail(e){
    setUserEmail(e.target.value)
  }

return(
  <>
  <Row>
    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
      <Row className ='form-line nice-input-wrapper'>
        <Col>
          <Row>
            <input type="text"
                   id="userEmail"
                   name="userEmail"
                   value = {userEmail}
                   placeholder ='Your Email:'
                   onChange = {updateEmail}/>
            <label htmlFor="userEmail">
              Your Email:
            </label>
          </Row>
        </Col>
        <Col>
          <Button value ="Contact"
                  variant='custom'
                  onClick = {toggleContactModal}>Contact Us</Button>
        </Col>
      </Row>
    </Col>
    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
      <Row  style ={{paddingTop:'2em',paddingBottom:'2em'}}>
        <Col style ={{maxWidth:'2.6em'}}>
          <BsInstagram size ='1.5em' style ={{cursor:'pointer'}}/>
        </Col>
        <Col style ={{maxWidth:'2.6em'}}>
          <SiTiktok size ='1.5em' style ={{cursor:'pointer'}}/>
        </Col>
        <Col style ={{maxWidth:'2.6em'}}>
          <BsYoutube size ='1.5em'style ={{cursor:'pointer'}}/>
        </Col>
        <Col style ={{maxWidth:'10em'}}>
           <p className ='centered-text roaming-text-sm'>@roamingintheknow</p>
        </Col>
      </Row>
    </Col>
  </Row>

  {showContactModal?
    <>
    <LargeModal isOpen={true}
                closeModal ={toggleContactModal}
                modalTitle ={'Hello, '+userEmail}
                modalBody = {<>
                            <form ref={form} >
                                <Row>
                                  <input type="text"
                                         id="user_email"
                                         name="user_email"
                                         value = {userEmail}
                                         placeholder ='Your Email:'
                                         onChange = {updateEmail}/>
                                  <label htmlFor="user_email">
                                    Your Email:
                                  </label>
                                </Row>
                                <Row className = 'centered-children vertical-padding-sm'>
                                  <input type = 'textarea'
                                         style = {{ width:'80%',height:'20vh'  } }
                                         placeholder = 'Enter your Message Here'
                                         name = 'message'
                                         value = {message}
                                         onChange = {updateMessage}/>
                                </Row>
                                <Row className ='form-submit-line'>
                                  <Col className ='centered-children'>
                                    <Button variant='custom' onClick={submitMessage}>Send</Button>
                                  </Col>
                                </Row>
                              </form>
                            </>}/>
    </>
  :null}

</>)}

export default Footer;
