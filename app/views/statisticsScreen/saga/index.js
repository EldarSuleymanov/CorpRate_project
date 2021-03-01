import { takeEvery, put, call, select } from 'redux-saga/effects';
import sendRequest from '../../../services/restApi/sendRequest';
import { requestStringsSecondPart } from '../../../services/utils/utils';
import { constants } from './actions';
import { setMyTodayAvg, setMyCurrentMonthAvg, setMyLastMonthAvg, setYesterdayAvgRating,
    setLastMonthAvgRating } from '../redux/actions';
import { getUrlFirstPart, getUserInfo } from '../../../modules/saga/selectors';
import moment from 'moment';

function* workerForStatistics() {
    const userInfo = yield select(getUserInfo);
    const [userToken, branchId] = [userInfo.user_token, userInfo.branch_id];
    const currentDate = moment(new Date()).format('ddd D MMM yyyy');
    const firstPartOfUrl = yield select(getUrlFirstPart);

    const myAvgToday = yield call(() => sendRequest(
        firstPartOfUrl,
        requestStringsSecondPart.myAvgToday,
        {
            'user_token': userToken,
            'vote_date': currentDate,
        },
    ));

    const myAvgCurrentMonth = yield call(() => sendRequest(
        firstPartOfUrl,
        requestStringsSecondPart.myAvgCurrentMonth,
        {
            'user_token': userToken,
            'vote_date': currentDate,
        },
    ));

    const myAvgLastMonth = yield call(() => sendRequest(
        firstPartOfUrl,
        requestStringsSecondPart.myAvgLastMonth,
        {
            'user_token': userToken,
            'vote_date': currentDate,
        },
    ));

    const lastMonthStatistics = yield call(() => sendRequest(
        firstPartOfUrl,
        requestStringsSecondPart.lastMonthTopUsers,
        {
            'user_token': userToken,
            'branch_id': branchId,
            'vote_date': currentDate,
        },
    ));

    const yesterdayStatistics = yield call(() => sendRequest(
        firstPartOfUrl,
        requestStringsSecondPart.lastDayTopUsers,
        {
            'user_token': userToken,
            'branch_id': branchId,
            'vote_date': currentDate,
        },
    ));

    yield put(setMyTodayAvg(myAvgToday));
    yield put(setMyCurrentMonthAvg(myAvgCurrentMonth));
    yield put(setMyLastMonthAvg(myAvgLastMonth));
    yield put(setLastMonthAvgRating(lastMonthStatistics));
    yield put(setYesterdayAvgRating(yesterdayStatistics));
}

export function* watcherForStatistics() {
    yield takeEvery(constants.SET_MY_AVG, workerForStatistics);
}