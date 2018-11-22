// Core
import { put, apply } from 'redux-saga/effects';
import { v4 } from 'uuid';

//import { api } from '../../../../REST';
import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* createTask ({ payload: taskName }) {
    try {
        yield put(uiActions.startSpinning());
        // Когда будет сервер
        // const response = yield apply(api, api.tasks.create, [taskName]);
        // const { data: task, message } = yield apply(response, response.json);
        // if (response.status !== 200) {
        //     throw new Error(message);
        // }

        const task =  {
            "id":        v4(),
            "message":      taskName,
            "completed": false,
        };

        yield put(tasksActions.createTask(task));
    } catch (error) {
        yield put(uiActions.emitError(error, 'createTask worker'));
    } finally {
        yield put(uiActions.stopSpinning());

    }
}
