import { Image } from './app.types';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import * as actions from './app.actions';
import * as sagas from './app.sagas';
import { APIError } from '../../../@types/APIError';
import Api from '../../../services/Api';
import { FluxStandardAction } from '../../../@types/FluxStandardActions';

describe('Image - Sagas', () => {

  const action: FluxStandardAction = {
    type: actions.SEND_CAPTURED_IMAGE_REQUEST,
    payload: { imageString: 'imageString' }
  };

  const error: APIError = {
    error: 'An incoming error',
    message: 'Heads up',
    status: 500
  };

  it('should handle a successful request to send captured image', () => {
    const expectedResult: Image = { imageUrl: 'https://example.com/images/sample.jpeg' };

    return expectSaga(sagas.sendCapturedImage, action)
      .provide([[matchers.call(Api.sendCapturedImage, action.payload.imageString), expectedResult]])
      .put(actions.sendCapturedImageSuccess(expectedResult))
      .run();
  });

  it('should handle unsuccessfully sending a captured image', () => {
    return expectSaga(sagas.sendCapturedImage, action)
      .provide([[matchers.call(Api.sendCapturedImage, action.payload.imageString), Promise.reject(error)]])
      .put(actions.sendCapturedImageFailure(error))
      .run();
  });
});
