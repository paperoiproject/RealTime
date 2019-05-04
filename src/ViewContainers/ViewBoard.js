import React from 'react';
import Board from '../components/Board.js';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {},
  input: {}
});

const ViewBoard = (props) => {
    return (
      //(this.props.type === "first") ?
      <div className="">
        <Board type={props.type} text={props.text} onClick={props.onClick}/>
      </div> /*:

      <div className="">
        <Board text={this.props.text}>
          <IconButton className={classes.button} aria-label="Delete">
            <PhotoCamera />
          </IconButton>
        </Board>
      </div>
      */
    );
}

export default withStyles(styles)(ViewBoard);



