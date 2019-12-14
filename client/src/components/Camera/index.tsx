import React, { Component } from 'react';

import { Button } from '..'
import { ICamera } from '../../@types';

import './style.scss';

type State = {
  hasUserMedia: boolean;
};

class Camera extends Component <ICamera, State> {

  static defaultProps = {
    height: 300,
    width: 500,
    imageQuality: 0.9,
    imageFormat: 'image/jpeg',
    imageSmoothingEnabled: true,
    onCameraAccessFail: (error: any) => {},
    onCameraAccessSuccess: () => {},
    onCaptureImageSuccess: (image: any) => {},
    onCaptureImageFail: () => {},
  };

  state = {
    hasUserMedia: false,
  };

  canvas: HTMLCanvasElement | null = null;

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
    if (!this.state.hasUserMedia) {
      this.initiateStream();
    }
  }

  // Check if we have access to the user media
  hasGetUserMedia = () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);

  initiateStream = () => {
    navigator.mediaDevices
      .getUserMedia(this.constraints)
      .then((stream) => this.handleUserMedia(stream))
      .catch(this.handleUserMediaError);
  }

  onCaptureImage = () => {
    const canvas = this.getCanvas();

    if (!canvas) {
      return;
    }

    const image = canvas.toDataURL(this.props.imageFormat, this.props.imageQuality);

     // TODO stop the tracks

    this.props.onCaptureImageSuccess(image);
  };

  getCanvas() {
    const canvas = document.createElement('canvas');

    canvas.width = this.props.width;
    canvas.height = this.props.height;

    this.canvas = canvas;

    const context = this.canvas.getContext('2d');
    if (!context || !this.video) {
      return;
    }

    context.imageSmoothingEnabled = false;
    context.canvas.height = this.props.height;
    context.canvas.width = this.props.width;
    context.drawImage(this.video, 0, 0, this.props.width, this.props.height);

    return canvas;
  }

  handleUserMedia = (stream: MediaStream) => {
    this.stream = stream;

    if (this.video) {
      this.video.srcObject = stream;
      this.setState({ hasUserMedia: true });

      this.props.onCameraAccessSuccess();
    }
  }

  handleUserMediaError = (error: any) => {
    this.props.onCameraAccessFail(error);
  };

  render() {

    const { width, height } = this.props;
    return (
      <div className="camera-container">
        <video ref={ref => this.video = ref} autoPlay style={{ width, height, marginBottom: 20 }} />
        <Button onClick={this.onCaptureImage} text='Take Photo' />
      </div>
    );
  }
}

export default Camera;
