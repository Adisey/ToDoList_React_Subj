/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 05.08.2018
 * Time: 10:44
 */

//Core
import { all, call } from 'redux-saga/effects';

// Wathers
import { watcherTests } from '../bus/test/saga/watchers';

export function* rootSaga () {
    yield all([
        call(watcherTests),
    ]);
}
