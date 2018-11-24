// Core
import { put, apply } from 'redux-saga/effects';

import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* changeTask ({ payload:  task }) {
    try {
        yield put(uiActions.startSpinning());
        // Когда будет сервер сделать к нему обрашение

        yield put(tasksActions.changeTask(task));
    } catch (error) {
        yield put(uiActions.emitError(error, 'changeTask ${error}'));
    } finally {
        yield put(uiActions.stopSpinning());

    }
}
