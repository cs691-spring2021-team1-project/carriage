import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import VendorListing from './VendorListing'

const Listing = (props:any) => {
    const {title} = props;
    console.log(title)
    return (
        <View  style={{flex:1, padding: 10}}>
        <Text style={{fontSize:24, fontWeight: '700',margin: 5}}>
           {title}
        </Text>
       
        <View  style={{height: 150}}>
           <ScrollView  
           horizontal={true} 
           showsHorizontalScrollIndicator={false}
           showsVerticalScrollIndicator={false}
           style={{backgroundColor:'#f7f7f7', padding: 4}}>
          
          <VendorListing/>
          <VendorListing/>
          <VendorListing/>
          <VendorListing/>
   
   
         </ScrollView>
         </View>
        
   
  </View>

    )
}

export default Listing

const styles = StyleSheet.create({})
