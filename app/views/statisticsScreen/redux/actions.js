import {constants} from './constants';

export const setMyTodayAvg = data => ({
    type: constants.SET_MY_TODAY_AVG,
    payload: data,
});

export const setMyCurrentMonthAvg = data => ({
    type: constants.SET_MY_CURRENT_MONTH_AVG,
    payload: data,
});

export const setMyLastMonthAvg = data => ({
    type: constants.SET_MY_LAST_MONTH_AVG,
    payload: data,
});

export const setLastMonthAvgRating = data => ({
    type: constants.SET_LAST_MONTH_AVG_RATING,
    payload: data,
});

export const setYesterdayAvgRating = data => ({
    type: constants.SET_YESTERDAY_AVG_RATING,
    payload: data,
});
