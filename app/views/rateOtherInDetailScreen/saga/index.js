import { RATING_AND_COMMENT, RATING_AND_COMMENT_BY_DATE } from './actions';
import {takeEvery, call, select, put} from 'redux-saga/effects';
import { requestStringsSecondPart} from '../../../services/utils/utils';
import sendRequest from '../../../services/restApi/sendRequest';
import {getChoosenDateForOthers, getDataForOthers, getIsAllUser, getAllOtherUserInfo, getUrlFirstPart,
    getAllUsersSearchTrigger} from '../../../modules/saga/selectors';
import { setTodaysRatingComment, setByDateRatingComment } from '../redux/actions';

export function* workerRatingAndComment() {
    const firstPartOfUrl = yield select(getUrlFirstPart);

    const isAllUser = yield select(getIsAllUser);
    const searchAllUsers = yield select(getAllUsersSearchTrigger);

    if (isAllUser || searchAllUsers) {
        const otherUserInfo = yield select(getAllOtherUserInfo);
        const otherUserToken = otherUserInfo?.user_token;

        const ratingAndCommentForToday = {
            user_token: otherUserToken,
        };

        const data = yield call(() => sendRequest(
            firstPartOfUrl,
            requestStringsSecondPart.getRateCommentToday,
            ratingAndCommentForToday,
        ));

        yield put(setTodaysRatingComment(data));

    } else {
        const otherUserInfo = yield select(getDataForOthers);
        const otherUserToken = otherUserInfo?.user_token;

        const ratingAndCommentForToday = {
            user_token: otherUserToken,
        };

        const data = yield call(() => sendRequest(
            firstPartOfUrl,
            requestStringsSecondPart.getRateCommentToday,
            ratingAndCommentForToday,
        ));

        yield put(setTodaysRatingComment(data));
    }

}

export function* workerByDate() {
    const firstPartOfUrl = yield select(getUrlFirstPart);
    const isAllUser = yield select(getIsAllUser);

    if(isAllUser) {
        const otherUserInfo = yield select(getAllOtherUserInfo);
        const otherUserToken = otherUserInfo?.user_token;
        const choosenDate = yield select(getChoosenDateForOthers);

        const ratingAndCommentByDate = {
            user_token: otherUserToken,
            vote_date: choosenDate,
        };

        const data = yield call(() => sendRequest(
            firstPartOfUrl,
            requestStringsSecondPart.getRateCommentByDate,
            ratingAndCommentByDate,
        ));

        yield put(setByDateRatingComment(data));
    } else {
        const otherUserInfo = yield select(getDataForOthers);
        const otherUserToken = otherUserInfo?.user_token;
        const choosenDate = yield select(getChoosenDateForOthers);

        const ratingAndCommentByDate = {
            user_token: otherUserToken,
            vote_date: choosenDate,
        };

        const data = yield call(() => sendRequest(
            firstPartOfUrl,
            requestStringsSecondPart.getRateCommentByDate,
            ratingAndCommentByDate,
        ));

        yield put(setByDateRatingComment(data));
    }
}

export function* watcherRatingAndComment() {
    yield takeEvery(RATING_AND_COMMENT, workerRatingAndComment);
}

export function* watcherRatingAndCommentByDate() {
    yield takeEvery(RATING_AND_COMMENT_BY_DATE, workerByDate);
}