import React from 'react';
import {Row} from 'react-bootstrap';

const CarbonTotal = props => {

return(
  <>
    {props.footprint>0?
      <>
      <Row className ='centered-children'>
        <p className ='centered-text roaming-text medium-link-text'>{props.label}</p>
      </Row>
      <Row className ='centered-children'>
        <p className ='centered-text roaming-text medium-link-text'>{(props.footprint).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })}</p>
      </Row>
      </>

    :
    <>
      <Row className ='centered-children'>
        <p className ='centered-text roaming-text medium-link-text'>{props.label}</p>
      </Row>
      <Row className ='centered-children'>
        <p className ='centered-text roaming-text medium-link-text'>0</p>
      </Row>
    </>
  }

  </>
)}

export default CarbonTotal;
