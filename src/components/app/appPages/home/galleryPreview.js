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
        className ='img-fluid gallery-img'
        />

      </Col>
    </>
  )
}


const GalleryPreview = props => {



return(

  <>



    <Row style={{margin:'0vw',padding:'0vw'}}>

    {props.galleryImages.map((img, i)=>{
            return <Images img={img}
                           key={img.src+i}/> })}


    </Row>
  </>
)}

export default GalleryPreview;
