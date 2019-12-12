import React, { Component } from 'react';

import { Camera } from '../../components';

import './style.scss';

class App extends Component {
  render() {
return (
  <div className="page-container">
    <Camera />
  </div>
);
  }
}

export default App;