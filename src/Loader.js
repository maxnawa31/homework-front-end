import React from 'react';
import './App.css';

const Loader = props => (
  <div style={props.loading ? {} : { display: 'none' }} className="lds-roller">
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
