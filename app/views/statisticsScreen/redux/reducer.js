import { constants } from './constants';

const initialState = {
    myAvgToday: {},
    myAvgCurrentMonth: {},
    myAvgLastMonth: {},
    lastMonthAvgRating: {},
    yesterdayAvgRating: {},
};

function reducerForStatistics(state = initialState, action) {
    switch (action.type) {
    case constants.SET_MY_TODAY_AVG:
        return {
            ...state,
            myAvgToday: action.payload,
        };
    case constants.SET_MY_CURRENT_MONTH_AVG:
        return {
            ...state,
            myAvgCurrentMonth: action.payload,
        };
    case constants.SET_MY_LAST_MONTH_AVG:
        return {
            ...state,
            myAvgLastMonth: action.payload,
        };
    case constants.SET_LAST_MONTH_AVG_RATING:
        return {
            ...state,
            lastMonthAvgRating: action.payload,
        };
    case constants.SET_YESTERDAY_AVG_RATING:
        return {
            ...state,
            yesterdayAvgRating: action.payload,
        };
    default:
        return state;
    }
}

export default reducerForStatistics;