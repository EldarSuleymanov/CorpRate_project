import {put, delay, takeEvery} from 'redux-saga/effects';
import {setSplashEnd, SET_START } from './actions';

export function* workerForSplash() {
    yield delay(6000);
    yield put(setSplashEnd(false));
}

export function* watcherSplash() {
    yield takeEvery(SET_START, workerForSplash);
}