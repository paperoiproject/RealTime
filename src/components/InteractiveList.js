import React from 'react';
import { withStyles } from '@material-ui/core/styles';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
  },
  title: {
  },
});


function generate(element) {
  return [0].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const InteractiveList = (props) => {
  const {classes} = props;
  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);
  return (
    <div className={classes.root}>
          <div className={classes.demo}>
            <List dense={dense} id={props.id}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={props.text}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Delete" onClick={() => props.deleteList(props.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>


    </div>
  );
}

export default withStyles(styles)(InteractiveList);
