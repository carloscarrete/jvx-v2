import { signInWithGoogle } from "../../firebase/providers";
import { checkAuth, login, logout } from "./authSlice"

export const checkingAuth = () => {
    return async (dispatch) => {
        dispatch(checkAuth());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkAuth());
        const result = await signInWithGoogle();
        if(!result.ok) dispatch(logout(result.errorMessage));

        dispatch(login(result));
    }
}

// login with google sign
export const googleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkAuth());
    }
}
