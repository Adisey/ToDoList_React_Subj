// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { createTask, fillTasks, removeTask, favoriteTask, completeTask, changeTask } from './workers';

function* watcherFillTasks () {
    yield takeEvery(type.FETCH_TASKS_ASYNC, fillTasks);
}
function* watcherCrateTask () {
    yield takeEvery(type.CREATE_TASK_ASYNC, createTask);
}
function* watcherRemoveTask () {
    yield takeEvery(type.REMOVE_TASK_ASYNC, removeTask);
}
function* watcherCompleteTask () {
    yield takeEvery(type.COMPLETE_TASK_ASYNC, completeTask);
}
function* watcherChangeTask () {
    yield takeEvery(type.CHANGE_TASK_ASYNC, changeTask);
}
export function* watcherTasks () {
    yield all([
        call(watcherFillTasks),
        call(watcherCrateTask),
        call(watcherRemoveTask),
        call(watcherCompleteTask),
        call(watcherChangeTask)
    ]);
}
