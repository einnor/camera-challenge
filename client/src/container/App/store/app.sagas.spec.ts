import { Image } from './app.types';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import * as actions from './app.actions';
import * as sagas from './app.sagas';
import { APIError } from '../../../@types/APIError';
import Api from '../../../services/Api';
import { FluxStandardAction } from '../../../@types/FluxStandardActions';

describe('Image - Sagas', () => {
  it('should handle a successful request to send captured image', () => {
    const expectedResult: Image = { imageUrl: 'https://example.com/images/sample.jpeg' };
    const action: FluxStandardAction = {
      type: actions.SEND_CAPTURED_IMAGE_REQUEST,
      payload: { imageString: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAEsAfQDASIAAhEBAxEB/8QAHQAAAQUBAQEBAAAAAAAAAAAABgMEBQcIAgABCf/EAEsQAAEDAgUBBQQIBAQDBwIHAAECAxEABAUGEiExQQcTIlFhcYGRoQgUMkKxwdHwFSNS4RYkYvEzcpIXJTRDgqKyU2Mnc4OEk8LS/8QAGwEAAgMBAQEAAAAAAAAAAAAAAgMBBAUABgf/xAAyEQACAgICAgIABAUEAQUAAAAAAQIRAyESMQRBIlEFEzJhFHGBkbFCU...' }
    };

    return expectSaga(sagas.sendCapturedImage, action)
      .provide([[matchers.call(Api.sendCapturedImage, action.payload), expectedResult]])
      .put(actions.sendCapturedImageSuccess(expectedResult))
      .run();
  });
});
