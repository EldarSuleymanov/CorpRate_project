import {takeEvery, put, call, select} from 'redux-saga/effects';
import { getAllUsersSecondPartOfUrl, getUrlFirstPart, getUserInfo } from '../../../modules/saga/selectors';
import sendRequest from '../../../services/restApi/sendRequest';
import { setAllUsersReduxActionCreator, setAllUsersTriggerChange } from '../redux/actions';
import { constants } from './actions';

function* workerAllUsers() {

    const firstPartOfUrl = yield select(getUrlFirstPart);
    const secondPartOfUrl = yield select(getAllUsersSecondPartOfUrl);
    const userInfo = yield select(getUserInfo);

    const body = {
        user_token: userInfo?.user_token,
        branch_id: userInfo?.branch_id,
    };

    yield put(setAllUsersTriggerChange(false));

    const dataFromServer = yield call(sendRequest, firstPartOfUrl, secondPartOfUrl, body);

    yield put(setAllUsersReduxActionCreator(dataFromServer));

}

export function* watcherAllUsers() {
    yield takeEvery(constants.ALL_USERS_WATCHER, workerAllUsers);
}
