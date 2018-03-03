import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { actionNames } from './container/actions';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* connectToServer(action) {
    
}

function writeTokenToClient(action){
    connectToServer(action)
}

function* mySaga() {
    yield takeLatest(actionNames.CREATE_CONNECT_TOKEN, writeTokenToClient);
}

export default mySaga;