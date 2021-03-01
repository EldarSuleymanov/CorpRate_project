import { constants } from './constants';

const initialState = {
    cityCountryGenderData: [],
    branchDepartmentPostionData: [],
    countryList: [],
    cityList: [],
    genderList: [],
    branchList: [{ label: 'default', value: 'default', id: 0 }],
    departmentList: [{ label: 'default', value: 'default', id: 0 }],
    positionList: [{ label: 'default', value: 'default', id: 0 }],
    selectedGender: '',
    selectedCountry: '',
    selectedCity: '',
    selectedBranch: '',
    selectedDepartment: '',
    selectedPosition: '',
    userData: {
        full_name: '',
        user_email: '',
        password: '',
        gender_id: 0,
        birthday: '',
        position_id: 0,
    },
    registrationAnswer: {},
};

function reducerForCityCountryGender(state = initialState, action) {
    switch (action.type) {
    case constants.CITY_COUNTRY_GENDER_DATA:
        return {
            ...state,
            cityCountryGenderData: action.payload,
        };
    case constants.GET_COUNTRIES:
        return {
            ...state,
            countryList: action.payload,
        };
    case constants.SELECTED_COUNTRY:
        return {
            ...state,
            selectedCountry: action.payload,
        };
    case constants.GET_CITIES:
        return {
            ...state,
            cityList: action.payload,
        };
    case constants.SELECTED_CITY:
        return {
            ...state,
            selectedCity: action.payload,
        };
    case constants.GET_GENDERS:
        return {
            ...state,
            genderList: action.payload,
        };
    case constants.SELECTED_GENDER:
        return {
            ...state,
            selectedGender: action.payload,
        };
    case constants.BRANCH_DEPARTMENT_POSITION_DATA:
        return {
            ...state,
            branchDepartmentPostionData: action.payload,
        };
    case constants.GET_BRANCHES:
        return {
            ...state,
            branchList: action.payload,
        };
    case constants.SELECTED_BRANCH:
        return {
            ...state,
            selectedBranch: action.payload,
        };
    case constants.GET_DEPARTMENTS:
        return {
            ...state,
            departmentList: action.payload,
        };
    case constants.SELECTED_DEPARTMENT:
        return {
            ...state,
            selectedDepartment: action.payload,
        };
    case constants.GET_POSITIONS:
        return {
            ...state,
            positionList: action.payload,
        };
    case constants.SELECTED_POSITION:
        return {
            ...state,
            selectedPosition: action.payload,
        };
    case constants.SET_USER_DATA:
        return {
            ...state,
            userData: action.payload,
        };
    case constants.GET_BIRTHDATE:
        return {
            ...state,
            birthday: action.payload,
        };
    case constants.REGISTRATION_ANSWER:
        return {
            ...state,
            registrationAnswer: action.payload,
        };
    default:
        return state;
    }
}

export default reducerForCityCountryGender;