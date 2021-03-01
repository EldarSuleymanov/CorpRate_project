import {constants} from './constants';
export const setDept = obj => ({
    type: constants.SET_DEPT,
    payload: obj,
});
export const setDeptPosition = object => ({
    type: constants.SET_DEPARTMENT_AND_POSITION,
    payload: object,
});