//Core
import { fromJS, List } from 'immutable';
import { v4 } from 'uuid';

// Instruments
import { type } from './types';

const initalState = fromJS({
    runningTask: {
        id:           1,
        startRunning: new Date(),
    },
    newTask:   false,
    tasksList: [
        {
            id:            1, // v4()
            message:          'Задача № 1',
            completed:     false,
            executionTime: 0,
            position:      1,
        },
        {
            id:            2,
            message:          'Задача № 2',
            completed:     true,
            executionTime: 10000,
            position:      2,
        }
    ],
});

export const tasksReducer = (state = initalState, action) => {
    switch (action.type) {
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
            return state;

        case type.END_RUN_TASK:
            return state;

        default:
            return state;
    }
};
