import { select, takeEvery, call, put } from 'redux-saga/effects';
import { getUpdateInfo, getSelectedDept, getDeptAndPos, getUrlFirstPart} from '../../../modules/saga/selectors';
import sendRequest from '../../../services/restApi/sendRequest';
import { requestStringsSecondPart } from '../../../services/utils/utils';
import { SET_ITEM, UPDATE_INFO } from './actions';
import {setBirthday, setGenderId, setName, setPositionId, setUserToken} from '../../authenticationScreens/logInScreen/redux/action';
import {Alert} from 'react-native';
import { filterPositions } from '../../authenticationScreens/registrationScreen/logicForRegistration/logic';
import { setPosition } from '../redux/actions';

export function* workerChangeInfo() {
    const updateInfo = yield select(getUpdateInfo);
    const firstPartOfUrl = yield select(getUrlFirstPart);

    const data = yield call(() => sendRequest(
        firstPartOfUrl,
        requestStringsSecondPart.userUpdateProfile,
        updateInfo,
    ));

    if(data.error === false) {
        yield put(setBirthday(updateInfo.birthday));
        yield put(setName(updateInfo.full_name));
        yield put(setUserToken(updateInfo.user_token));
        yield put(setGenderId(updateInfo.gender_id));
        yield put(setPositionId(updateInfo.position_id));
    }
    Alert.alert('', data.message);

}

export function* watcherChangeInfo() {
    yield takeEvery(UPDATE_INFO, workerChangeInfo);
}

export function* workerSetItem() {
    const selectedDepartment = yield select(getSelectedDept);

    const data = yield select(getDeptAndPos);

    if (selectedDepartment !== '') {
        const positionList = yield call(() => filterPositions(data, selectedDepartment));

        yield put(setPosition(positionList));
    }
}
export function* watcherSetItem() {
    yield takeEvery(SET_ITEM, workerSetItem);
}