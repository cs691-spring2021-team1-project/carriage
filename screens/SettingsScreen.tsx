import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AuthContext } from '../components/context'

const SettingsScreen = () => {
  const {signOut} = React.useContext(AuthContext)
    return (
        <View>
        <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >

        <View style={{margin:15}}>
            <ScrollView>


          
            <View>
            <Text style={{fontSize:28, fontWeight:'bold', marginVertical:10}}>Account</Text>
            <View style={{elevation: 10,borderWidth:1, borderRadius:20,  paddingHorizontal:10, borderColor:'black', backgroundColor: '#f7f7f7'}}>
                     <TouchableOpacity   >
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text >Change Account Information</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                          </View>  
                       </TouchableOpacity>
        
                       <TouchableOpacity  >
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text >Payment</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>
        

                       <TouchableOpacity    >
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text >Address</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>

                       <TouchableOpacity    >
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text >Privacy</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>
                       <TouchableOpacity    >
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text >Delivery Support</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>
            </View>
            </View>

            <View>
            <Text style={{fontSize:28, fontWeight:'bold', marginVertical:10}}>App Settings</Text>
            <View style={{borderWidth:1, borderRadius:20,  paddingHorizontal:10, borderColor:'black', backgroundColor: '#f7f7f7'}}>
                     <TouchableOpacity   >
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text >Bookmarked Orders</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                          </View>  
                       </TouchableOpacity>
        
                       <TouchableOpacity  >
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text >Account Setting</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>
        

                       <TouchableOpacity    >
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text >App Settings</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>

                       <TouchableOpacity    >
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text >Contact Customer Service</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>
            </View>
            </View>

            <View>
            <Text style={{fontSize:28, fontWeight:'bold', marginVertical:10}}>More</Text>
            <View style={{borderWidth:1, borderRadius:20,  paddingHorizontal:10, borderColor:'black', backgroundColor: '#f7f7f7'}}>
                     <TouchableOpacity   >
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text >Bookmarked Orders</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                          </View>  
                       </TouchableOpacity>
        
                       <TouchableOpacity  >
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text >Account Setting</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>
        

                       <TouchableOpacity    >
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text >App Settings</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>

                       <TouchableOpacity    >
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text >Contact Customer Service</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>

                       <TouchableOpacity    onPress={()=> signOut()}>
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>Log Out!</Text>
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

const styles = StyleSheet.create({})
