import {constants} from './constants';

export const cityCountryGenderData = data => ({
    type: constants.CITY_COUNTRY_GENDER_DATA,
    payload: data,
});

export const getCountries = data => ({
    type: constants.GET_COUNTRIES,
    payload: data,
});

export const selectedCountry = data => ({
    type: constants.SELECTED_COUNTRY,
    payload: data,
});

export const getCities = data => ({
    type: constants.GET_CITIES,
    payload: data,
});

export const selectedCity = data => ({
    type: constants.SELECTED_CITY,
    payload: data,
});

export const getGenders = data => ({
    type: constants.GET_GENDERS,
    payload: data,
});

export const selectedGender = data => ({
    type: constants.SELECTED_GENDER,
    payload: data,
});

export const branchDepartmentPostionData = data => ({
    type: constants.BRANCH_DEPARTMENT_POSITION_DATA,
    payload: data,
});

export const getBranches = data => ({
    type: constants.GET_BRANCHES,
    payload: data,
});

export const selectedBranch = data => ({
    type: constants.SELECTED_BRANCH,
    payload: data,
});

export const getDepartments = data => ({
    type: constants.GET_DEPARTMENTS,
    payload: data,
});

export const selectedDepartment = data => ({
    type: constants.SELECTED_DEPARTMENT,
    payload: data,
});

export const getPositions = data => ({
    type: constants.GET_POSITIONS,
    payload: data,
});

export const selectedPosition = data => ({
    type: constants.SELECTED_POSITION,
    payload: data,
});

export const setUserData = data => ({
    type: constants.SET_USER_DATA,
    payload: data,
});

export const getBirthDate = date => ({
    type: constants.GET_BIRTHDATE,
    payload: date,
});

export const registrationAnswer = date => ({
    type: constants.REGISTRATION_ANSWER,
    payload: date,
});