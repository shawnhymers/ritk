import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import  { useState } from 'react';
import CarForm from "./car"
import BusForm from "./bus"
import TrainForm from "./train"
import FormCheck from "react-bootstrap/FormCheck"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import HelpIcon from "../../../../standardComponents/helpIcon"

const TransportForm = props => {

  const [transportType, setTransportType]=useState('car')

  function updateTransportType(e){
    setTransportType(e.target.value)
  }

return(
  <>
    <Row className ='vertical-padding-sm'>
      <Col xs={1} sm={1} md={1} lg={2} xl={3}>
        &nbsp;
      </Col>
      <Col>
        <Container className ='form-container'>
          <Row className ='form-line'>
            <FormControl component="fieldset">
              <FormLabel component="legend">Transport Type:</FormLabel>
              <RadioGroup row aria-label="transportType" name="searchBy" value={transportType} onChange={(e)=>updateTransportType(e)}>
                <FormControlLabel value="car" control={<Radio />} label="Car" />
                <FormControlLabel value="bus" control={<Radio />} label="Bus" />
                <FormControlLabel value="train" control={<Radio />} label="Train" />
                <HelpIcon message ='Select your mode of transportation.'/>
              </RadioGroup>
            </FormControl>
          </Row>
        </Container>
      </Col>
      <Col xs={1} sm={1} md={1} lg={2} xl={3}>
        &nbsp;
      </Col>
    </Row>

    {transportType==='car'?
      <CarForm addCarbonCostItem={props.addCarbonCostItem}/>
    :null}

    {transportType==='bus'?
      <BusForm addCarbonCostItem={props.addCarbonCostItem}/>
    :null}

    {transportType==='train'?
      <TrainForm addCarbonCostItem={props.addCarbonCostItem}/>
    :null}

  </>
)}

export default TransportForm;
