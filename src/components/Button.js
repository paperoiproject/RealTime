import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  static propTypes = {
    func: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.func(this.state.str);
  };

  render() {
    return (
      <div>
        <input type="button" onClick={() => this.onClick()} value={'ok'} />
      </div>
    );
  }
}

export default Button;