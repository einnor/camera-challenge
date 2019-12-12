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

  stream: MediaStream | null = null;;

  video: HTMLVideoElement | null = null;

  constraints = {
    video: true,
  };

  componentDidMount() {
    if(!this.hasGetUserMedia()) {
      console.log('Unable to access user media');
      return;
    }
    // Can access user media. Proceed to initiate the stream
    this.initiateStream();
  }

  // Check if we have access to the user media
  hasGetUserMedia = () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);

  initiateStream = () => {
    navigator.mediaDevices
      .getUserMedia(this.constraints)
      .then((stream) => this.handleUserMedia(stream))
      .catch(this.handleUserMediaError);
  }

  handleUserMedia = (stream: MediaStream) => {
    if (this.video) {
      this.video.srcObject = stream;

      // TODO On Camera Access Success
    }
  }

  handleUserMediaError = (error: any) => {
    // Error
  };

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
