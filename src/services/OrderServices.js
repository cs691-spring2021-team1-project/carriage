//NOTE: - For Order Based Functions
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, firestore } from '../config';

const getPastOrdersData = async (user, setPastOrders) => {
    
    return firestore.doc(`users/${user.uid}`).get()
    .then(function(doc) {
        const data = doc.data()
 
        try {
     
        setPastOrders(data.pastOrders)
        console.log(data.pastOrders)
        console.log("PAST OrderData in Firestore Retrieved")
        } catch (error) {
           console.log("CANNOT GET PAST ORDER DATA in Firestore", error)
         //  console.log("Data Retrieved from user", data)
       
 
        
        }
          
       //  console.log("Past Order Data in Firestore Retreived", doc.data())
 
      
      
      return true;
     })
    .catch((error) => {
        console.log("CANNOT GET PAST ORDER DATA in Firestore:", error)
        return false;
    })
}


const getCurrentOrdersData = async (user, setCurrentOrders) => {
    return firestore.doc(`users/${user.uid}`).get()
    .then(function(doc) {
       const data = doc.data()

       try {
        setCurrentOrders(data.currentOrders)
        console.log("CURRENT ORDER DATA in Firestore Retreived:", error)
       
       } catch (error) {
          console.log("CANNOT GET CURRENT ORDER DATA in Firestore:", error)
       
      

       
       }
         
      //  console.log("Past Order Data in Firestore Retreived", doc.data())

     
     
     return true;
    })
    .catch((error) => {
        console.log("CANNOT GET USER DATA in Firestore:", error)
        return false;
    })
}


// FIXME: breakdown into multiple functions. just a very ugly quick and dirty method for functionlaity
const cancelCurrentOrder = async (user) => {
    if (!user) {
        console.error("User Not Logged In")
        return
    }

    const userDocument = await firestore.doc(`users/${user.uid}`).get()

    let userData = await userDocument.data()

    if (!userData.currentOrders[0]) {
        console.log("No current orders")
        return
    }

    let orderData = userData.currentOrders[0]

    if (orderData.orderStatus == 'DELIVERY IN PROGRESS') {
        console.log("Cannot Cancel Order")
        return
    }

    console.log("WE CAN CANCEL")

    orderData.orderStatus = 'CANCELLED'

    firestore.doc(`users/${user.uid}`).update({
        currentOrders: []
    })
    .then(() => {
        console.log("Order Cancelled")
       
    })
    .catch((error) => {
        console.log("Cannot Cancel Order", error)
        
    })

    firestore.doc(`users/${user.uid}`).update({
        pastOrders: [orderData]
    })
    .then(() => {
        console.log("Order Archived")
       
    })
    .catch((error) => {
        console.log("Cannot Archive Order", error)
        
    })
}




export {getPastOrdersData, getCurrentOrdersData, cancelCurrentOrder}