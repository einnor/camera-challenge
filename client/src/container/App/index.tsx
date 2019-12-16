import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as selectors from './store/app.selectors';
import { sendCapturedImageRequest } from './store/app.actions';
import { Camera } from '../../components';
import { IGlobalState, IApp } from '../../@types';

import './style.scss';

type State = {
  image: string;
};

class App extends Component <IApp, State> {

  state = {
    image: '',
  };

  b64toBlob = (b64Data: string, contentType: string, sliceSize: number = 512): Blob => {
    contentType = contentType || '';

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

  onCaptureImageSuccess = (imageString: string) => {
    this.setState({ image: imageString }, () => {

      // Split the base64 string in data and contentType
      const block = imageString.split(";");

      // Get the content type of the image
      const contentType = block[0].split(":")[1];

      // get the real base64 content of the file
      const realData = block[1].split(",")[1];

      // Convert it to a blob to upload
      const blob = this.b64toBlob(realData, contentType);
      this.props.sendCapturedImageRequest(blob);
    });
  };

  render() {
    return (
      <div className="page-container">
        {
          this.state.image ? (
            <div className="image-container">
              <img src={this.state.image} alt="Taken by the camera" />
            </div>
          ) : (
            <Camera onCaptureImageSuccess={this.onCaptureImageSuccess} />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state: IGlobalState) => ({
  isFetching: selectors.getIsFetching(state),
  imageUrl: selectors.getImageUrl(state),
  error: selectors.getError(state)
});

const mapDispatchToProps = {
  sendCapturedImageRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
