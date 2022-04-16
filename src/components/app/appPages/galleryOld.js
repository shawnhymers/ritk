import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import {SiTiktok} from "react-icons/si";
import {BsInstagram, BsYoutube,BsTwitter} from "react-icons/bs";
import  { useState } from 'react';
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";





const ScrollingGallery = props =>{


  return(
    <>
      <Col xs={2} sm={2} md={2} lg={2} xl={2}
           onClick = {props.leftClick}
           className ='vertical-centered-children'>
        <MdKeyboardArrowLeft size ='2em'/>
      </Col>
      <Col xs={8} sm={8} md={8} lg={8} xl={8} className ='gallery-col'>
        <p className ='gallery-label'>{props.img.label}</p>
        <img src ={props.img.src}
             alt={props.img.alt}
             className ='img-fluid gallery-img'
             style ={{height:'70vh'}}
            />
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2}
           onClick ={props.rightClick}
           className ='vertical-centered-children'>
        <MdKeyboardArrowRight size ='2em'/>
      </Col>
    </>
  )
}


const Gallery = props => {

  const [selectedImg, setImage] = useState({src:"galleryTest1.jpg",alt:'test-alt',label:"View",index:0})

  const[colombiaGallery] =useState([{src:"galleryTest1.jpg",alt:"test-alt",label:"View",index:0},
                                   {src:"galleryTest2.jpg",alt:"test-alt",label:"View",index:1},
                                   {src:"galleryTest3.jpg",alt:"test-alt",label:"View",index:2},
                                   {src:"galleryTest1.jpg",alt:"test-alt",label:"View",index:3},
                                   {src:"galleryTest2.jpg",alt:"test-alt",label:"View",index:4},
                                   {src:"galleryTest3.jpg",alt:"test-alt",label:"View",index:5},
                                   {src:"galleryTest1.jpg",alt:"test-alt",label:"View",index:6},
                                   {src:"galleryTest2.jpg",alt:"test-alt",label:"View",index:7}])

  function leftClick(){
    console.log('left click')
    let img = colombiaGallery[selectedImg.index-1]
    console.log(img)
    setImage(img)

  }
  function rightClick(){
    console.log('right click')
    console.log(selectedImg.index)
    console.log(selectedImg.index+1)
    let img = colombiaGallery[selectedImg.index+1]
    console.log(img)
    setImage(img)
  }
return(

  <>
  <Row style ={{height:'15vh'}}>
    &nbsp;
  </Row>
  <Row style ={{maxHeight:'85vh'}}>
    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
      <Row >
        <p className ='centered-text roaming-text-sm'>Nicaragua</p>
      </Row>
      <Row>
        <p className ='centered-text roaming-text-sm'>Costa Rica</p>
      </Row>
      <Row>
        <p className ='centered-text roaming-text-sm'>Panama</p>
      </Row>
      <Row>
        <p className ='centered-text roaming-text-sm'>Colombia</p>
      </Row>
    </Col>
    <Col xs={8} sm={8} md={8} lg={8} xl={8} >
      <Row>
        <ScrollingGallery img ={selectedImg} leftClick={leftClick} rightClick={rightClick}/>
      </Row>
    </Col>
  </Row>
  </>
)}

export default Gallery;


//
//
// <Row style ={{height:'15vh'}}>
//   &nbsp;
// </Row>
//
// <Container>
//
//   <Row>
//     <p>Colombia</p>
//   </Row>
//
//   <Row style={{paddingBottom:'2em',paddingLeft:'0vw',paddingRight:'0vw',}}>
//
//   {props.galleryImages.map((img, i)=>{
//           return <Images img={img}
//                          key={img.src+i}/> })}
//
//
//   </Row>
//   <Row>
//     <p>Costa Rica</p>
//   </Row>
//
//   <Row style={{paddingBottom:'2em',paddingLeft:'0vw',paddingRight:'0vw',}}>
//
//   {props.galleryImages.map((img, i)=>{
//           return <Images img={img}
//                          key={img.src+i}/> })}
//
//
//   </Row>
// </Container>
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
