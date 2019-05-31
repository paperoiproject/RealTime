import React from 'react';
import Button from '../components/Button.js';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {},
  input: {}
});

const ViewButton = (props) => {
    return (
      //(this.props.type === "first") ?
      <div className="">
        <Button type={props.type} text={props.text} onClick={props.onClick}/>
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

export default withStyles(styles)(ViewButton);



