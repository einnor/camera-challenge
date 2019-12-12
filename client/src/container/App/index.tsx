import React, { Component } from 'react';

import { Camera } from '../../components';

import './style.scss';

type State = {
  image: string;
};

class App extends Component <{}, State> {

  state = {
    image: '',
  };

  onCaptureImageSuccess = (image: string) => this.setState({ image });

  render() {
    return (
      <div className="page-container">
        {
          this.state.image ? (
            <div>Image</div>
          ) : (
            <Camera onCaptureImageSuccess={this.onCaptureImageSuccess} />
          )
        }
      </div>
    );
  }
}

export default App;