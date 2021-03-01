import { constants } from './constants';

export const setAllUsersReduxActionCreator = data => ({
    type: constants.ALL_USERS_GET_USERS,
    payload: data,
});
export const setAllUsersInputActionCreator = data => ({
    type: constants.ALL_USERS_INPUT_DONE,
    payload: data,
});
export const setAllUsersTriggerChange = data => ({
    type: constants.ALL_USERS_TRIGGER_CHANGED,
    payload: data,
});
export const setAllUsersSearchTriggerChange = data => ({
    type: constants.ALL_USERS_SEARCH_TRIGGER_CHANGED,
    payload: data,
});

export const setAllUserNameAndToken = data => ({
    type: constants.ALL_USER_INFO,
    payload: data,
});

export const setIsAllUser = data => ({
    type: constants.IS_ALL_USER,
    payload: data,
});