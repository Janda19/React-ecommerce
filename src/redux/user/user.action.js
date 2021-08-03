import {userActionTypes} from "./user.types";

/************** SIGN IN ACTIONS ****************/

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGNIN_START
})


export const emailSignInStart = (emailAndPassword) => ({
    type: userActionTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword
})

export const signInSuccess = (user) => ({
    type: userActionTypes.SIGNIN_SUCCESS,
    payload: user

})

export const signInFailure = (errorMessage) => ({
    type: userActionTypes.SIGNIN_FAILURE,
    payload: errorMessage
})
/************** CHECK SESSION ACTIONS ****************/

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION,
})

/************** SIGN OUT ACTIONS ****************/


export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

export const signUpStart = (userData) => ({
    type: userActionTypes.SIGN_UP_START,
    payload: userData
})

export const signUpSuccess = (userData) => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: userData
})

export const signUpFailure = (error) => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
})
