import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AuthContext } from '../components/context'

const SettingsScreen = (props:any) => {
  const {signOut} = React.useContext(AuthContext)
    return (
        <View>
        <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >

        <View style={{margin:15}}>
            <ScrollView>         
            <View>
            <Text style={styles.headerText}>Account</Text>
            <View style={styles.bubble}>

              <TouchableOpacity   onPress={()=>{ console.log("navigating to update profile screen"); props.navigation.navigate('UpdateProfile')}}>
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={styles.innerText} >Change Account Information</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                </View>  
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{ console.log("navigating to update payment info screen"); props.navigation.navigate('PaymentInfo')}} >
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={styles.innerText} >Payment</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                </View>  
              </TouchableOpacity>


              <TouchableOpacity>
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={styles.innerText} >Address</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                </View>  
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={styles.innerText} >Privacy</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                </View>  
              </TouchableOpacity>

              <TouchableOpacity    >
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={styles.innerText} >Delivery Support</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />    
                </View>  
              </TouchableOpacity>
            </View>
            </View>

            <View>
            <Text style={styles.headerText}>App Settings</Text>
            <View style={styles.bubble}>
              <TouchableOpacity   >
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={styles.innerText} >Bookmarked Orders</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                </View>  
              </TouchableOpacity>

              <TouchableOpacity  >
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={styles.innerText} >Account Setting</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />


                </View>  
              </TouchableOpacity>


              <TouchableOpacity>
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={styles.innerText} >App Settings</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                </View>  
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={styles.innerText} >Contact Customer Service</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                </View>  
              </TouchableOpacity>
            </View>
            </View>

            <View>
            <Text style={{fontSize:36, fontWeight:'bold', marginVertical:10}}>More</Text>
            <View style={styles.bubble}>
            <TouchableOpacity>
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={styles.innerText}>Bookmarked Orders</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                </View>  
              </TouchableOpacity>

              <TouchableOpacity  >
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={styles.innerText} >Account Setting</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                </View>  
              </TouchableOpacity>


              <TouchableOpacity    >
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={styles.innerText} >App Settings</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                </View>  
              </TouchableOpacity>

              <TouchableOpacity    >
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={styles.innerText} >Contact Customer Service</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                </View>  
              </TouchableOpacity>

              <TouchableOpacity    onPress={()=> signOut()}>
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>Log Out!</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                </View>  
              </TouchableOpacity>  
              <TouchableOpacity    onPress={()=>{console.log('navigating to delete account page'); props.navigation.navigate("DeleteAccount")}}>
                <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>Delete Account</Text>
                <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
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

export default SettingsScreen

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
    elevation: 15, 
    borderWidth:.5, 
    borderRadius:20,  
    paddingHorizontal:10,
    borderColor:'black', 
    backgroundColor: '#f7f7f7'
  }
})
