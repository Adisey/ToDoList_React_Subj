//Core
import { fromJS, List } from 'immutable';

// Instruments
import { type } from './types';

const initalState = List([0,1,2]);

export const testReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.TEST_ASYNC:
            return fromJS(action.payload);
        default:
            return state;
    }
};
