// Core
import { put, apply } from 'redux-saga/effects';

import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fillTasks () {
    try {
        yield put(uiActions.startSpinning());
        // Когда будет сервер
        // А пока оставляем в стейте уже имеющиеся тмаки
        // yield put(tasksActions.fillTasks(task));
    } catch (error) {
        yield put(uiActions.emitError(error, 'fillTasks worker'));
    } finally {
        yield put(uiActions.stopSpinning());

    }
}
