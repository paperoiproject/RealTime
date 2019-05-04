import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

const styles = theme => ({
  root: {
  },
});

const AddButtons = (props)=>{
  const { classes } = props;
  return(
    <div className={classes.root}>
       <DialogActions>
          <Button onClick={e => props.onClose()} color="primary">
            Cancel
          </Button>
          <Button onClick={e => props.addCard()} color="primary">
            Subscribe
          </Button>
        </DialogActions>
    </div>
  );
}


export default withStyles(styles)(AddButtons);