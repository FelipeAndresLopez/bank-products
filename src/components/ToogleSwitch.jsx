import React from 'react';
import { connect } from 'react-redux';
import { showOtherProducts } from '../Actions/Index';

const handleChange = (props) => {
  props.showOtherProducts(!props.showOtherBanks);
};

const ToggleSwitch = (props) => {
  const showOtherBanks = props.showOtherBanks || false;
  return (
    <div className="toggle-switch">
      <input onChange={() => handleChange(props)} type="checkbox" className="toggle-switch__checkbox" checked={showOtherBanks} />
      <div className="toggle-switch__knobs">{showOtherBanks ? <p>Si</p> : <p>No</p>}</div>
      <div className="toggle-switch__layer" />
    </div>
  );
}

const mapStateToProps = (reducer) => reducer;

export default (connect(mapStateToProps, { showOtherProducts })(ToggleSwitch));
