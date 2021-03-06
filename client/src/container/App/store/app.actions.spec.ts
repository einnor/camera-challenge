import * as actions from './app.actions';
import { APIError } from '../../../@types/APIError';

describe('Image - Actions', () => {
  let error: APIError;

  beforeAll(() => {
    error = {
      error: 'Here is an error',
      message: 'Some error about failure',
      status: 500
    };
  });

  it('should send captured image', () => {
    const imageString = 'imageString'
    const expectedAction = {
      type: actions.SEND_CAPTURED_IMAGE_REQUEST,
      payload: { imageString },
    };

    const actionCreator = actions.sendCapturedImageRequest(imageString);
    expect(actionCreator).toEqual(expectedAction);
  });

  it('should return payload on success', () => {
    const payload = { imageUrl: 'https://example.com/images/sample.jpg' };
    const expectedAction = {
      type: actions.SEND_CAPTURED_IMAGE_SUCESS,
      payload: payload
    };

    const actionCreator = actions.sendCapturedImageSuccess(payload);
    expect(actionCreator).toEqual(expectedAction);
  });

  it('should return error on failure', () => {
    const expectedAction = {
      type: actions.SEND_CAPTURED_IMAGE_FAILURE,
      payload: { error },
      error: true,
    };

    const actionCreator = actions.sendCapturedImageFailure(error);
    expect(actionCreator).toEqual(expectedAction);
  });
});