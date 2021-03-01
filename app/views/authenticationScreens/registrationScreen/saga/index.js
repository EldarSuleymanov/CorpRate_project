import { Alert } from 'react-native';
import { takeEvery, put, call, select } from 'redux-saga/effects';
import { constStrings } from '../../../../localization';
import { getSelectedBranch, getSelectedCity, getSelectedDepartment, getUrlFirstPart, getUserData } from '../../../../modules/saga/selectors';
import sendRequest from '../../../../services/restApi/sendRequest';
import { corporateEmail, requestStringsSecondPart } from '../../../../services/utils/utils';
import { filterBranches, filterDepartments, getUniqueDepartments, filterPositions }
    from '../logicForRegistration/logic';
import { getCountries, getGenders, branchDepartmentPostionData, getDepartments, getPositions,
    cityCountryGenderData, getBranches, registrationAnswer } from '../redux/actions';
import { constants } from './actions';

function* workerForCityList() {
    const firstPartOfUrl = yield select(getUrlFirstPart);
    const data = yield call(() => sendRequest(
        firstPartOfUrl,
        requestStringsSecondPart.cityCountryGender,
    ));

    yield put(cityCountryGenderData(data));

    yield put(getCountries(data?.country?.map(item => ({
        label: item?.country_text,
        value: item?.country_text,
        id: item?.country_id,
    }))));

    yield put(getGenders(data?.genderData?.map(item => ({
        label: item?.gender_text,
        value: item?.gender_text,
        id: item?.gender_id,
    }))));

    yield call(workerForBranchList);
}

function* workerForBranchList() {
    const firstPartOfUrl = yield select(getUrlFirstPart);
    const selectedCity = yield select(getSelectedCity);
    const selectedBranch = yield select(getSelectedBranch);
    const selectedDepartment = yield select(getSelectedDepartment);

    const dataBranch = yield call(() => sendRequest(
        firstPartOfUrl,
        requestStringsSecondPart.branchDepPosition,
        {'city_id': selectedCity.id},
    ));

    yield put(branchDepartmentPostionData(dataBranch));

    if (selectedCity !== '' && dataBranch.authData.length > 0) {
        yield put(getBranches(filterBranches(dataBranch, 'branch_id', 'branch_text')));
        if (selectedBranch !== '') {
            const deptList = yield call(() => filterDepartments(dataBranch, selectedBranch));
            const uniqueDeptList = yield call(() => getUniqueDepartments(deptList));

            yield put(getDepartments(uniqueDeptList));

            if (selectedDepartment !== '') {
                const positionList = yield call(() => filterPositions(dataBranch, selectedDepartment));

                yield put(getPositions(positionList));
            }
        }
    }
}

export function* watcherForCityList() {
    yield takeEvery(constants.SET_CITY_COUNTRY_GENDER_DATA, workerForCityList);
}

function* workerForRegistration() {
    const firstPartOfUrl = yield select(getUrlFirstPart);
    const userData = yield select(getUserData);

    const data = yield call(() => sendRequest(
        firstPartOfUrl,
        requestStringsSecondPart.userRegister,
        
        userData,

    ));

    yield put(registrationAnswer(data));

    if (data.error === true) {
        if (!userData.user_email.includes(corporateEmail.devEducation) || !userData.user_email.includes(corporateEmail.wizardsDev) ||
            !userData.user_email.includes(corporateEmail.softwareRu) || !userData.user_email.includes(corporateEmail.xcitical)) {
            Alert.alert('', constStrings.emailNotCorporate);
        } else if (data.message.includes('It seems you are already registered, please choose a different email')) {
            Alert.alert('', constStrings.alreadyRegistered);
        }
    } else if (data.error === false) {
        Alert.alert('', constStrings.successfulRegister);
    }
}

export function* watcherForRegistration() {
    yield takeEvery(constants.REGISTER_USER, workerForRegistration);
}