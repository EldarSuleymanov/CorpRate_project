import {constants} from './constants';

export const searchInfo = (dataByToday) => ({
    type: constants.SEARCH_INFO,
    payload: dataByToday,
});

export const setCommentDate = (data) => ({
    type: constants.SET_COMMENT_DATE,
    payload: data,
});
