import {
    SET_CURRENT_USER
} from '../Constants/actionTypes';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        payload:{
            user
        }
    }
}