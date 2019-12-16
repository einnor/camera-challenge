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

  onCaptureImageSuccess = (image: string) => {
    this.setState({ image });
    this.props.sendCapturedImageRequest(image);
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
