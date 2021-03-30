import React from 'react'
import { StyleSheet, Text, View,Button, ScrollView , Image, ImageBackground} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper   from "react-native-swiper";
import Listing from '../components/Listing'

export default function HomeScreen({navigation}:any) {
    return (
        <View>
      
         <View style={{height: 70, backgroundColor: "#32965D", flexDirection: 'row'}}>
         <TouchableOpacity style={{marginHorizontal:10}} >
             <Image source={require('../assets/FavoriteVendorButton.png')}
              style={{width: 50, height: 50, borderRadius: 100}}  />
             </TouchableOpacity>
         <ScrollView
              horizontal={true} 
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              
         >
           
             <TouchableOpacity style={{marginHorizontal:10}}>
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
             </TouchableOpacity>
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
       
     
       
        
     <ScrollView style={{backgroundColor: '#e5e5e5'}}>
      <ImageBackground style={{width: "100%"}} source={require('../assets/MasterBG.png')}>

      <Listing title="Popular"/>
     <Listing title="Vegan Friendly"/>
     <Listing title="Bodega"/>
    
      </ImageBackground>
      
   
     
          </ScrollView>

        </View>


     


      
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    }
})
