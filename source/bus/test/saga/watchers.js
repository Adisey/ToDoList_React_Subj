
// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { test,  } from './workers';

function* watcherTest () {
    yield takeEvery(type.TEST_ASYNC, test);
}
export function* watcherTests () {
    yield all([
        call(watcherTest),
    ]);
}
