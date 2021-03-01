import {SEND_REVIEW} from './action';
import {takeEvery, call, select} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {requestStringsSecondPart} from '../../../services/utils/utils';
import sendRequest from '../../../services/restApi/sendRequest';
import {getUserInfo, getStars, getReview, readyToSend, getDataForOthers, getUrlFirstPart} from '../../../modules/saga/selectors';

export function* workerSendReview() {
    const stars = yield select(getStars);
    const reviewComment = yield select(getReview);
    const userInfo = yield select(getUserInfo);
    const userToken = userInfo.user_token;

    const firstPartOfUrl = yield select(getUrlFirstPart);
    const otherUserInfo = yield select(getDataForOthers);
    const otherUserToken = otherUserInfo?.user_token;

    const sendData = {
        user_token: userToken,
        vote_to_token: otherUserToken,
        rate_id: stars,
        rate_comment: reviewComment,
    };

    const data = yield call(() => sendRequest(
        firstPartOfUrl,
        requestStringsSecondPart.voteForUser,
        sendData,
    ));

    const ready = yield select(readyToSend);

    if(ready) {
        Alert.alert(data.message);
    }
}

export function* watcherSendReview() {
    yield takeEvery(SEND_REVIEW, workerSendReview);
}