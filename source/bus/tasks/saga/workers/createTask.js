// Core
import { put, apply, select } from 'redux-saga/effects';
import { v4 } from 'uuid';

//import { api } from '../../../../REST';
import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* createTask ({ payload: message }) {
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
            message,
            "completed": false,
        };

        yield put(tasksActions.createTask(task));
        const tasks = yield select((state) => state.tasks);
        const orderList = tasks.get('orderList')? tasks.get('orderList').toJS(): [];
        orderList.unshift(task.id);
        yield put(tasksActions.newOrderList(orderList));
    } catch (error) {
        yield put(uiActions.emitError(error, 'createTask worker'));
    } finally {
        yield put(uiActions.stopSpinning());

    }
}
