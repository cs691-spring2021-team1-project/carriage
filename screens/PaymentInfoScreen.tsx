import React from 'react';
import { StyleSheet, Text, View ,Button, TextInput, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native';


const  PaymentInfoScreen = () => {
    return (
        <View> 
            <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >
                <View style={styles.container}>
                    <Text>Payment Info</Text>
                    <Button title="ADD CARD" onPress={()=>{console.log("adding card")}}></Button>
                </View>
            </ImageBackground>
        </View>
   
    );
}

export default PaymentInfoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        paddingTop: 10
      
     
      },

})