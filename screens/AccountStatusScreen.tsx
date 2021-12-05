import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AuthContext } from '../components/context'
import { LinearGradient } from 'expo-linear-gradient';

const AccountStatusScreen = (props:any) => {
  const {signOut} = React.useContext(AuthContext)
    return (
        <View>
        <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >

        <View style={{margin:15}}>
            <ScrollView>         
            <View>
            <Text style={styles.headerText}>Account Status</Text>
            <View style={styles.bubble}>


        
             <Text style={styles.innerText}>Membership Status: Premium</Text>
             

             <TouchableOpacity onPress={()=> console.log('upgrade/downgrade')}>
        <View style={[styles.button, 
        ]}>
        

        
        <LinearGradient colors={['#e9e9e9','#e9e9e9']}
        style={[styles.gradient, {
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1, 
            paddingHorizontal: 10
        }]}>
            <Text style={[styles.btnText, {color:'black'}]}>Downgrade</Text>

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

export default AccountStatusScreen

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
    height: 300,
    
  },
  button:{
    width: 150,
  },
  gradient:{
    alignItems:'center',
    justifyContent: 'center'

  },
  btnText:{
      alignItems:'center',
      justifyContent: 'center',
      fontSize: 20,
      fontWeight: 'bold'


  }
})
