import {constants} from './constants';

const initialState = {
    position: '',
    updateInfo: {
        user_token: '',
        old_password: '',
        new_password: '',
        full_name: '',
        gender_id: '',
        birthday: '',
        position_id: '',
    },
    selectedDepartment: {},
    selectedPos: {},
};

function reducerChangeInfo(state = initialState, action) {
    switch(action.type) {
    case constants.SET_UPDATE_INFO:
        return{
            ...state,
            updateInfo: action.payload,
        };
    case constants.SET_SELECTED_DEPARTMENT:
        return{
            ...state,
            selectedDepartment: action.payload,
        };
    case constants.SET_SELECTED_POS:
        return{
            ...state,
            selectedPos: action.payload,
        };
    case constants.SET_POSITION:
        return{
            ...state,
            position: action.payload,
        };
    default:
        return state;
    }
}

export default reducerChangeInfo;