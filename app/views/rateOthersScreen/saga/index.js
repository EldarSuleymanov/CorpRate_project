import {takeEvery, put, call, select} from 'redux-saga/effects';
import { getRateOthersSecondPartOfUrl, getUrlFirstPart, getUserInfo } from '../../../modules/saga/selectors';
import sendRequest from '../../../services/restApi/sendRequest';
import { setRateOthersReduxActionCreator, setTriggerChange } from '../redux/actions';
import { constants } from './actions';

function* workerRateOthers() {

    const firstPartOfUrl = yield select(getUrlFirstPart);
    const secondPartOfUrl = yield select(getRateOthersSecondPartOfUrl);
    const userInfo = yield select(getUserInfo);

    const body = {
        user_token: userInfo?.user_token,
        branch_id: userInfo?.branch_id,
    };

    yield put(setTriggerChange(false));

    const dataFromServer = yield call(sendRequest, firstPartOfUrl, secondPartOfUrl, body);

    yield put(setRateOthersReduxActionCreator(dataFromServer));
}

export function* watcherRateOthers() {
    yield takeEvery(constants.RATE_OTHERS_WATCHER, workerRateOthers);
}
