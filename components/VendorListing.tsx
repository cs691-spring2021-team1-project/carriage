import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const VendorListing = ({shape, navigation}:any) => {
    const borderRadius = shape == "square" ? 0 : 100
    return (
        <View style={{height: 150, width: 150}}>
        <View style={{flex:2, alignItems: 'center'}}>
        <Image source={{uri: 'https://images.pexels.com/photos/1995010/pexels-photo-1995010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}
              style={{width: 100, height: 100, borderRadius: borderRadius, borderWidth:2, borderColor:'black'}}  />
        </View>
        <View style={{flex:1, alignItems: 'center'}}>
            <Text style={{fontWeight:'bold'}}>Vendor Name</Text>
            <Text  style={{fontWeight:'bold'}}>xx-xx mins</Text>
        </View>

</View>

    )
}

export default VendorListing

const styles = StyleSheet.create({})
