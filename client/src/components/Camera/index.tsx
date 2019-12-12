import React, { Component } from 'react';

import { Button } from '..'
import { ICamera } from '../../@types/interfaces';

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
    if (!this.state.hasUserMedia) {
      return null
    }

    const canvas = this.getCanvas();

    if (!canvas) {
      this.props.onCaptureImageFail()
      return;
    }

    const image = canvas.toDataURL(this.props.imageFormat, this.props.imageQuality);

    // TODO stop the tracks

    this.props.onCaptureImageSuccess(image);
  };

  getCanvas() {
    if (!this.video || !this.state.hasUserMedia) {
      return;
    }

    if (!this.context) {
      const canvas = document.createElement('canvas');

      if (!this.canvas) {
        return;
      }
      canvas.width = this.props.width;
      canvas.height = this.props.height;

      this.canvas = canvas;
      this.context = canvas.getContext('2d');
    }

    if (!this.context) {
      return;
    }

    this.context.imageSmoothingEnabled = this.props.imageSmoothingEnabled;
    this.context.drawImage(this.video, 0, 0, this.props.width, this.props.height);

    return this.canvas;
  }

  handleUserMedia = (stream: MediaStream) => {
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
        <Button onClick={() => {}} text='Take Photo' />
      </div>
    );
  }
}

export default Camera;
