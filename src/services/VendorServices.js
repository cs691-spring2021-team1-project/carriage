import db from '../config/firebase'

const firestore = db.firestore();

const getVendor = async () => {
    const vendorRef = await firestore.collection('vendors')
    const vendors = await vendorRef.get()
    return vendors
}

const getVendorByID = async (vendorID) => {
    const vendorRef = await firestore.collection('vendors').doc(vendorID).get()
    return vendorRef.data()
}

const getVendorsByID = async (vendorIDs) => {
    const vendors = []
    for (const vendorID of vendorIDs) {
        const vendor = await getVendorByID(vendorID)
        vendors.push(vendor)
    }
    console.log("Vendors")
    console.log(vendors)
    return vendors
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

export const getUserFavVendors = async (user) => {
    return getUserFavoriteVendors(user)
        .then((vendorIDs) => {
            // vendorIDs.forEach(async (vendorID: any) => {
            //     let vendor = await getVendorsByID(vendorID)
                
            //     console.log("Favorited Vendors: " + vendor.name)
            // })
            return getVendorsByID(vendorIDs)
            
        })
        .catch((error)=> {
            console.error(error)
            return []
        })
}