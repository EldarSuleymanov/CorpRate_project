import {constants} from './constants';

export const setPosition = data => ({
    type: constants.SET_POSITION,
    payload: data,
});

export const setUpdateInfo = data => ({
    type: constants.SET_UPDATE_INFO,
    payload: data,
});

export const selectedDepartment = data => ({
    type: constants.SET_SELECTED_DEPARTMENT,
    payload: data,
});

export const selectedPos = data => ({
    type: constants.SET_SELECTED_POS,
    payload: data,
});