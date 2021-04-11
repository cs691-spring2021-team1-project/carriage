import React from 'react'
import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity} from 'react-native'

const OrderHistory = () => {
    return (
        <View>
              <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >

           <View> 
                <Image style={{marginHorizontal:5}} source={require('../assets/minimap.png')} />
           </View>
          
           <View style={styles.island}></View>
          
          
           <View style={styles.history}>
          <Text style={styles.h1}>Order History + Progress</Text>
          <Text style={styles.h1}>Order Details</Text>
          <Text style={styles.h1}>Address</Text>
     
     
            </View>

          
           </ImageBackground>
        </View>
    )
}

export default OrderHistory

const styles = StyleSheet.create({
    island:{
        height: 43,
        width: 325,
        alignSelf:'center',
        backgroundColor: '#f7f7f7',
        borderRadius: 20,
        elevation: 5,
        shadowColor: 'black',
        shadowRadius: 10,
        margin: 5,
        borderWidth: .25

    },
    history:{
        height: 273,
        width: 345,
        backgroundColor: '#f7f7f7',
        borderRadius: 20,
        elevation: 5,
        shadowColor: 'black',
        shadowRadius: 10,
        margin: 5,
        borderWidth: .25,
        alignSelf: 'center',
        padding: 10
    },
    h1:{
        fontSize: 24,
        fontWeight: 'bold'
    }
})
