import { constants } from './constants';

export const setTodaysRatingComment = (ratingComment) => ({
    type: constants.GET_RATE_COMMENT_TODAY,
    payload: ratingComment,
});

export const setByDateRatingComment = (ratingComment) => ({
    type: constants.GET_RATE_COMMENT_BY_DATE,
    payload: ratingComment,
});

export const setCommentDateForOthers = (date) => ({
    type: constants.CHOOSEN_DATE,
    payload: date,
});