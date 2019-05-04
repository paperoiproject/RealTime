import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Add from '@material-ui/icons/Add';



const styles = theme => ({
  root: {
    width: "25vw",
    marginTop: "2vh",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    wordWrap: 'break-word'
  },
  addTypographytTab: {
    width: "20vw",
    paddingLeft: "1vw"
  },
  addTypographytContent: {
    width: "20vw",
    paddingLeft: "1vw"
  }
});

const selectBotton = (type) =>{
  if(type === "tab"){
    return(<Add /> )
  }else{
    return(<DeleteIcon /> )
  }
}

const selectTypography = (props, type, text) =>{
  const { classes } = props;
  if(type === "tab"){
    return(
      <Typography className={classes.addTypographytTab} align="left" variant="h5">
        {text}
      </Typography>
    )
  }else{
    return(
      <Typography className={classes.addTypographytContent} align="left">
        {text}
      </Typography>
    )
  }
}



const Board = (props)=>{
  const { classes } = props;
  return(
    <div className={classes.root}>
      <Paper className={classes.root} elevation={1}>
        {selectTypography(props, props.type, props.text)}
        <IconButton className={classes.button} onClick={e => {props.onClick(e)}}>
          {selectBotton(props.type)}
        </IconButton>
      </Paper>
    </div>
  );
}


export default withStyles(styles)(Board);










