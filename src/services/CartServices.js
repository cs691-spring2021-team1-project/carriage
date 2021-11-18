import db from '../config/firebase'

const firestore = db.firestore();

const auth = db.auth()
const user = auth.currentUser

export const getOrderDetails = async (orderID, currentUser = user) => {

    console.log("hi")
    console.log(user)

    if (!user || !orderID) {
        console.error("User Not Logged In")
        return
    }
    // // check variable contents
    // // console.log("User: ", currentUser)
    // let result = true;

    
    // //
    // // create user doc in users collection with same uid
    const userDocument = await firestore.doc(`users/${currentUser.uid}`).get()

    let userData = await userDocument.data()

    console.log( userData.pastOrder[0].orderStatus)

    // return orderData

}

