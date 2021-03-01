import { requestStringsSecondPart } from '../../../services/utils/utils';
import { constants } from './constants';

const initialState = {
    secondPartOfUrl: requestStringsSecondPart.getUsersForVote,
    otherUserInfo: {},
    searchText: '',
    trigger: true,
    searchTrigger: false,
    data: {},
};

export const reducerForRateOthers = (state = initialState, action) => {
    switch (action.type) {
    case constants.GET_DATA_FOR_VOTE:
        return {
            ...state,
            data: action.payload,
        };
    case constants.INPUT_DONE:
        return {
            ...state,
            searchText: action.payload,
        };
    case constants.TRIGGER_CHANGED:
        return {
            ...state,
            trigger: action.payload,
        };
    case constants.SEARCH_TRIGGER_CHANGED:
        return {
            ...state,
            searchTrigger: action.payload,
        };
    case constants.OTHER_USER_INFO:
        return {
            ...state,
            otherUserInfo: action.payload,
        };

    default:
        return state;
    }
};