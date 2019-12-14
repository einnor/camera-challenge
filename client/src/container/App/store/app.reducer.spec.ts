import { ImageState, Image } from './app.types';
import imageReducer, { initialState } from './app.reducer';
import { FluxStandardAction } from '../../../@types/FluxStandardActions';
import * as actions from './app.actions';
import { APIError } from '../../../@types/APIError';

describe('Image - Reducer', () => {
  let state: ImageState;

  beforeEach(() => (state = { ...initialState }));

  it('should handle action: SEND_CAPTURED_IMAGE_REQUEST', () => {
    const action: FluxStandardAction = {
      type: actions.SEND_CAPTURED_IMAGE_REQUEST
    };

    const reduced = imageReducer(state, action);

    expect(reduced.isFetching).toEqual(true);
    expect(reduced.error).toBeNull();
    expect(reduced.data).toBeNull();
  });

  it('should handle action: SEND_CAPTURED_IMAGE_SUCESS', () => {
    const payload: Image = {
      imageUrl: 'https://exmaple.com/images/sample.jpg'
    };

    const action: FluxStandardAction = {
      type: actions.SEND_CAPTURED_IMAGE_SUCESS,
      payload
    };

    const reduced = imageReducer(state, action);

    expect(reduced.isFetching).toEqual(false);
    expect(reduced.data).toEqual(payload);
    expect(reduced.error).toBeNull();
  });

  it('should handle action: SEND_CAPTURED_IMAGE_FAILURE', () => {
    const payload: APIError = {
      error: 'Here is an error',
      message: 'Some error about failure',
      status: 500
    };

    const action: FluxStandardAction = {
      type: actions.SEND_CAPTURED_IMAGE_FAILURE,
      payload,
      error: true
    };

    const reduced = imageReducer(state, action);

    expect(reduced.isFetching).toEqual(false);
    expect(reduced.data).toBeNull();
    expect(reduced.error).toEqual(payload);
  });
});
