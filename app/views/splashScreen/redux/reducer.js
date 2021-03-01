import { SET_TRUE } from '../saga/actions';
export const initialState = {
    splashEnd: true,
};
function reducerSplash(state = initialState, action) {
    switch (action.type) {
    case SET_TRUE :
        return {
            splashEnd: action.payload,
        };
    default :
        return state;
    }
}
export default reducerSplash;