import {takeLatest, put, all, call} from "redux-saga/effects"
import {userActionTypes} from "./user.types";

import {auth, createUserProfileDoc, getCurrentUser} from "../../firebase/firebase.utils";
import {
    signInSuccess,
    signInFailure,
    signOutFailure,
    signOutSuccess,
    signUpFailure,
    signUpSuccess
} from "./user.action";

import {googleProvider} from "../../firebase/firebase.utils"
import {cartClear} from "../cart/cart.action";


/*****************    COMMON FUNCTIONS     ****************/

function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDoc, userAuth); //we use call with normal functions in our application
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (e) {
        yield put(signInFailure(e.message)) // we use put only with actions
    }
}


/*****************    SIGN IN WITH GOOGLE       ****************/

export function* googleSignInStart() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    } catch (e) {
        yield put(signInFailure(e.message)) // we use put only with actions
    }

}


export function* onGoogleSignIn() {
    yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignInStart)
}

/*****************    SIGN IN WITH EMAIL AND PASSWORD       ****************/

export function* signInWithEmailAndPasswordStart({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield  getSnapshotFromUserAuth(user)
    } catch (e) {
        yield put(signInFailure(e.message))
    }
}

export function* onSignInWithEmailAndPassword() {
    yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signInWithEmailAndPasswordStart)

}

/*****************    CHECK USER SESSION FOR SESSION PERSISTENCE        ****************/

export function* checkUserSessionAsync() {
    try {

        const UserAuth = yield getCurrentUser();
        yield getSnapshotFromUserAuth(UserAuth);


    } catch (e) {
        yield put(signInFailure(e.message))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, checkUserSessionAsync)
}

/*****************   SIGN OUT      ****************/

export function* signOutUser() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
        yield put(cartClear())

    } catch (e) {
        yield put(signOutFailure(e.message))
    }
}

export function* onSignOutUser() {
    yield  takeLatest(userActionTypes.SIGN_OUT_START, signOutUser)
}

/*****************   SIGN UP      ****************/

export function* signUpUser({payload: userData}) {
    const {displayName, email, password, confirmPassword} = userData

    if (password !== confirmPassword) {
        alert("passwords don't match ! ")
        return
    }
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password)
        yield  call(createUserProfileDoc, user, {displayName})
        yield  put(signInSuccess({email, displayName}))
        yield put(signUpSuccess({displayName, email}))

    } catch (e) {
        yield put(signUpFailure(e))
    }

}

export function* onSignUp() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUpUser)
}

export function* userSaga() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignIn),
        call(onSignInWithEmailAndPassword),
        call(onSignOutUser),
        call(onSignUp),
    ])
}
