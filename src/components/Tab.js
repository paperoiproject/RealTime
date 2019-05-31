import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import green from '@material-ui/core/colors/green';


function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3}}>
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
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
});

class TestTab extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
      {
        color: 'primary',
        className: classes.fab,
        icon: <AddIcon />,
      },
      {
        color: 'secondary',
        className: classes.fab,
        icon: <EditIcon />,
      },
      {
        color: 'inherit',
        className: classNames(classes.fab, classes.fabGreen),
        icon: <UpIcon />,
      },
    ];

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
        
          <Typography variant="h4" color="inherit">
            PaPeRo Editor
          </Typography>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            //centered
          >
            <Tab label="op. list" />
            <Tab label="create scenario" />
            <Tab label="time table" />
            <Tab label="real time op." />
          </Tabs>
        </AppBar>
          <TabContainer dir={theme.direction}></TabContainer>
          <TabContainer dir={theme.direction}></TabContainer>
          <TabContainer dir={theme.direction}></TabContainer>
        {fabs.map((fab, index) => (
          <Zoom
            key={fab.color}
            in={this.state.value === index + 1}//placement of icon on page ex. "index + 1" is page2
            timeout={transitionDuration}
            style={{
              transitionDelay: `${this.state.value === index ? transitionDuration.exit : 0}ms`,
            }}
            unmountOnExit
          >
            <Fab className={fab.className} color={fab.color}>
              {fab.icon}
            </Fab>
          </Zoom>
        ))}
      </div>
    );
  }
}

Tab.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TestTab);