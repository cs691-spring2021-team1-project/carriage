import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AuthContext } from '../components/context'
import { LinearGradient } from 'expo-linear-gradient';

const RateItemScreen = (props:any) => {
    return (
        <View>
        <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >

        <View style={{margin:15}}>
            <ScrollView>         
            <View>
                <Text style={styles.headerText}>Rate This Item</Text>
                  <View style={styles.bubble}>
                  <Image style={{marginHorizontal:5, height: 100, width: 200}} source={require('../assets/celery.jpg')} />
             
                        <TouchableOpacity   onPress={()=>{ console.log("submitting rating"); }}>
                        <View style={{flexDirection: 'column', height: 48, alignItems: 'center'}}>
                        <Text style={styles.innerText} >Celery </Text>
                        <Text style={styles.innerText} >1.99 </Text>
                       
                        <Text style={styles.innerText} > ⭐⭐⭐⭐⭐ </Text>
                    
                        </View>  
                        
                    </TouchableOpacity>
                </View>

                <View style={{margin: 20}}>
                      <TouchableOpacity onPress={()=> { console.log("submitting review")   }}>
                      <View style={[styles.button, 
                      ]}>
                      <LinearGradient colors={['#FFC250','#FFC250']}
                      style={[styles.addCardBtn, {
                      borderRadius: 10,
                      borderColor: 'black',
                      borderWidth: 1.5, 

                      paddingHorizontal: 10
                      }]}>
                      <Text style={[styles.text, {color:'black'}]}>SUBMIT</Text>
                      </LinearGradient>
                      </View>
                      </TouchableOpacity>   

                </View>

            </View>

            </ScrollView>
        </View>
        </ImageBackground>
        </View>
    )
}

export default RateItemScreen

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
    backgroundColor: '#f7f7f7',
    flex:1,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    alignItems: 'center',
 
    width: "100%",
    height: 39,
},
addCardBtn:{
    width: "100%",
    height: 39,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:0,
    paddingHorizontal: 10

},
text:{
  fontSize: 20,
  fontWeight:'bold',
  alignItems: 'center'
}
})
