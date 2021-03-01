import {constants} from './constants';
const initialState = {
    department: '',
    deptAndPosition: {},
};

function reducerForMyprofile(state = initialState, action) {
    switch(action.type) {
    case constants.SET_DEPT:
        return{
            ...state,
            department: action.payload,
        };
    case constants.SET_DEPARTMENT_AND_POSITION:
        return{
            ...state,
            deptAndPosition: action.payload,
        };
    default:
        return state;
    }
}

export default reducerForMyprofile;