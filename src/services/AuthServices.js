// Import db from firebase.js to use firebase functions
import AsyncStorage from '@react-native-async-storage/async-storage';
import db from '../config/firebase'

const auth = db.auth();
const firestore = db.firestore();

export const createUserDocument = async (user, userData) => {
    // check variable contents
    console.log("User Data: ", userData)
    console.log("User: ", user)
    let result = true;
    // 
    if (!user) {
        console.log("User does not exists")
    } 

    // create user doc in users collection with same uid
    const userRef = firestore.doc(`users/${user.uid}`)

    // check if user exists
    const snapshot = userRef.get();

    if(!snapshot.exists) {
        const {email} = user;
        const {firstName, lastName} = userData
        userRef.set({
            firstName,
            lastName,
            email,
            createdAt: new Date()
        })
        .catch((error) => {
            console.log('FAILED in creating user profile', error)
            result = false;
        })
    }
    return result;
}


// To retrieve JWT Token from User
export const getJWToken =  async () => {
    let result;
    // await is needed here
    // await auth.onAuthStateChanged(function(user) {
    //     if (user) {
    //         console.log("user")
    //         // save this promise to result
    //         result = user.getIdToken()
    //             .then(function(idToken) {
    //                 return idToken;
    //             })
    //             .catch(
    //                 (error) => {
    //                     console.log("Cannot get User Token: ", error);
    //                 }
    //             )
    //     }
    // });
    // return the user.getToken() promise
    // return result
    let token = await auth.currentUser.getIdToken();
    return token
}

// perhaps change these functions should return true or false upon successful/failure creation
// and have the signupscreen deal with the results and calls another function based 
// on the results

export const firebaseSignUp = async (firstName, lastName, email, password) => {
    let success = false;
    await auth.createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            // user.getIdToken
            //     .then(function(idToken) {
            //         token = idToken;
            //     })
            createUserDocument(userCredentials.user, {firstName, lastName});
            success = true;
            return true;
        })
        .catch(
            (error) => {
                console.log("User Account Cannot be Created: ", error);
            }
        )
    return success
} 

export const firebaseSignIn = async (email, password) => {
    let success = false;
    await auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            success = true;
        })
        .catch(
            (error) =>  {
                console.log("Could not Sign In User: ", error); 
            }
        )
    return success
}

export const firebaseSignOut = async () => {
    let success = false;
    await auth.signOut()
        .then(() => {
            success = true;
        })
        .catch(
            (error) => {
                console.log("Could not Sign User Out: ", error); 
            }
        )
    return success
}

export const clearCache = async (jwToken) => {
    let success = false;
    let value = await AsyncStorage.getItem(jwToken)
    console.log("Value in AsyncStorage", value)
    await AsyncStorage.removeItem(jwToken)
        .then(() => {
            success = true;
        })
        .catch(
            (error) => {
                console.log("Cache could not be cleared: ", error);
            }
        )
    return success 
}
