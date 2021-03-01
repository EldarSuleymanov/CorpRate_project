import { constStrings } from '../../../localization';
import { constants } from './actions';

const initialState = {
    serverUrlFirstPart: 'http://192.168.88.45/v1/',
    triggerServer: true,
    triggerLanguage: true,
    languageString: constStrings.language,
};

function reducerForSettingsScreen(state = initialState, action) {
    switch (action.type) {
    case constants.SET_URL_FIRST_PART:
        return {
            ...state,
            serverUrlFirstPart: action.payload,
        };
    case constants.SET_CHANGE_TRIGGER_SERVER:
        return {
            ...state,
            triggerServer: action.payload,
        };
    case constants.SET_CHANGE_TRIGGER_LANGUAGE:
        return {
            ...state,
            triggerLanguage: action.payload,
        };
    case constants.SET_LANGUAGE_STRING:
        return {
            ...state,
            languageString: action.payload,
        };

    default:
        return state;
    }
}

export default reducerForSettingsScreen;