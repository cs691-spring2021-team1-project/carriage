import db from '../config/firebase'

const firestore = db.firestore();

const auth = db.auth()
const user = auth.currentUser

export const getOrderDetails = async (orderID, currentUser = user) => {

    if (!user || !orderID) {
        console.error("User Not Logged In")
        return
    }
    // check variable contents
    // console.log("User: ", currentUser)
    let result = true;
    //
    // create user doc in users collection with same uid
    const userData = await firestore.doc(`users/${currentUser.uid}`).get()

    let orderData = await userData.data()

    // console.log(orderData.currentOrders[0].orderId)

    return orderData.currentOrders[0]

}

