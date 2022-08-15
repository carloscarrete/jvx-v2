import { checkAuth } from "./authSlice"

export const checkingAuth = () => {
    return async (dispatch) => {
        dispatch(checkAuth());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkAuth());
    }
}