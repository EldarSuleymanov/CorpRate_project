import { constants } from './constants';

const initialState = {
    ratingAndComment: {},
    ratingAndCommentByDate: {},
    date: '',
};

function reducerForRatingAndComment(state = initialState, action) {
    switch(action.type) {
    case constants.GET_RATE_COMMENT_TODAY:
        return {
            ...state,
            ratingAndComment: action.payload,
        };
    case constants.GET_RATE_COMMENT_BY_DATE:
        return {
            ...state,
            ratingAndCommentByDate: action.payload,
        };
    case constants.CHOOSEN_DATE:
        return {
            ...state,
            date: action.payload,
        };
    default:
        return state;
    }
}

export default reducerForRatingAndComment;