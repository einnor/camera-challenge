import Api from '../../../services/Api';
import { SagaIterator } from 'redux-saga';
import * as actions from './app.actions';
import { takeLatest } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import { FluxStandardAction } from '../../../@types/FluxStandardActions';

export default function* imageWatcher(): SagaIterator {
  yield takeLatest(actions.SEND_CAPTURED_IMAGE_REQUEST, sendCapturedImage);
}

export function* sendCapturedImage(action: FluxStandardAction): SagaIterator {
  const { imageString } = action.payload;
  try {
    // Make API request.
    const payload = yield call(Api.sendCapturedImage, imageString);

    // Dispatch action for successful request.
    yield put(actions.sendCapturedImageSuccess(payload));
  } catch (error) {
    // Dispatch action for failed request.
    yield put(actions.sendCapturedImageFailure(error));
  }
}
