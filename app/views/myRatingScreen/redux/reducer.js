import { constants } from './constants';

export const initialState = {
    rate: {},
    dataByToday: [],
    commentDate: '',
};
function reducerMyRating(state = initialState, action) {
    switch (action.type) {
    case constants.SEARCH_INFO :
        return {
            ...state,
            dataByToday: action.payload,
        };
    case constants.SET_COMMENT_DATE:
        return {
            ...state,
            commentDate: action.payload,
        };
    default :
        return state;
    }
}
export default reducerMyRating;