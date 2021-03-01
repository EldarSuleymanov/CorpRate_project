import {constants} from './constants';

export const setCityId = data => ({
    type: constants.SET_CITY_ID,
    payload: data,
});

export const setGenderId = data => ({
    type: constants.SET_GENDER_ID,
    payload: data,
});

export const setPositionId = data => ({
    type: constants.SET_POSITION_ID,
    payload: data,
});

export const setBranchId = data => ({
    type: constants.SET_BRANCH_ID,
    payload: data,
});

export const goToRegScreen = data => ({
    type: constants.GO_TO_REG,
    payload: data,
});

export const setUserInfo = data => ({
    type: constants.SET_USER_INFO,
    payload: data,
});

export const setLoginPassword = data => ({
    type: constants.SET_LOGIN_PASSWORD,
    payload: data,
});

export const setLocalization = data => ({
    type: constants.SET_LOCALIZATION,
    payload: data,
});

export const setUserEmail = data => ({
    type: constants.SET_EMAIL,
    payload: data,
});

export const setBirthday = data => ({
    type: constants.SET_BIRTHDAY,
    payload: data,
});

export const setName = data => ({
    type: constants.SET_NAME,
    payload: data,
});

export const setDept = data => ({
    type: constants.SET_DEPT_TEXT,
    payload: data,
});

export const setBranch = data => ({
    type: constants.SET_BRANCH_TEXT,
    payload: data,
});

export const setGender = data => ({
    type: constants.SET_GENDER_TEXT,
    payload: data,
});

export const setPosition = data => ({
    type: constants.SET_POSITION_TEXT,
    payload: data,
});

export const setUserToken = data => ({
    type: constants.SET_USER_TOKEN,
    payload: data,
});

export const setCountryText = data => ({
    type: constants.SET_COUNTRY_TEXT,
    payload: data,
});

export const setCityText = data => ({
    type: constants.SET_CITY_TEXT,
    payload: data,
});

export const setSelectedDepartment = data => ({
    type: constants.SET_SELECTED_DEPARTMENT,
    payload: data,
});

export const setSettingTriggerForBack = (bool) => ({
    type: constants.SET_SETTINGS_TRIGGER,
    payload: bool,
});