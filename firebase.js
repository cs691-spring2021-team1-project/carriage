// Import the functions you need from the SDKs you need
import  * as fb from "firebase"
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import Constants from "expo-constants";

// FIXME: DEPRECIATED use firebase.js file located in src and functions are located in serivice file.
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  // databaseURL: Constants.manifest.extra.databaseURL,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId

 };

// Initialize Firebase
let app;
app = fb.apps.length === 0 ? fb.initializeApp(firebaseConfig) : fb.app()

const auth = firebase.auth()
const firestore = firebase.firestore()


const createUserDocument = async (user, userData) => {
  console.log("USERDATA", userData)
  console.log("User: ", user)
  if(!user) return;

  // create user doc in users collection with same uid
  const userRef = firestore.doc(`users/${user.uid}`)


  // check if user exhist 
  const snapshot = userRef.get();

  if(!snapshot.exists){
    const {email} = user;
    const {firstName, lastName} = userData
    console.log('NAMES pulled from userData in to signuphandler',firstName,lastName)
    console.log("User Ref Before: ", userRef)
    try {
      userRef.set({
        firstName,
        lastName,
        email,
        createdAt: new Date()
      })
      console.log("User Ref: ", userRef)
    } catch (error) {
      console.log('FAILED in creating user profile', error)
    }
  }
}


export { auth, firestore, createUserDocument }

