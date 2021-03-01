import { constants } from './constants';

export const initialState = {
    goToRegScreen: false,
    userInfo: {},
    loginAndPassword: {
        user_email: '',
        password: '',
    },
    trigger: false,
    user_email: '',
    birthday: '',
    branch_text: '',
    full_name: '',
    dept_text: '',
    gender_text: '',
    position_text: '',
    user_token: '',
    city_text: '',
    country_text: '',
    branch_id: '',
    gender_id: '',
    position_id: '',
    city_id: '',
    settingsTriggerForBack: false,
    selectedDepartment: {},
};

function reducerForLogin(state = initialState, action) {
    switch(action.type) {
    case constants.SET_CITY_ID:
        return{
            ...state,
            city_id: action.payload,
        };
    case constants.SET_GENDER_ID:
        return{
            ...state,
            gender_id: action.payload,
        };
    case constants.SET_POSITION_ID:
        return{
            ...state,
            position_id: action.payload,
        };
    case constants.SET_BRANCH_ID:
        return{
            ...state,
            branch_id: action.payload,
        };
    case constants.SET_EMAIL:
        return{
            ...state,
            user_email: action.payload,
        };
    case constants.SET_BIRTHDAY:
        return{
            ...state,
            birthday: action.payload,
        };
    case constants.SET_BRANCH_TEXT:
        return{
            ...state,
            branch_text: action.payload,
        };
    case constants.SET_NAME:
        return{
            ...state,
            full_name: action.payload,
        };
    case constants.SET_DEPT_TEXT:
        return{
            ...state,
            dept_text: action.payload,
        };
    case constants.SET_GENDER_TEXT:
        return{
            ...state,
            gender_text: action.payload,
        };
    case constants.SET_POSITION_TEXT:
        return{
            ...state,
            position_text: action.payload,
        };
    case constants.SET_USER_TOKEN:
        return{
            ...state,
            user_token: action.payload,
        };
    case constants.GO_TO_REG:
        return{
            ...state,
            goToRegScreen: action.payload,
        };
    case constants.SET_USER_INFO:
        return{
            ...state,
            userInfo: action.payload,
        };
    case constants.SET_LOGIN_PASSWORD:
        return{
            ...state,
            loginAndPassword: action.payload,
        };
    case constants.SET_LOCALIZATION:
        return{
            ...state,
            trigger: action.payload,
        };
    case constants.SET_COUNTRY_TEXT:
        return{
            ...state,
            country_text: action.payload,
        };
    case constants.SET_CITY_TEXT:
        return{
            ...state,
            city_text: action.payload,
        };
    case constants.SET_SETTINGS_TRIGGER:
        return{
            ...state,
            settingsTriggerForBack: action.payload,
        };
    case constants.SET_SELECTED_DEPARTMENT:
        return{
            ...state,
            selectedDepartment: action.payload,
        };
    default:
        return state;
    }
}

export default reducerForLogin;