import { async } from "@firebase/util";
import { loginWithEmailAndPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
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

export const startCreatingWithEmailAndPassword = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch(checkingAuth())
        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

        if(!ok) return dispatch(logout(errorMessage))

        dispatch(login({uid, displayName, email, photoURL}))
    }
}

export const startLoginWithEmailAndPassword = (email,password) =>{
    return async(dispatch)=>{
        dispatch(checkingAuth());
        const {displayName, ok, photoURL, uid, errorMessage} = await loginWithEmailAndPassword(email, password);
        if(!ok) return dispatch(logout(errorMessage))

        dispatch(login({uid, displayName, email, photoURL}))
        
    }
}