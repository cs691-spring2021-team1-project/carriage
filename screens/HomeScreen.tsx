import React from 'react'
import { StyleSheet, Text, View,Button, ScrollView , Image, ImageBackground} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper   from "react-native-swiper";
import Listing from '../components/Listing'
import {VendorService } from '../src/services';
import { UserService } from '../src/services';
import { auth } from '../firebase'; 

export default function HomeScreen({navigation}:any) {

    const [vendors, setVendors]  = React.useState([])
    const [favVendors, setFavVendors]  = React.useState([])

    React.useEffect(()=>{
        let user = auth.currentUser
        getUserFavVendors(user)
        // getVendors(vendorID)
    },[])

    // const getVendors = async(vendorID:any) => {
    //     try {
    //         let vendors = await VendorService.getVendorsByID(vendorID)
    //         vendors.forEach(doc => {
    //             console.log(doc.id, '=>', doc.data());
    //           });
    //     } catch(error) {
    //         console.error(error)
    //     }
    // }

    const getUserFavVendors = async(user:any) => {
            let userFavVendors = await VendorService.getUserFavVendors(user)
            
            setFavVendors(userFavVendors)
            console.log("Fav Vendors After")
            console.log(favVendors)
    }
    // TODO: CREATE VENDOR PAGE
    // TODO: CREATE GETVENDORITEM FUNCTION
    // TODO CREATE FAVORITEVENDOR FUNCTION
    // TODO: CREATE FAVORITEITEM FUNCTION
    const FavVendorHandler = (venderInfo: any) => {
        // navigate to vendor page
    }

    const renderFavVendors = favVendors?.map((info:any, i:number)=> (
        <View key={i}> 
            <TouchableOpacity style={{marginHorizontal:10}}>
                <Image source={require('../assets/FavoriteVendor1.png')}
                style={{width: 50, height: 50, borderRadius: 100}}  />
            </TouchableOpacity>
        </View>
    ))

    
    return (

        <View style={{flex:1}}>
          {/*how we fixed the scroll cap issue ^^^ */}
         <View style={{height: 70, backgroundColor: "#32965D", flexDirection: 'row'}}>
         <TouchableOpacity style={{marginHorizontal:10}}  onPress={()=>{ console.log("adding favorite"); navigation.navigate("AddStoreToFavorites")}}>
             
             <Image source={require('../assets/FavoriteVendorButton.png')}
              style={{width: 50, height: 50, borderRadius: 100}}  />
             </TouchableOpacity>
         <ScrollView
              horizontal={true} 
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              
         >
           
             {/* <TouchableOpacity style={{marginHorizontal:10}}>
             <Image source={require('../assets/FavoriteVendor1.png')}
              style={{width: 50, height: 50, borderRadius: 100}}  />
             </TouchableOpacity>
             <TouchableOpacity style={{marginHorizontal:10}} >
             <Image source={require('../assets/FavoriteVendor1.png')}
              style={{width: 50, height: 50, borderRadius: 100}}  />
             </TouchableOpacity>
             <TouchableOpacity style={{marginHorizontal:10}}>
             <Image source={require('../assets/FavoriteVendor1.png')}
              style={{width: 50, height: 50, borderRadius: 100}}  />
             </TouchableOpacity>
             <TouchableOpacity style={{marginHorizontal:10}}>
             <Image source={require('../assets/FavoriteVendor1.png')}
              style={{width: 50, height: 50, borderRadius: 100}}  />
             </TouchableOpacity >
             <TouchableOpacity style={{marginHorizontal:10}}>
             <Image source={require('../assets/FavoriteVendor1.png')}
              style={{width: 50, height: 50, borderRadius: 100}}  />
             </TouchableOpacity> */}
             {favVendors?.length > 0 ? renderFavVendors: <View></View>}
         </ScrollView>
        </View>
      
         <View style={{height:128}}> 
         <Swiper style={{height: 128}}>
         <View style={{flex:1}}>
                <Image style={{flex:1,  width: '100%', height: 100}} source={require('../assets/banner1.png')} />
            </View>
         
            <View style={{flex:1}}>
            <Image style={{flex:1, width: '100%', height: 200, resizeMode: 'cover'}} source={require('../assets/banner1.png')} />
            </View>
        
            <View style={{flex:1}}>
            <Image style={{flex:1, width: '100%', height: 200}} source={require('../assets/banner1.png')} />
  
            </View>
          </Swiper>
         </View>
       
     
       

  <ScrollView  
         horizontal={false} 
         showsHorizontalScrollIndicator={false}
         showsVerticalScrollIndicator={false}
         
         >
           
           <ImageBackground style={{height: "100%",
         
        }} source={require('../assets/MasterBG.png')}>
            
            {/* for each listing pass a listing*/}
            <Listing title="Popular" navigation={navigation}/>
            <Listing title="Vegan"/>
            <Listing title="Bodega"/>
            <Listing title="Smoothies"/>
            <Listing title="Fro-yo"/>  
            <Listing title="Farmers Market" />



 
    
      
   

     </ImageBackground>
     
 

      
          </ScrollView>

      </View> 


       

    



     


      
    )
}

const styles = StyleSheet.create({

    container:{

    },
    scrollContainer:{
        flex:1
    },
    scrollview:{
        flex:1
    }
})
