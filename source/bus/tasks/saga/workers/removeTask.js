// Core
import { put, apply } from 'redux-saga/effects';

//import { api } from '../../../../REST';
import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* removeTask ({ payload: taskId }) {
    try {
        yield put(uiActions.startSpinning());
        // Когда будет сервер сделать к нему обрашение
        yield put(tasksActions.removeTask(taskId));
        yield put(tasksActions.makeOrderList());
    } catch (error) {
        yield put(uiActions.emitError(error, 'removeTask ${error}'));
    } finally {
        yield put(uiActions.stopSpinning());

    }
}
