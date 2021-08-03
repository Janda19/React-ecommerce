import {shopTypes} from "./shop.types";


export const fetchCollectionsStart = () => ({
    type: shopTypes.FETCH_COLLECTIONS_START,

})


export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})


export const fetchCollectionsFailure = (errorMessage) => ({
    type: shopTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage

})

//
// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         dispatch(fetchCollectionsStart()) //DISPATCH TO INVOKE THE FUNCTION IN REDUX REDUCER
//         const shopCollectionRef = firestore.collection('collection')
//         shopCollectionRef.get()
//             .then(snapshot => {
//                 const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
//
//                 dispatch(fetchCollectionsSuccess(collectionsMap))
//             })
//             .catch(error => dispatch(fetchCollectionsFailure(error.message)))
//     }
// }
