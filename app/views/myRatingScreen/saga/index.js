import {takeEvery, put, call, select} from 'redux-saga/effects';
import sendRequest from '../../../services/restApi/sendRequest';
import {constants} from '../redux/constants';
import { requestStringsSecondPart } from '../../../services/utils/utils';
import { searchInfo } from '../redux/actions';
import { getCommentDate, getUrlFirstPart, getUserInfo } from '../../../modules/saga/selectors';

export function* workerDataSearch() {
    const firstPartOfUrl = yield select(getUrlFirstPart);
    const date = yield select(getCommentDate);
    const userInfo = yield select(getUserInfo);
    const dataByToday = yield call(sendRequest,
        firstPartOfUrl,
        requestStringsSecondPart.getRateCommentByDate,
        {'user_token': userInfo.user_token, 'vote_date': date},
    );

    yield put(searchInfo(dataByToday));
}

export function* watcherDataSearch() {
    yield takeEvery(constants.START_SEARCH, workerDataSearch);
}
