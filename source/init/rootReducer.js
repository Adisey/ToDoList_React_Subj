// Core
import { combineReducers } from 'redux';
// Reducers
import { testReducer as test } from '../bus/test/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
    test,
    ui,
});
