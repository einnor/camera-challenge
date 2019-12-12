import React, { Component } from 'react';

import { ICamera } from '../../@types/interfaces';

type State = {};

class Camera extends Component <ICamera, State> {

  static defaultProps = {
    height: 300,
    width: 500,
  };

  video: HTMLVideoElement | null = null;

  render() {

    const { width, height } = this.props;
    return (
      <div className="camera-container">
        <video ref={ref => this.video = ref} autoPlay style={{ width: `${width}px`, height: `${height}px` }} />
      </div>
    );
  }
}

export default Camera;
