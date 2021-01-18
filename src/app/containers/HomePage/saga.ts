import { call, put, select, takeLatest } from 'redux-saga/effects';
import { saveAs } from 'file-saver';
import { University } from 'types/University';
import { request } from 'utils/request';
import { selectSearchTerm, selectUniversities } from './selectors';
import { homePageActions } from './slice';

export function* loadUniversities() {
  const searchTerm = yield select(selectSearchTerm);
  const requestURL = `http://universities.hipolabs.com/search?name=${searchTerm}`;

  try {
    const universities: University[] = yield call(request, requestURL);
    yield put(homePageActions.loadSuccess(universities));
  } catch (err) {
    yield put(homePageActions.loadError(err));
  }
}

export function* saveToJSON() {
  const universities: University[] = yield select(selectUniversities);
  const data: string = JSON.stringify(universities);
  const blob = new Blob([data], { type: 'application/json;charset=utf-8' });
  saveAs(blob, 'users.json');
}

export function* homePageSaga() {
  yield takeLatest(homePageActions.loadUniversities, loadUniversities);
  yield takeLatest(homePageActions.saveToJSON, saveToJSON);
}
