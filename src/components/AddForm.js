import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';


const styles = theme => ({
  root: {
  },
});

const AddForm = (props)=>{
  const { classes } = props;
  return(
    <div className={classes.root}>
      <DialogContent>
          <TextField
            autoFocus
            fullWidth
            onChange={e => props.changeAddText(e)}
          />
        </DialogContent>
    </div>
  );
}


export default withStyles(styles)(AddForm);