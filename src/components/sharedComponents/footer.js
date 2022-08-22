import React from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import {SiTiktok} from "react-icons/si";
import {BsInstagram, BsYoutube} from "react-icons/bs";
import { MdCopyright } from "react-icons/md";
import  { useState,useRef } from 'react';
import LargeModal from "./largeModal"
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
      sendForm('service_5e2hsqb', 'template_tzli0aa', form.current, 'PGrq0q2JL7mW0k_8p')
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

  {props.isMobile?
    <>
    {props.isCalculator?
    null
    :
    <>
    <Row className ='form-line nice-input-wrapper fill-width' >
      <Col xs={8} sm={8} md={8} lg={8} xl={8}>
        <Row  >
          <input type="text"
                 id="userEmail"
                 name="userEmail"
                 value = {userEmail}

                 placeholder ='Your Email:'
                 onChange = {updateEmail}/>
          <label htmlFor="userEmail">
            Email:
          </label>
        </Row>
      </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <Button value ="Contact"
                variant='custom'
                className='roaming-text-xtra-sm'
                onClick = {toggleContactModal}>Contact Us</Button>
      </Col>

    </Row>
    <Row className ='vertical-padding-sm'>
      <Col style ={{maxWidth:'50vw'}}>
        &nbsp;
      </Col>
      <Col style ={{maxWidth:'10vw'}}>
        <BsInstagram size ='1.5em' style ={{cursor:'pointer'}}/>
      </Col>
      <Col style ={{maxWidth:'10vw'}}>
        <SiTiktok size ='1.5em' style ={{cursor:'pointer'}}/>
      </Col>

      <Col style ={{maxWidth:'30vw'}}>
         <p className =' roaming-text-sm auto-margins'>@roamingintheknow</p>
      </Col>
    </Row>
    <Row >
    <p className ='centered-text roaming-text-xtra-sm '><MdCopyright size={'1.5rem'} style={{margin:''}}/>&nbsp; 2022 Roaming In The Know All Rights Reserved</p>

    </Row>
    </>
  }

    </>
  :
  <>

  <Row className='vertical-padding-sm'>
    <Col className ='vertical-centered-children '>
      <Row className ='form-line nice-input-wrapper fill-width'>

        <Col xs={6} sm={6} md={8} lg={8} xl={8}>
          <Row style={{paddingLeft:'2.5em'}} >
            <input type="text"
                   id="userEmail"
                   name="userEmail"
                   value = {userEmail}
                   placeholder ='Email:'
                   onChange = {updateEmail}/>
            <label htmlFor="userEmail">
              Email:
            </label>
          </Row>
        </Col>
          <Col xs={6} sm={6} md={4} lg={4} xl={4}>
          <Button value ="Contact"
                  variant='custom'
                  className='roaming-text-xtra-sm'
                  onClick = {toggleContactModal}>Contact Us</Button>
        </Col>

      </Row>
    </Col>
    <Col>
      <Row className =' centered-children vertical-padding-sm'>
        <Col xs={0} sm={0} md={6} lg={6} xl={6}>
          &nbsp;
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className ='centered-children'>
          <Row style={{paddingRight:'2.5em'}}>
            <Col style ={{maxWidth:'2.6em'}}>
              <BsInstagram size ='1.5em' style ={{cursor:'pointer'}}/>
            </Col>
            <Col style ={{maxWidth:'2.6em'}}>
              <SiTiktok size ='1.5em' style ={{cursor:'pointer'}}/>
            </Col>

            <Col style ={{maxWidth:'10em'}}>
               <p className ='centered-text roaming-text-sm auto-margins'>@roamingintheknow</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className ='centered-children' style={{paddingRight:'2.5em'}}>
        <Col xs={0} sm={0} md={6} lg={6} xl={6}>
          &nbsp;
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className ='centered-children'>
          <p className ='centered-text roaming-text-xtra-sm '><MdCopyright size={'1em'} style={{margin:''}}/>&nbsp; 2022 Roaming In The Know All Rights Reserved</p>
        </Col>
      </Row>
    </Col>
  </Row>


    </>
  }





  {showContactModal?
    <>
    <LargeModal isOpen={true}
                closeModal ={toggleContactModal}
                modalTitle ={'Hello, '+userEmail}
                modalBody = {<>
                            <form ref={form} >
                                <Row className='nice-input-wrapper'>
                                  <Col>
                                    &nbsp;
                                  </Col>

                                  <Col  className='nice-input-wrapper'>
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
                                  </Col>

                                  <Col>
                                    &nbsp;
                                  </Col>

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

//
//
// <Row>
//   <Col xs={12} sm={12} md={8} lg={8} xl={8}>
//     <Row className ='form-line nice-input-wrapper'>
//       <Col xs={1} sm={1} md={1} lg={1} xl={1}>
//         &nbsp;
//       </Col>
//       <Col xs={6} sm={6} md={5} lg={5} xl={5}>
//         <Row>
//           <input type="text"
//                  id="userEmail"
//                  name="userEmail"
//                  value = {userEmail}
//                  placeholder ='Your Email:'
//                  onChange = {updateEmail}/>
//           <label htmlFor="userEmail">
//             Your Email:
//           </label>
//         </Row>
//       </Col>
//         <Col xs={4} sm={4} md={3} lg={3} xl={3}>
//         <Button value ="Contact"
//                 variant='custom'
//                 className='roaming-text-sm'
//                 onClick = {toggleContactModal}>Contact Us</Button>
//       </Col>
//       <Col xs={1} sm={1} md={3} lg={3} xl={3}>
//         &nbsp;
//       </Col>
//     </Row>
//   </Col>
//   <Col xs={12} sm={12} md={4} lg={4} xl={4}>
//     <Row  style ={{paddingTop:'2em',paddingBottom:'2em'}} className ='centered-children'>
//       <Col style ={{maxWidth:'2.6em'}}>
//         <BsInstagram size ='1.5em' style ={{cursor:'pointer'}}/>
//       </Col>
//       <Col style ={{maxWidth:'2.6em'}}>
//         <SiTiktok size ='1.5em' style ={{cursor:'pointer'}}/>
//       </Col>
//       <Col style ={{maxWidth:'2.6em'}}>
//         <BsYoutube size ='1.5em'style ={{cursor:'pointer'}}/>
//       </Col>
//       <Col style ={{maxWidth:'10em'}}>
//          <p className ='centered-text roaming-text-sm auto-margins'>@roamingintheknow</p>
//       </Col>
//     </Row>
//   </Col>
// </Row>
// <Row>
//
// </Row>
// <Row style={{paddingBottom:'1em'}}>
//   <Col xs={0} sm={0} md={6} lg={8} xl={8}>
//     &nbsp;
//   </Col>
//   <Col xs={12} sm={12} md={6} lg={4} xl={4} className ='centered-children'>
//
//     <p className ='centered-text roaming-text-xtra-sm '><MdCopyright size={'1rem'} style={{margin:''}}/>&nbsp; 2022 Roaming In The Know All Rights Reserved</p>
//   </Col>
// </Row>

//
// <Col style ={{maxWidth:'2.6em'}}>
//   <BsYoutube size ='1.5em'style ={{cursor:'pointer'}}/>
// </Col>
