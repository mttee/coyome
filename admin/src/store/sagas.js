import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* rootSaga(){
    // yield all([
        yield takeLatest("USER_FETCH_REQUESTED", test);
    // ])
}

export default rootSaga;