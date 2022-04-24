import React from 'react';
import  { useState } from 'react';
import {MdHelp } from "react-icons/md";

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

const HelpIcon = props => {
  const [showMessage, setShowMessage] = useState(false)

  function toggleMessage(){
    console.log('toggling message')
    setShowMessage(!showMessage)
  }
return(
  <>
    <Tooltip title={props.message} arrow>
      <IconButton>
        <MdHelp onClick ={toggleMessage} />
      </IconButton>
    </Tooltip>
  </>
)}

export default HelpIcon;
