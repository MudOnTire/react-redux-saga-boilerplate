import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import 'regenerator-runtime/runtime';
import { FETCH_POST, FETCH_POST_SUCCEED, FETCH_POST_FAIL, CREATE_POST, CREATE_POST_SUCCEED, CREATE_POST_FAIL } from './actions/types';
import API from './api';

function* fetchPosts() {
  console.log('will fetch post');
  try {
    const items = yield call(API.fetchPosts);
    console.log(items);
    yield put({ type: FETCH_POST_SUCCEED, payload: items });
  } catch (e) {
    yield put({ type: FETCH_POST_FAIL, e });
  }
}

function* createPost(actions) {
  try {
    const item = yield call(API.createPost, actions.payload);
    yield put({ type: CREATE_POST_SUCCEED, payload: item });
  } catch (e) {
    yield put({ type: CREATE_POST_FAIL, e });
  }
}

function* mySaga() {
  yield takeLatest(FETCH_POST, fetchPosts);
  yield takeLatest(CREATE_POST, createPost);
}

export default mySaga;