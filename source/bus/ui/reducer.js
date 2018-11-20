// Core
import { Map } from 'immutable';
// Types
import { type } from './types';

const initalState = Map({
    isSpinning: false,
});

export const uiReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.START_SPINNING:
            return state.set('isSpinning', true);

        case type.STOP_SPINNING:
            return state.set('isSpinning', false);

        default:
            return state;
    }
};
