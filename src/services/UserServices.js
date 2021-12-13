//NOTE: - For User Account Based Functions
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, firestore } from '../config';



const updateUserLastName = async (user, lastName) => {
    return firestore.doc(`users/${user.uid}`).update({
        lastName : lastName,
        updatedAt: new Date()
    })
    .then(() => {
        console.log("Last Name User Data in Firestore Updated")
        return true;
    })
    .catch((error) => {
        console.log("Cannot Update Last Name User Infomation: ", error)
        return false;
    })
}

const updateUserFirstName = async (user, firstName) => {
    
    return firestore.doc(`users/${user.uid}`).update({
        firstName : firstName,
        updatedAt: new Date()
    })
    .then(() => {
        console.log("First Name User Data in Firestore Updated")
        return true;
    })
    .catch((error) => {
        console.log("Cannot Update First Name User Infomation: ", error)
        return false;
    })


    
        // .then(() => {
        //     console.log("First Name User Data in Firestore Updated")
        //     return true;
        // })
        // .catch((error) => {
        //     console.log("Cannot Update First Name User Infomation: ", error)
        //     return false;
        // })
}

const updateUserAuthDisplayName = async (user, firstName ) => {

    return user.updateProfile({
        displayName:firstName
       
        
       
      }).then(function() {
  
        console.log("User DisplayName Updated", user.displayName)
        return true;
      }, function(error) {
        // An error happened.
        console.log("Cannont Update User DisplayName", error)
        return false;
      });


}

const deleteUserData = async (user) => {
    return firestore.doc(`users/${user.uid}`).delete()
        .then(() => {
            console.log("User Data in Firestore Deleted")
            return true;
        })
        .catch((error) => {
            console.log("Cannot Delete User Infomation: ", error)
            return false;
        })
}

const deleteUserAccount = async () => {
    auth.currentUser.delete()
        .then( () => {
            AsyncStorage.clear(); 
            auth.signOut();
        })
        .catch((error) => {
            console.log("Cannot Delete User Account: ", error)
        })
}

const deleteUser = async (user) => {
    deleteUserData(user)
        .then( () => {
            console.log("Commence Deletion")
            deleteUserAccount();
        })
}

const getUserData = async (user) => {
    return firestore.doc(`users/${user.uid}`).get()
        .then((userData) => {
            console.log("User Vendor :" + userData.data())
            return userData.data()
        })
        .catch((error) => {
            console.log("Cannot get User Data: ", error)
            return null;
        })
     }


const getUserFavoriteVendors = async (user) => {
    let userData = await getUserData(user)
    if (!userData) {
        return []
    }
    return userData.favoriteVendor
}

export {updateUserLastName, updateUserFirstName, deleteUser, updateUserAuthDisplayName, getUserFavoriteVendors}