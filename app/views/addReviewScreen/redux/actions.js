import { constants } from './constants';

export const setRating = data => ({
    type: constants.SET_RATING,
    payload: data,
});

export const setReview = data => ({
    type: constants.SET_REVIEW,
    payload: data,
});

export const readyToSend = data => ({
    type: constants.READY_TO_SEND,
    payload: data,
});