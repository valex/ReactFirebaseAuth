import {
    SET_CURRENT_USER
} from '../Constants/actionTypes';
const initialState = {
    currentUser: null
};

export default function RootReducer(state = initialState, action = {}) {

    // if (typeof state === 'undefined') {
    //
    // }

    switch (action.type) {
        case SET_CURRENT_USER:
            return Object.assign({}, state, {
                currentUser: action.payload.user
            });
        default:
            return state
    }
}