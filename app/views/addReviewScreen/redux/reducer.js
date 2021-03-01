import { constants } from './constants';

const initialState = {
    stars: 0,
    review: '',
    bool: false,
};

function reducerForReview(state = initialState, action) {
    switch (action.type) {
    case constants.SET_RATING:
        return {
            ...state,
            stars: action.payload,
        };
    case constants.SET_REVIEW:
        return {
            ...state,
            review: action.payload,
        };
    case constants.READY_TO_SEND:
        return {
            ...state,
            bool: action.payload,
        };
    default:
        return state;
    }
}

export default reducerForReview;