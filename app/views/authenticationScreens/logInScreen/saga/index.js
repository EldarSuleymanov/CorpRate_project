import {SEND_INFO} from './action';
import { takeEvery, put, call, select} from 'redux-saga/effects';
import {goToRegScreen, setSelectedDepartment, setBirthday, setBranch, setBranchId,
    setCityId, setCityText, setCountryText, setDept, setGender,
    setGenderId, setName, setPosition, setPositionId, setUserEmail, setUserInfo, setUserToken} from '../redux/action';
import {Alert} from 'react-native';
import {requestStringsSecondPart} from '../../../../services/utils/utils';
import sendRequest from '../../../../services/restApi/sendRequest';
import { getSettingsTrigger, getUrlFirstPart } from '../../../../modules/saga/selectors';
import {getLoginAndPasswordAndNavig } from '../../../../modules/saga/selectors';
import { workerGetDepartments } from '../../../myProfileScreen/saga';
import {ROUTES} from '../../../../services/routes';

export function* workerSendInfo() {
    const firstPartOfUrl = yield select(getUrlFirstPart);
    const loginPasswordNavig = yield select(getLoginAndPasswordAndNavig);
    const settingsTriggerForBack = yield select(getSettingsTrigger);

    const loginAndPassword = {
        user_email: loginPasswordNavig.user_email,
        password: loginPasswordNavig.password,
    };
    const data = yield call(() => sendRequest(
        firstPartOfUrl,
        requestStringsSecondPart.userLogin,
        loginAndPassword,
    ));
    
    if(data?.hasOwnProperty('error') && (settingsTriggerForBack === false))  {

        Alert.alert('', data.message);
    } else if( (settingsTriggerForBack === false) ){
        data?.userData.map(item => (
            userInfo = item
        ));
        const selectedDepartment = {
            id: userInfo.dept_id,
            value: userInfo.dept_text,
            label: userInfo.dept_text,
        };

        yield put(goToRegScreen(true));
        yield put(setUserInfo(userInfo));
        yield put(setBirthday(userInfo.birthday));
        yield put(setName(userInfo.full_name));
        yield put(setDept(userInfo.dept_text));
        yield put(setBranch(userInfo.branch_text));
        yield put(setPosition(userInfo.position_text));
        yield put(setUserToken(userInfo.user_token));
        yield put(setUserEmail(userInfo.user_email));
        yield put(setGender(userInfo.gender_text));
        yield put(setCountryText(userInfo.country_text));
        yield put(setCityText(userInfo.city_text));
        yield put(setBranchId(userInfo.branch_id));
        yield put(setGenderId(userInfo.gender_id));
        yield put(setPositionId(userInfo.position_id));
        yield put(setCityId(userInfo.city_id));

        yield put(setSelectedDepartment(selectedDepartment));
        if (loginPasswordNavig.navigation.navigate !== undefined) {
            loginPasswordNavig.navigation.navigate(ROUTES.MyRatingScreen);
        }

        yield call(workerGetDepartments);
    }
}

export function* watcherSendInfo() {
    yield takeEvery(SEND_INFO, workerSendInfo);
}

