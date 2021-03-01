export const constants = {
    SET_URL_FIRST_PART: 'SET_URL_FIRST_PART',
    SET_CHANGE_TRIGGER_SERVER: 'SET_CHANGE_TRIGGER_SERVER',
    SET_CHANGE_TRIGGER_LANGUAGE: 'SET_CHANGE_TRIGGER_LANGUAGE',
    SET_LANGUAGE_STRING: 'SET_LANGUAGE_STRING',

};

export const setUrlFirstPart = (serverName) => ({
    type: constants.SET_URL_FIRST_PART,
    payload: serverName,
});
export const setChangeServerTrigger = (bool) => ({
    type: constants.SET_CHANGE_TRIGGER_SERVER,
    payload: bool,
});
export const setChangeLanguageTrigger = (bool) => ({
    type: constants.SET_CHANGE_TRIGGER_LANGUAGE,
    payload: bool,
});
export const setLanguageName = (languageName) => ({
    type: constants.SET_LANGUAGE_STRING,
    payload: languageName,
});
