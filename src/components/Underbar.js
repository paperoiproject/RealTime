import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ArrowB from '@material-ui/icons/ArrowBackIos';
import ArrowF from '@material-ui/icons/ArrowForwardIos';
import Lists from '../components/Lists';

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 1}}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 600,
    position: 'relative',
    minHeight: 100,
  },
});

class Underbar extends React.Component {
  state = {
    value: 0,
  };



  handleChangeUp = index => {
    this.setState({ value: this.state.value + 1 });
  };

  handleChangeDown = index => {
    this.setState({ value: this.state.value - 1 });
  };

  newText(text){
    this.refs.Lists.newText(text)
  }

  render() {
    const { classes, theme } = this.props;

    return (
      
      <div className={classes.root}>
        <Lists nlist = {this.state.value} />
        <BottomNavigation>
          <TabContainer dir={theme.direction}>
            <BottomNavigationAction label="ArrowB" icon={<ArrowB />} onClick={()=>{this.handleChangeUp()}}/>
          </TabContainer>
          <TabContainer dir={theme.direction}> 
            {this.state.value % 3 === 0 ? <h3>daytime</h3> :
             this.state.value % 3 === 1 ? <h3>morning</h3> :
             <h3>evening</h3>}
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <BottomNavigationAction label="ArrowF" icon={<ArrowF />} onClick={()=>{this.handleChangeDown()}}/>
          </TabContainer>
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Underbar);