// Core
import { put, apply } from 'redux-saga/effects';
// import { api } from "../../../../REST";
import { testActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* test () {
    try {
        yield put(uiActions.startFetching());

        // const response = yield apply(api, api.posts.fetch);
        // console.log(`API -> response ->`, response);
        // console.log(`API -> response.json 1->`, response.json);
        // const { data: posts, message } = yield apply(response, response.json);
        // console.log(`API -> response.json 2->`, response.json);
        //
        // if (response.status !== 200) {
        //     throw new Error(message);
        // }
        // yield put(testActions.test(test));
    } catch (error) {
        yield put(uiActions.emitError(error, 'test worker'));
    } finally {
        yield put(uiActions.stopFetching());

    }
}
