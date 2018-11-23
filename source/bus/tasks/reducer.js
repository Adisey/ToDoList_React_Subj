//Core
import { fromJS, List } from 'immutable';
import { v4 } from 'uuid';

// Instruments
import { type } from './types';

const initalState = fromJS({
    runningTask: {
        id:           '1',
        startRunning: Number(new Date()),
    },
    newTask:   false,
    tasksList: [
        {
            id:            '1', // v4()
            message:       'Задача № 1',
            completed:     false,
            executionTime: 0,
            order:         3,
        },
        {
            id:            '2',
            message:       'Задача № 2',
            completed:     true,
            executionTime: 10000,
            order:         2,
        },
        {
            id:            '3',
            message:       'Задача № 3',
            completed:     false,
            executionTime: 15000,
            order:         1,
        }
    ],
});

export const tasksReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.MAKE_ORDER_LIST:
            const orderList = [];
            const taskJSarr = state.get('tasksList').toJS();

            taskJSarr
                .sort((a, b) => {
                    if (a.order > b.order) {
                        return 1;
                    }
                    if (a.order < b.order) {
                        return -1;
                    }
                })
                .map((task) => {
                    orderList.push(task.id);
                })
            ;

            return state.set('orderList', fromJS(orderList));

        case type.NEW_ORDER_LIST:
            // ToDo: Намучано сделано, нужно на досуге подумать как сделать элегантнее
            if (action.payload) {
                const newOrderList = action.payload;
                const newOrderTaskObj = {};

                state.get('tasksList').map((task) => {
                    newOrderTaskObj[task.get('id')] = task;
                });
                let order = 0;
                const newTaskList = newOrderList.map((index) => {
                    order++;

                    return newOrderTaskObj[index].set('order', order);
                });
                const newOrderListState = state.set('tasksList', List(newTaskList));

                return newOrderListState.set('orderList', fromJS(newOrderList));
            }

            return state;

        case type.FILL_TASKS:
            return state.set('tasksList', fromJS(action.payload));

        case type.CANCEL_NEW_TASK:
            return state.set('newTask', false);

        case type.NEW_TASK:
            return state.set('newTask', true);

        case type.REMOVE_TASK:
            return state.set('tasksList', state.get('tasksList').filter((task) => task.get('id') !== action.payload));

        case type.COMPLETE_TASK:
            return state.set('tasksList', state.get('tasksList').map((task) => {
                if (task.get('id') === action.payload.id) {
                    task = task.set('completed', action.payload.completed);
                }

                return task;
            }));

        case type.CREATE_TASK:
            return state.set('tasksList', state.get('tasksList').unshift(fromJS(action.payload)));

        case type.START_RUN_TASK:
            return state.set('runningTask', fromJS({ id: action.payload, startRunning: Number(new Date()) }));

        case type.END_RUN_TASK:
            if (state.getIn(['runningTask', 'id'])) {
                const runningTaskId = state.getIn(['runningTask', 'id']);
                const executionTime = Number(new Date()) - state.getIn(['runningTask', 'startRunning']);
                const endRunTaskNewState = state.set('tasksList', state.get('tasksList').map((task) => {
                    if (task.get('id') === runningTaskId) {
                        task = task.set('executionTime', (task.get('executionTime') ? task.get('executionTime') : 0) + executionTime);
                    }

                    return task;
                }));

                return endRunTaskNewState.delete('runningTask');
            }

            return state;

        default:
            return state;
    }
};
