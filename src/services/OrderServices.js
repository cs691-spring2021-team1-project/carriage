//NOTE: - For Order Based Functions
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, firestore } from '../config';

const getPastOrdersData = async (user, setPastOrders) => {
    
    return firestore.doc(`users/${user.uid}`).get()
    .then(function(doc) {
        const data = doc.data()
 
        try {
     
        setPastOrders(data['pastOrders'])
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
        setCurrentOrders(data['currentOrders'])
        console.log("CURRENT ORDER DATA in Firestore Retreived:", error)
       
       } catch (error) {
          console.log("CANNOT GET CURRENT ORDER DATA in Firestore:", error)
       
      

       
       }
         
      //  console.log("Past Order Data in Firestore Retreived", doc.data())

     
     
     return true;
    })
    .catch((error) => {
        console.log("CANNOT GET CURRENT ORDER DATA in Firestore:", error)
        return false;
    })
}




export {getPastOrdersData, getCurrentOrdersData}