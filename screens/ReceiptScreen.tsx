import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AuthContext } from '../components/context'

const ReceiptScreen = (props:any) => {
    return (
        <View>
        <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >

        <View style={{margin:15}}>
            <ScrollView>         
            <View>
                <Text style={styles.headerText}>Reciepts</Text>
                <View style={styles.bubble}>
                                             <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                        <Text style={styles.innerText} >Item </Text>
                        <Text style={styles.innerText} >Price </Text>
                        <TouchableOpacity   onPress={()=>{ console.log("navigating to Rate Item screen"); props.navigation.navigate('RateItem')}}>
  
                        <Text style={styles.innerText} > ***** </Text>
                                    
                    </TouchableOpacity>
                        <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                        </View>  
            
                </View>
            </View>
            </ScrollView>
        </View>
        </ImageBackground>
        </View>
    )
}

export default ReceiptScreen

const styles = StyleSheet.create({

  headerText:{
    fontSize:36, 
    fontWeight:"bold", 
    marginVertical:10

  },
  
  innerText:{
    fontSize:24,
    fontWeight: '600'
  },
  bubble:{
    elevation: 5, 
    borderWidth:.25, 
    borderRadius:20,  
    paddingHorizontal:10,
    borderColor:'black', 
    backgroundColor: '#f7f7f7'
  }
})
