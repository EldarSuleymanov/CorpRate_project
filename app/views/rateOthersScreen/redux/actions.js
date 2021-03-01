import { constants } from './constants';

export const setRateOthersReduxActionCreator = (dataFromServer) => ({
    type: constants.GET_DATA_FOR_VOTE,
    payload: dataFromServer,
});
export const setInputActionCreator = (text) => ({
    type: constants.INPUT_DONE,
    payload: text,
});
export const setTriggerChange = (bool) => ({
    type: constants.TRIGGER_CHANGED,
    payload: bool,
});
export const setSearchTriggerChange = (bool) => ({
    type: constants.SEARCH_TRIGGER_CHANGED,
    payload: bool,
});

export const setNameAndToken = (object) => ({
    type: constants.OTHER_USER_INFO,
    payload: object,
});