import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
  root: {
    color: '#91A98F',
    '&$checked': {
      color: '#91A98F',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default GreenRadio;
