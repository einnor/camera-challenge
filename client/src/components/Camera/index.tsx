import React, { Component } from 'react';

import { Button } from '..'
import { ICamera } from '../../@types/interfaces';

import './style.scss';

type State = {};

class Camera extends Component <ICamera, State> {

  static defaultProps = {
    height: 300,
    width: 500,
  };

  video: HTMLVideoElement | null = null;

  componentDidMount() {
    if(!this.hasGetUserMedia()) {
      console.log('Unable to access user media');
      return;
    }
    // Can access user media
  }

  hasGetUserMedia = () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);

  render() {

    const { width, height } = this.props;
    return (
      <div className="camera-container">
        <video ref={ref => this.video = ref} autoPlay style={{ width, height, marginBottom: 20 }} />
        <Button onClick={() => {}} text='Take Photo' />
      </div>
    );
  }
}

export default Camera;
