import React from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import {SiTiktok} from "react-icons/si";
import {BsInstagram, BsYoutube} from "react-icons/bs";
import { MdCopyright } from "react-icons/md";
import  { useState,useRef } from 'react';
import LargeModal from "./largeModal"
import { sendForm } from 'emailjs-com';
import mountains from "../../assets/icons/mountainIcon.png"
import { Link } from "react-router-dom";
const Footer = props => {

  const [from_name, setUserEmail]=useState('')
  const [first_name, setUserFirstName]=useState('')
  const [last_name, setUserLastName]=useState('')

  const [showContactModal, setShowContactModal]=useState(false)
  const [message,setMessage]=useState('')

  const form = useRef();

  function toggleContactModal(){
    if ( !showContactModal) {
      setShowContactModal(true)
    }
    else {
      setShowContactModal(false)
    }
  }

  function submitMessage(e){
    console.log(form.current)
    if (message!=='' && from_name!=='') {
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
  function updateFirstName(e){
    setUserFirstName(e.target.value)
  }
  function updateLastName(e){
    setUserLastName(e.target.value)
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
      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
      <Button value ="Contact"
              variant='custom'
              className='roaming-text-sm'
              onClick = {toggleContactModal}>Contact Us</Button>
      </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
        &nbsp;
      </Col>
      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
      <Row style ={{paddingTop:'0.6em'}}>
      <Col style ={{maxWidth:'10vw'}}>
      <Link to={{pathname:'https://www.instagram.com/accounts/login/?next=/roamingintheknow/'}}
            className = 'centered-children'
            target="_blank" >
        <BsInstagram size ='1.5em' className='roaming-black'color='#595456'style ={{cursor:'pointer'}}/>
      </Link>
      </Col>
      <Col style ={{maxWidth:'10vw'}}>
        <Link to={{pathname:'https://www.tiktok.com/@roamingintheknow'}}
              className = 'centered-children'
              target="_blank" >
              <SiTiktok size ='1.5em' className='roaming-black'color='#595456'style ={{cursor:'pointer'}}/>
        </Link>
      </Col>

      <Col style ={{maxWidth:'30vw'}}>
         <p className =' roaming-text-sm auto-margins'>@roamingintheknow</p>
      </Col>
      </Row>
      </Col>

    </Row>
    <Row className ='vertical-padding-sm'>

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



          <Button value ="Contact"
                  variant='custom'
                  className='roaming-text-sm'
                  style={{width:'6em',marginLeft:'3em'}}
                  onClick = {toggleContactModal}>Contact Us</Button>

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
            <Link to={{pathname:'https://www.instagram.com/accounts/login/?next=/roamingintheknow/'}}
                  className = 'centered-children'
                  target="_blank" >
              <BsInstagram size ='1.5em' color='#595456'className='roaming-black'style ={{cursor:'pointer'}}/>
              </Link>
            </Col>
            <Col style ={{maxWidth:'2.6em'}}>
            <Link to={{pathname:'https://www.tiktok.com/@roamingintheknow'}}
                  className = 'centered-children'
                  target="_blank" >
              <SiTiktok size ='1.5em' color='#595456'className='roaming-black'style ={{cursor:'pointer'}}/>
              </Link>
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
                modalTitle ={''}
                modalBody = {<>

                            <Row className = 'centered-children'>
                              <img src= {mountains}
                                   alt = 'mountain Icon'
                                   style={{width:'10em'}}/>
                            </Row>

                            <Row className = 'centered-children'>
                              <p className = 'centered-text roaming-yellow-text balloon-text '>HI THERE!</p>
                            </Row>

                            <Row className = 'centered-children'>
                              <Col  xs={1} sm={1} md={1} lg={1} xl={1}>
                                &nbsp;
                              </Col>
                              <Col  xs={10} sm={10} md={10} lg={10} xl={10} className = 'centered-children'>
                                <p className = 'centered-text center-justified-text roaming-black-text blog-body'>Drop us a line below to get in touch. Or if you prefer you can email us at roamingintheknow@gmail.com</p>
                              </Col>
                              <Col  xs={1} sm={1} md={1} lg={1} xl={1}>
                                &nbsp;
                              </Col>
                            </Row>
                            <form ref={form} >
                                <Row >

                                    <Col  xs={1} sm={1} md={1} lg={1} xl={1}>
                                      &nbsp;
                                    </Col>
                                    <Col  xs={5} sm={5} md={5} lg={5} xl={5}>
                                      <Row className='input-padding-md nice-input-wrapper'>
                                      <input type="text"
                                             id="from_first_name"
                                             name="from_first_name"
                                             value = {first_name}
                                             placeholder ='First Name:'
                                             className='roaming-black-text'
                                             onChange = {updateFirstName}/>
                                      <label htmlFor="first_name" className='roaming-black-text'>
                                        First Name
                                      </label>
                                      </Row>
                                    </Col>
                                    <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                                      <Row className='input-padding-md nice-input-wrapper'>
                                      <input type="text"
                                             id="from_last_name"
                                             className='roaming-black-text'
                                             name="from_last_name"
                                             value = {last_name}
                                             placeholder ='Last Name:'
                                             onChange = {updateLastName}/>
                                      <label htmlFor="last_name" className='roaming-black-text'>
                                        Last Name
                                      </label>
                                      </Row>
                                    </Col>
                                    <Col  xs={1} sm={1} md={1} lg={1} xl={1}>
                                      &nbsp;
                                    </Col>
                                    </Row>

                                    <Row>
                                    <Col  xs={1} sm={1} md={1} lg={1} xl={1}>
                                      &nbsp;
                                    </Col>
                                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                                      <Row className='nice-input-wrapper input-padding-md'>
                                      <input type="text"
                                             id="from_name"
                                             name="from_name"
                                             value = {from_name}
                                             className='roaming-black-text'
                                             placeholder ='Your Email:'
                                             onChange = {updateEmail}/>
                                      <label htmlFor="from_user" className='roaming-black-text'>
                                        Your Email:
                                      </label>
                                      </Row>
                                    </Col>

                                      <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                        &nbsp;
                                      </Col>
                                    </Row>

                                <Row className = 'centered-children input-padding-md'>
                                  <input type = 'textarea'
                                         style = {{ width:'80%',height:'20vh'  } }
                                         placeholder = 'Message'
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
// <Row style={{paddingLeft:'2.5em'}} >
//   <input type="text"
//          id="from_name"
//          name="from_name"
//          value = {from_name}
//          placeholder ='Email:'
//          onChange = {updateEmail}/>
//   <label htmlFor="from_namel">
//     Email:
//   </label>
// </Row>














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
