import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';


import AddForm from '../components/AddForm.js';
import AddButtons from '../components/AddButtons.js';

const styles = theme => ({
  dialog_paper: {
      width: '50vw',
  },
});

const ViewAddModal = (props) => {
  const { classes } = props;
  return (
    <div className="">
      <Dialog classes={{
        paper: classes.dialog_paper,
        }}
        open={props.open}
        onClose={props.onClose} >
        <DialogTitle id="form-dialog-title">Add task</DialogTitle>
        <AddForm
         changeAddText={e => {props.changeAddText(e)}}/>
        <AddButtons
          onClose={() => props.onClose()}
          addCard={() => props.addCard()}/>
      </Dialog>
   </div>
  );
}

export default withStyles(styles)(ViewAddModal);