import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, firestore } from '../config';


export const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const tempID = () => {
 return [1,2,3,4,5,6]
}

export const favoriteItem = (itemID) => {

}

const changeMembership = async (user, new_status) => {
    return firestore.doc(`users/${user.uid}`).update({
        status : new_status,
        updatedAt: new Date()
    })
    .then(() => {
        console.log("User Membership Changed")
        return true;
    })
    .catch((error) => {
        console.log("Cannot Change User Membership: ", error)
        return false;
    })
}

