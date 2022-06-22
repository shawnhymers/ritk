import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import  { useState } from 'react';
import CarForm from "./car"
import BusForm from "./bus"
import TrainForm from "./train"
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import HelpIcon from "../../../sharedComponents/helpIcon"
import GreenRadio from "../../../sharedComponents/formComponents/greenRadio"

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
        <Container className ='form-container white'>
          <Row className ='form-line'>
            <FormControl component="fieldset">
              <FormLabel component="legend">Transport Type:</FormLabel>
              <RadioGroup row aria-label="transportType" name="searchBy" value={transportType} onChange={(e)=>updateTransportType(e)}>
                <FormControlLabel value="car" control={<GreenRadio />} label="Car" />
                <FormControlLabel value="bus" control={<GreenRadio />} label="Bus" />
                <FormControlLabel value="train" control={<GreenRadio />} label="Train" />
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
