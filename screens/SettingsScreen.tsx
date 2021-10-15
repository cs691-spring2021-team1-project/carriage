import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Modal, TextInput, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AuthContext } from '../components/context'
import {Mixins} from '../src/styles/'

const SettingsScreen = () => {
  const {signOut, deleteAccount} = React.useContext(AuthContext)

  // This is to manage Modal State
  const [isModalVisible, setModalVisible] = useState(false);
  
  // This is to manage TextInput State
  const [inputValue, setInputValue] = useState("");

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
      setModalVisible(!isModalVisible);
  };

  

    return (
        <View>
        <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >

        <View style={{margin:15}}>
            <View>
              <Modal animationType="slide" 
                    transparent visible={isModalVisible} 
                    presentationStyle="overFullScreen" 
                    onDismiss={toggleModalVisibility}>
                  <View style={styles.viewWrapper}>
                      <View style={styles.modalView}>
                          <TextInput placeholder="Enter something..." 
                                    value={inputValue} style={styles.textInput} 
                                    onChangeText={(value) => setInputValue(value)} />
    
                          {/** This button is responsible to close the modal */}
                          <Button title="Close" onPress={toggleModalVisibility} />
                      </View>
                  </View>
                </Modal>
            </View>
            <ScrollView>

            <View>
            <Text style={{fontSize:28, fontWeight:'bold', marginVertical:10}}>Account</Text>
            <View style={{elevation: 10,borderWidth:1, borderRadius:20,  paddingHorizontal:10, borderColor:'black', backgroundColor: '#f7f7f7'}}>
                      <TouchableOpacity onPress={toggleModalVisibility}>
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

                       <TouchableOpacity    onPress={()=> deleteAccount()}>
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
  viewWrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      elevation: 5,
      transform: [{ translateX: -(Mixins.WINDOW_WIDTH * 0.4) }, 
                  { translateY: -90 }],
      height: 180,
      width: Mixins.WINDOW_WIDTH * 0.8,
      backgroundColor: "#fff",
      borderRadius: 7,
  },
  textInput: {
      width: "80%",
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderWidth: 1,
      marginBottom: 8,
  },
});