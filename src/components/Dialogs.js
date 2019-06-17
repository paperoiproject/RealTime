import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles';

import Search from './Dialog_Search.js'
import '../App.css';

const useStyles = makeStyles =>({
  root: {
    padding: '2px 4px',
    display: 'relative',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  dialogPaper:{
    minHeight: '80vh',
    maxHeight: '80vh',
  }
});

const Dialogs = (props) => {
  const {classes} = props;
  const [values, setValues] = React.useState({
    value: 0,
    open: false,
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleFlagOn = () => {
    setValues({ ...values, open: true});
  };
  const handleFlagOff = () => {
    setValues({ ...values, open: false});
  };
  const onChangeText = (s) => {
    setValues({ ...values, value: s});
  };
  console.log(values.value)
  return (
    <div>
      <Fab color="secondary" onClick={handleFlagOn}>
        <AddIcon/>
      </Fab>
      <Dialog
        open={values.open}
        onClose={handleFlagOff}
        aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Add</DialogTitle>
        <DialogContent >
          <Search onChangeText={(s) => onChangeText(s)}/>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleFlagOff();
              props.addList(values.value);
            }}
            color="primary">
            Add
          </Button>
          <Button onClick={handleFlagOff} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Dialogs;