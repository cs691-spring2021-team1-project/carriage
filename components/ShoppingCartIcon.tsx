import React from 'react'
import {Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { connect } from "react-redux";
const ShoppingCartIcon = (props:any,) => {
 const {cartItems,navigation } = props;
    return (
        <TouchableOpacity onPress={()=>{  navigation.navigate('CartScreen')}}>
            <View>
                <View style={styles.cartStatus}>
                    <Text style={styles.statusText}>
                        
                     {cartItems.length}
                        
                        
                    </Text>
                </View>
            <Image source={require('../assets/flat-cart.png')} />
            </View>
     
          
        </TouchableOpacity>
    )
}

const mapStateToProps = (state:any) =>{
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(ShoppingCartIcon)

const styles = StyleSheet.create({
    cartStatus:{
        position:'absolute',
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor:'red',
        right: 15, bottom: -8, alignItems: 'center',
        justifyContent:'center',
        zIndex: 42,
      
    },
    statusText:{
        color: '#f7f7f7',
        fontWeight:'bold'
    }
})
