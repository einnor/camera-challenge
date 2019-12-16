import { all } from 'redux-saga/effects';

import imageWatcher from '../container/App/store/app.sagas';

export default function* rootSaga() {
  yield all([
    imageWatcher,
  ]);
}