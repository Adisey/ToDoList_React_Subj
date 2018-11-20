// Core
import { put, apply } from 'redux-saga/effects';

// import { api } from '../../../../REST';
import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* changeTask ({ payload:  task }) {
    try {
        yield put(uiActions.startSpinning());
        // Когда будет сервер
        // const response = yield apply(api, api.tasks.edit, [task]);
        // if (response.status !== 204) {
        //     throw new Error(message);
        // }
        yield put(tasksActions.changeTask(task));
    } catch (error) {
        yield put(uiActions.emitError(error, 'changeTask ${error}'));
    } finally {
        yield put(uiActions.stopSpinning());

    }
}