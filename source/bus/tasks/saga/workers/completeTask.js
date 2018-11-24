// Core
import { put, apply } from 'redux-saga/effects';

import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* completeTask ({ payload:  task }) {
    try {
        yield put(uiActions.startSpinning());
        // Когда будет сервер сделать к нему обрашение
        // А пока так ----------
        task.completed = !task.completed;
        // А пока так ==========
        yield put(tasksActions.completeTask(task));
    } catch (error) {
        yield put(uiActions.emitError(error, 'completeTask ${error}'));
    } finally {
        yield put(uiActions.stopSpinning());

    }
}
