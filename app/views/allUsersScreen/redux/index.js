import { requestStringsSecondPart } from '../../../services/utils/utils';
import { constants } from './constants';

const initialState = {
    secondPartOfUrl: requestStringsSecondPart.getAllUSers,
    data: {},
    searchText: '',
    trigger: true,
    searchTrigger: false,
    isAllUser: false,
    allOtherUserInfo: {},
};

export const reducerForAllUsers = (state = initialState, action) => {

    switch (action.type) {
    case constants.ALL_USERS_GET_USERS:
        return {
            ...state,
            data: action.payload,
        };
    case constants.ALL_USERS_INPUT_DONE:
        return {
            ...state,
            searchText: action.payload,
        };
    case constants.ALL_USERS_TRIGGER_CHANGED:
        return {
            ...state,
            trigger: action.payload,
        };
    case constants.ALL_USERS_SEARCH_TRIGGER_CHANGED:
        return {
            ...state,
            searchTrigger: action.payload,
        };
    case constants.ALL_USER_INFO:
        return {
            ...state,
            allOtherUserInfo: action.payload,
        };
    case constants.IS_ALL_USER:
        return{
            ...state,
            isAllUser: action.payload,
        };
    default:
        return state;
    }
};