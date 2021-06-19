import firebase from "firebase/app"  //IMPORT UTITLITIES
import "firebase/auth" //IMPORT AUTHENTICATION
import "firebase/firestore"  //IMPORT DATABASE

const config = {
    apiKey: "AIzaSyDL77ZHaIAaXBGGvYjKxmiAb5ryKoPuAXA",
    authDomain: "react-ecommerce-699be.firebaseapp.com",
    projectId: "react-ecommerce-699be",
    storageBucket: "react-ecommerce-699be.appspot.com",
    messagingSenderId: "766436783851",
    appId: "1:766436783851:web:613d0ee49a2f94ab1b70ae",
    measurementId: "G-1CV9RWSCT9"
}
export const createUserProfileDoc = async (userAuth, otherData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })
        } catch (err) {
            console.log(err)
        }
    }
    return userRef;
}

//Initialization
firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

//sign in with GOOGLE
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase






