import React from 'react';
import { connect } from 'react-redux';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }

  componentDidMount() {
    if (this.props.checked === true) {
      this.setState({
        checked: true
      });
    } else {
      this.setState({
        checked: false
      });
    }
  }


  handleChange = () => {
    const { checked } = this.state;
    this.setState(
      {
        checked: !checked
      }
    );
  };

  render() {
    const { checked } = this.state;
    return (
      <div className="toggle-switch">
        <input onChange={this.handleChange} type="checkbox" className="toggle-switch__checkbox" checked={checked} />
        <div className="toggle-switch__knobs">{checked ? <p>Si</p> : <p>No</p>}</div>
        <div className="toggle-switch__layer" />
      </div>
    );
  }
}

export default (connect(null, {})(ToggleSwitch));
