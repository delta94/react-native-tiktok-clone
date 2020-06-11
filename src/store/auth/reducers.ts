import { UPDATE_AUTHEN, REMOVE_AUTHEN, AuthState, AuthActionTypes } from "./types";

const initialState: AuthState = {
    loggedIn: false,
    token: "",
};

export function authReducer(
    state = initialState,
    action: AuthActionTypes
): AuthState {
    switch (action.type) {
        case UPDATE_AUTHEN: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
}