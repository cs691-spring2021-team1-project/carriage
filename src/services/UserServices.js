//NOTE: - For User Account Based Functions
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, firestore } from '../config';

const deleteUserData = async (user) => {
    return firestore.collection("users").doc(user.uid).delete()
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
    return auth.currentUser.delete()
        .then( () => {
            console.log("User Account Deleted")
            return true
        })
        .catch((error) => {
            console.log("Cannot Delete User Account: ", error)
            return false
        })
}

export const deleteUser = async (user) => {
    return deleteUserData(user)
        .then( () => {
            console.log("Commence Deletion")
            return deleteUserAccount();
        })
        .catch( (error) => {
            console.log("Cannot Delete User: ", error)
        })
}
