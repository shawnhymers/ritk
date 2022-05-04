import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

const YellowRadio = withStyles({
  root: {
    color: '#E2B54B',
    '&$checked': {
      color: '#E2B54B',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default YellowRadio;
