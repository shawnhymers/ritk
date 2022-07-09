import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import coupleIcon from "../../assets/icons/coupleIcon.png"
const LoadScreen = props => {

return(
    <>
      <Container className ='roaming-white full-width' style ={{height:'100vh'}}>
        <Row style ={{height:'33vh'}}>
          &nbsp;
        </Row>
        <Row >
          <Col className ='centered-children '>
            <img style ={{maxWidth:'30vw'}}src ={coupleIcon} alt ='loadingIcon' />
          </Col>
        </Row>
        <Row className ='centered-children'>
          <Col className ='centered-children '>
            <p className ='roaming-text centered-text'>One moment please...</p>
          </Col>
        </Row>
      </Container>
    </>
)}

export default LoadScreen;
