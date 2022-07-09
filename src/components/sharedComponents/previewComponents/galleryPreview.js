import React from 'react';
import {Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import  { useEffect } from 'react';
const Images = props => {
  useEffect(() => {
    if (document.readyState==='complete') {
      console.log('gallery preview componennt already complete')
      props.componentReady('galleryPreviewImg')
    }
    window.addEventListener("load", onPageLoad);
    // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    })

    function onPageLoad (){
      console.log('gallery preview loaded')
      console.log(document.readyState)
      if (document.readyState === "complete") {
        console.log('all the way done')
        props.componentReady('galleryPreviewImg')
      }
    }

  return(
    <>

      <Col xs={12} sm={6} md={4} lg={4} xl={4}
           style={{margin:'0vw',padding:'0vw'}}
           className ='gallery-col'>
        <Link to={props.img.link} className ='centered-children'>
          <p className ='gallery-label'>{props.img.name}</p>
          <img src ={props.img.pic}
               alt={props.img.name}

               className ='img-fluid gallery-img'/>
        </Link>
      </Col>
    </>
  )
}


const GalleryPreview = props => {

  useEffect(() => {
    if (document.readyState==='complete') {
      console.log('gallery preview componennt already complete')
      props.componentReady('galleryPreview')
    }
    window.addEventListener("load", onPageLoad);
    // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    })

    function onPageLoad (){
      console.log('gallery preview loaded')
      console.log(document.readyState)
      if (document.readyState === "complete") {
        console.log('all the way done')
        props.componentReady('galleryPreview')
      }
    }

return(

  <>



    <Row style={{margin:'0vw',padding:'0vw'}}>

    {props.galleryImages.map((img, i)=>{
            return <Images img={img}
                           componentReady={props.componentReady}
                           key={img.key}/> })}


    </Row>
  </>
)}

export default GalleryPreview;
