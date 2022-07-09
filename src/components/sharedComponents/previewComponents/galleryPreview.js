import React from 'react';
import {Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Images = props => {

  return(
    <>

      <Col xs={12} sm={6} md={4} lg={4} xl={4}
           style={{margin:'0vw',padding:'0vw'}}
           className ='gallery-col'>
        <Link to={props.img.link} className ='centered-children'>
          <p className ='gallery-label'>{props.img.name}</p>
          <img src ={props.img.pic}
               alt={props.img.name}
               loading="lazy"
               className ='img-fluid gallery-img'/>
        </Link>
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
                           key={img.key}/> })}


    </Row>
  </>
)}

export default GalleryPreview;
