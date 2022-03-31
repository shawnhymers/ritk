import { Container, Row, Col, Button,Dropdown} from 'react-bootstrap';
import React from 'react';
import CustomToggle from "./customToggle";
import  { useState } from 'react';



const CustomOptions = props =>{

  return(
    <>
      {props.displayKeys.length>1 ?
      <>
        {props.displayKeys.length ===2 ?
          <>
            <Row onClick = {(selection)=>props.select(props.option)}
                 style ={{margin:'0vh'}}
                 className ='dropdown-item '>
              {props.option[props.displayKeys[0]]+", "+props.option[props.displayKeys[1]]}
            </Row>
          </>
        :null}
        {props.displayKeys.length ===3 ?
          <>
            <Row onClick = {(selection)=>props.select(props.option)}
                style ={{margin:'0vh'}}
                 className ='dropdown-item '>
              {props.option[props.displayKeys[0]]+", "+props.option[props.displayKeys[1]]+ ", "+props.option[props.displayKeys[2]]}
            </Row>
          </>
        :null}
      </>:
      <Row onClick = {(selection)=>props.select(props.option)}
           style ={{margin:'0vh'}}
           className ='dropdown-item'>
        {props.option[props.displayKeys[0]]}
      </Row>
    }




    </>
  )
}

const SearchDrop = props => {

  // const [searchValue, setSearchValue] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);

  function updateSearch(e){
    console.log('updating search')
    props.setSearchValue(e.target.value)
    // if (e.target.value.length>0) {
      console.log('showing dropdown')
      console.log(props.options)
      setShowDropDown(true)
    // }
    // else {
    //   console.log('hiding dropdown')
    //   setShowDropDown(false)
    // }
    props.updateOptions(e)
    // setOptions(newOptions)
  }
  function select(selection){
    console.log('searchdrop selection')
    console.log(selection)

    let display = ''
    if (props.displayKeys.length>1) {
      display = selection[props.displayKeys[0]]
      for (var i = 1; i < props.displayKeys.length; i++) {
        display = display + " ("+ selection[props.displayKeys[i]]+ ")"
      }
    }
    else {
      display = selection[props.displayKeys[0]]
    }

    props.setSearchValue(display)
    setShowDropDown(false);
    props.selectOption(selection)
  }
  function showDefaultOptions(){
      setShowDropDown(true);
  }
  function cancelOptions(){
    console.log('canceling options')
    setTimeout(() => {
     setShowDropDown(false);
  },100)

  }

return(
  <>
    <Container>
      <Row>
        <Col className =''>
        <form autoComplete="off" >
          <Row className ='nice-input-wrapper'>

              <input style ={{minWidth:'25vw'}}
                    className ={props.invalidInput? 'error-input':''}
                     type = 'text'
                     id= {props.inputId}
                     value = {props.searchValue}
                     name = {props.inputName}
                     placeholder={props.inputLabel}
                     onChange ={(e)=>updateSearch(e)}
                     onFocus = {showDefaultOptions}
                     onBlur = {cancelOptions}/>
              <label htmlFor={props.inputId}
                     className ={props.invalidInput? 'error-label':''}>

                {props.inputLabel}

              </label>

          </Row>
          </form>
        </Col>
      </Row>
      {showDropDown?
        <>
          <Row >
            <Container className ='raised-borders round-borders ' style ={{width:'95%',margin:'0vh',padding:'0vh'}}>
              {props.options.slice(0,10).map((option, i)=>{return <CustomOptions option = {option}
                                                                                 displayKeys = {props.displayKeys}
                                                                                 select = {select}
                                                                                 valueKey ={props.valueKey}
                                                                                 multiValueKeys = {props.multiValueKeys}
                                                                                 key={option[props.keyFields[0]]+option[props.keyFields[1]]+option[props.keyFields[2]]}/>})}
            </Container>
          </Row>
        </>
      :null}

    </Container>

  </>
)}

export default SearchDrop;
