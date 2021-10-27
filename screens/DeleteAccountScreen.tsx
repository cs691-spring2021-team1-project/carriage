import React from 'react'
import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, Text, View ,Button, TextInput, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { specialCharacters } from '../constants/constants';
import {Const} from '../constants'
import { auth, firestore } from '../firebase';

const DeleteAccountScreen = (props:any) => {
  const [isSelected, setSelection] = React.useState(false);

   
  React.useEffect(()=>{


  },[])


  const getCurrentUser = () =>{

  
  }

  const deleteCurrentUser = () =>{
    // TODO
    // delete auth
    // delete user db
    // clean up 
    // navigate to home or profile screen
  }

    return (
        <View> 
            <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >
                <View style={styles.container}>
                    <ScrollView>      
                        <Text style={{fontSize:36, fontWeight:'bold', marginVertical:10}}>Delete Account</Text>
                    
                        <View style={{elevation: 15, padding: 10, borderWidth:.5, borderRadius:20,  paddingHorizontal:10, borderColor:'black', backgroundColor: '#f7f7f7'}}>
                            <Text style={styles.label}>
                              Are you sure you want to delete your account?
                              Deleting your account may be permanent and you will lose
                              your settings, favorited locations and order history.
                              
                              Still interested in deleting?
                            
                            </Text>
                          
                         
                            <View style={styles.container}>
                              <View style={styles.checkboxContainer}>
                              {/* <CheckBox
                              value={isSelected}
                              onValueChange={setSelection}
                              style={styles.checkbox}
                              /> */}
                              <Text style={styles.label}>Yes, I would like to delete my account.</Text>
                              </View>
                           
                            </View>


                            <View style={styles.buttons}>
                                <TouchableOpacity onPress={()=> console.log("deleting account")}>
                                  <View style={styles.button}>
                                    <LinearGradient colors={['#FF0000','#FF0000']}
                                    style={[styles.signUp, {
                                    borderRadius: 10,
                                    borderColor: '#ff0000',
                                    borderWidth: 1, 
                                    paddingHorizontal: 10
                                    }]}>
                                    <Text style={[styles.textSign, {color:'#f7f7f7'}]}>Delete</Text>

                                    </LinearGradient>
                                  </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=> {console.log("canceled update");  props.navigation.navigate('Settings')}}>
                                  <View style={styles.button}>
                                    <LinearGradient colors={['#020202','#020202']}
                                    style={[styles.signUp, {
                                    borderRadius: 10,
                                    borderColor: '#020202',
                                    borderWidth: 1, 
                                    paddingHorizontal: 10
                                    }]}>
                                    <Text style={[styles.textSign, {color:'#f7f7f7'}]}>Cancel</Text>

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

export default DeleteAccountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        paddingTop:10
     
      },
      checkboxContainer: {
        flexDirection: "row",
        margin: 10,
        alignSelf: 'flex-start'
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
        color: 'black',
        fontSize: 20
      },
      buttons:{
         margin:15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly'
          
      },
      button:{
        alignItems: 'center',
        margin: 30,
        width: 130,
        height: 39,
     },
      text_footer:{
        color:"black",
        
        fontSize: 20,
        fontWeight: 'bold'
    },
    action:{
        flexDirection: 'row',
        marginVertical: 10,
        borderBottomWidth: .25,
        borderBottomColor: "#000",
        paddingBottom: 5,
        backgroundColor: '#F7F7F7',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
      
        
    },
    textInput:{
        flex:1,
        color: "black",
        fontSize: 20,
        paddingLeft: 5,
      

        
    },
    signUp:{
      width: 130,
      height: 39,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius:0,
      paddingHorizontal: 10

  },
  textSign:{
      fontSize: 20,
      fontWeight:'bold'
  },
})
