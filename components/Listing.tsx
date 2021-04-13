import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import VendorListing from './VendorListing'

const Listing = (props:any) => {
    const {title, shape, navigation} = props;
    console.log(title)
    return (
        <View  >
        <Text style={{fontSize:24, fontWeight: '700',margin: 5}}>
           {title}
        </Text>
       
        <View  style={{height: 150, elevation:5}}>
           <ScrollView  
           horizontal={true} 
           showsHorizontalScrollIndicator={false}
           showsVerticalScrollIndicator={false}
           style={{backgroundColor:'#f7f7f7', padding: 4}}>

          {/* for each vendor pass a vendor*/}
          <TouchableOpacity onPress={()=>navigation.navigate("Item_Categories")}>
          <VendorListing shape={shape} />
          </TouchableOpacity>

          <VendorListing shape={shape}/>
          <VendorListing shape={shape}/>
          <VendorListing shape={shape}/>
   
 
         </ScrollView>
         </View>
        
   
  </View>

    )
}

export default Listing

const styles = StyleSheet.create({})
