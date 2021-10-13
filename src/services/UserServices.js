//NOTE: - For User Account Based Functions
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, firestore } from '../config';

const deleteUserData = async (user) => {
    return firestore.collection("users").doc(`users/${user.uid}`).delete()
        .then(() => {
            console.log("User Data in Firestore Deleted")
            return true
        })
        .catch((error) => {
            console.log("Cannot Delete User Infomation: ", error)
            return false 
        })
}

const deleteUserAccount = async () => {
    auth.currentUser.delete()
        .then( () => {
            await AsyncStorage.clear(); 
            await auth.signOut();
        })
        .catch((error) => {
            console.log("Cannot Delete User Account: ", error)
        })
}

const deleteUser = async (user) => {
    deleteUserData(user)
        .then( () => {
            console.log("Commence Deletion")
            await deleteUserAccount();
        })
}
