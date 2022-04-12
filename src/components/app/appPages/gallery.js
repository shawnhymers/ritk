import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import {SiTiktok} from "react-icons/si";
import {BsInstagram, BsYoutube,BsTwitter} from "react-icons/bs";
import  { useState } from 'react';

const Images = props => {

  return(
    <>
      <Col xs={12} sm={6} md={4} lg={3} xl={3}
           style={{margin:'0vw',padding:'0vw'}}
           className ='gallery-col'>

        <p className ='gallery-label'>{props.img.label}</p>
        <img src ={props.img.src}
             alt={props.img.alt}
             className ='img-fluid gallery-img'/>

      </Col>
    </>
  )
}


const Gallery = props => {



return(

  <>

    <Row style ={{height:'15vh'}}>
      &nbsp;
    </Row>

    <Row style={{margin:'0vw',padding:'0vw'}}>

    {props.galleryImages.map((img, i)=>{
            return <Images img={img}
                           key={img.src+i}/> })}


    </Row>
  </>
)}

export default Gallery;

//
//
//
// <div className ='roaming-white'>
//       <Row className ='roaming-white ' style = {{height:'10vh'}}>
//         &nbsp;
//       </Row>
//           <Row className ='roaming-white  centered-children top-padding-md image-highlight'>
//             <BsInstagram size ='8em'/>
//           </Row>
//           <Row className ='roaming-white  centered-children'>
//             <p className ='centered-children bottom-padding-sm'>@roamingintheknow</p>
//           </Row>
//
//           <Row className ='roaming-white  vertical-margin-sm centered-children image-highlight'>
//             <SiTiktok size ='8em'/>
//           </Row>
//           <Row className ='roaming-white  centered-children'>
//             <p className ='centered-children bottom-padding-sm'>@roamingintheknow</p>
//           </Row>
//
//
//           <Row className ='vertical-margin-sm centered-children image-highlight'>
//             <BsYoutube size ='8em'/>
//           </Row>
//           <Row className ='centered-children'>
//             <p className ='centered-children bottom-padding-sm'>@roamingintheknow</p>
//           </Row>
//
//           <Row className ='vertical-margin-sm  centered-children image-highlight'>
//             <BsTwitter size ='8em'/>
//           </Row>
//           <Row className ='centered-children bottom-padding-sm'>
//             <p className ='centered-children'>@roamingintheknow</p>
//           </Row>
//
//       <Row className ='roaming-white' style = {{height:'15vh'}}>
//         &nbsp;
//       </Row>
//     </div>
// </>:
//
// <>
// <Row className ='roaming-white' style = {{height:'10vh'}}>
//   &nbsp;
// </Row>
//
// <Row className ='roaming-white centered-children vertical-padding-lg'>
//   <Col>
//     &nbsp;
//   </Col>
//   <Col >
//     <Row className ='vertical-margin-sm centered-children'>
//       <BsInstagram size ='4em'/>
//     </Row>
//     <Row className ='centered-children'>
//       <p className ='centered-children'>@roamingintheknow</p>
//     </Row>
//   </Col>
//   <Col>
//     <Row className ='vertical-margin-sm centered-children'>
//       <SiTiktok size ='4em'/>
//     </Row>
//     <Row className ='centered-children'>
//       <p className ='centered-children'>@roamingintheknow</p>
//     </Row>
//   </Col>
//   <Col>
//     &nbsp;
//   </Col>
// </Row>
//
// <Row className ='roaming-white centered-children vertical-padding-lg'>
//   <Col>
//     &nbsp;
//   </Col>
//   <Col >
//     <Row className ='vertical-margin-sm centered-children'>
//       <BsYoutube size ='4em'/>
//     </Row>
//     <Row className ='centered-children'>
//       <p className ='centered-children'>@roamingintheknow</p>
//     </Row>
//   </Col>
//   <Col >
//     <Row className ='vertical-margin-sm centered-children'>
//       <BsTwitter size ='4em'/>
//     </Row>
//     <Row className ='centered-children'>
//       <p className ='centered-children'>@roamingintheknow</p>
//     </Row>
//   </Col>
//   <Col>
//     &nbsp;
//   </Col>
// </Row>
// <Row className ='roaming-white' style = {{height:'15vh'}}>
//   &nbsp;
// </Row>
