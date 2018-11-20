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
    tasksList: [
        {
            id:            1, // v4()
            name:          'Задача № 1',
            complete:      0,
            executionTime: 0,
            position:      1,
        },
        {
            id:            2,
            name:          'Задача № 2',
            complete:      1,
            executionTime: 10000,
            position:      2,
        }
    ],
});

export const tasksReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.FILL_TASKS:
            return state.set('tasksList', fromJS(action.payload));

        case type.REMOVE_TASK:
            return state.set('tasksList', state.get('tasksList').filter((task) => task.get('id') !== action.payload));

        case type.COMPLETE_TASK:
            return state.set('tasksList', state.get('tasksList').map((task) => {
                if (task.get('id') === action.payload.id) {
                    task = task.set('completed', !task.get('completed'));
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
