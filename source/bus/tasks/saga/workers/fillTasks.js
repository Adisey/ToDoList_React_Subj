// Core
import { put, apply } from 'redux-saga/effects';

// import { api } from "../../../../REST";
import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fillTasks () {
    try {
        yield put(uiActions.startSpinning());
        // Когда будет сервер
        // const response = yield apply(api, api.tasks.fetch);
        // const { data: task, message } = yield apply(response, response.json);
        // if (response.status !== 200) {
        //     throw new Error(message);
        // }
        // yield put(tasksActions.fillTasks(task));
    } catch (error) {
        yield put(uiActions.emitError(error, 'fillTasks worker'));
    } finally {
        yield put(uiActions.stopSpinning());

    }
}