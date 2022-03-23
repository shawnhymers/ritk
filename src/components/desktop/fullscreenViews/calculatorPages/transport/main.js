import { Container, Row, Col, Button,Dropdown} from 'react-bootstrap';
import  { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CustomDropdown from '../../../../standardComponents/dropdown';
import CustomToggle from "../../../../standardComponents/customToggle";
import CarOptions from "../forms/carOptions"
import smallCarData from "../../../../data/smallCarData"
import Car from "./car";
import Bus from "./bus";
import Train from "./train";

const Transport = props=>{

  const [type, setType] = useState('car');



  function selectType(type){
    setType(type)
  }

  return(
    <>
      <Row className = 'vertical-padding-sm'>
        <Col xs={1} sm={1} md={1} lg={2} xl={3}>
          &nbsp;
        </Col>
        <Col className ='centered-children' onClick ={()=>selectType('car')}>
          <p className = {(type ==='car'? 'roaming-text medium-link-text':'roaming-text medium-link-text roaming-yellow-text')}>Car</p>
        </Col>
        <Col className ='centered-children'>
          <p>|</p>
        </Col>
        <Col className ='centered-children' onClick ={()=>selectType('bus')}>
          <p className = {'medium-link-text '+(type ==='bus'? 'roaming-text ' :'roaming-text roaming-yellow-text')}>Bus</p>
        </Col>
        <Col className ='centered-children'>
          <p>|</p>
        </Col>
        <Col className ='centered-children' onClick ={()=>selectType('train')}>
          <p className = {(type ==='train'? 'roaming-text  medium-link-text':'roaming-text medium-link-text roaming-yellow-text')}>Train</p>
        </Col>
        <Col xs={1} sm={1} md={1} lg={2} xl={3}>
          &nbsp;
        </Col>
      </Row>

      {type ==='car'?
        <>
          <Car addCarbonCostItem={props.addCarbonCostItem}/>
        </>
        :
      null}
      {type ==='bus'?
        <>
        <Bus addCarbonCostItem={props.addCarbonCostItem}/>
        </>
        :
      null}
      {type ==='train'?
        <>
        <Train addCarbonCostItem={props.addCarbonCostItem}/>
        </>
        :
      null}
    </>
  )
}
export default Transport;
