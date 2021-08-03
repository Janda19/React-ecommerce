import {takeEvery, call, put} from "redux-saga/effects"
import {shopTypes} from "./shop.types";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./shop.actions";


import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";


export function* fetchCollectionsStartAsync() {
    try {
        const shopCollectionsRef = firestore.collection('collection')
        const snapshot = yield shopCollectionsRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        // we used call TO "MAKE SURE" that the function will be invoked at the yield

        yield put(fetchCollectionsSuccess(collectionsMap))
        //we use put instead of dispatch in redux saga
    } catch (e) {
        yield put(fetchCollectionsFailure(e.message))
    }
}
// this function will listen to the FETCH_COLLECTIONS_START action when ever
// it gets fired... and then it will invoke fetchCollectionsStartAsync()
export function* fetchCollectionsStart() {
    yield takeEvery(shopTypes.FETCH_COLLECTIONS_START, fetchCollectionsStartAsync)
}
