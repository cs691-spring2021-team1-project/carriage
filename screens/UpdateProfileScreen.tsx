import React from 'react'
import { StyleSheet, Text, View ,Button, TextInput, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { specialCharacters } from '../constants/constants';
import { Validators } from '../src/Utils';
import {Const} from '../constants'
import {UserService} from '../src/services'
import { auth, firestore } from '../firebase';

const UpdateProfileScreen = (props:any) => {
    const [data, setData] = React.useState({
      firstName: '',
      lastName: '',
      email: '',  
      secureTextEntry: true,
      check_circle: false,
      validFirst: true,
      validLast: true,
      validEmail: true,
      validPassword: true


  })
  const [userData, setUserData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
   

})
  const [formChange, setFormChange] = React.useState({
    firstName: false,
    lastName: false,
    email: false,
   

})
    const getCurrentUser = () =>{
       const unsubscribe = auth.onAuthStateChanged(function(userCreds) {
          if (userCreds) {
            // User is signed in.
            console.log("userCreds is signed in.",userCreds['uid'])
            firestore.collection("users").get()
              .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
               if(doc.id == userCreds['uid']){
                let res = doc.data()
                console.log("userprofile update current data", res)
            
                setUserData({firstName: res['firstName'], lastName: res['lastName'], email: res['email']})
                return;
               }
             
              });
            });
          } else {
            // No user is signed in.
            console.log("no user is signed in")
          }

       
        });
        return unsubscribe;
      }

      React.useEffect(()=>{
        const unsubscribe = getCurrentUser()
        return unsubscribe;
      },[])


      const updateCurrentUser = async () =>{
        console.log(data)

        // TODO
       
        let user = auth.currentUser

        if (!user) {
          console.log("No User Logged In")
          return
        }

        // update user db

        if (Validators.updateFieldValidator(data['firstName'])) {
          await UserService.updateUserFirstName(user, data['firstName'])
        }

        if (Validators.updateFieldValidator(data['lastName'])) {
          await UserService.updateUserLastName(user, data['lastName'])
        }
        
        // update auth
        if (Validators.updateFieldValidator(data['firstName'])) {
          await UserService.updateUserAuthDisplayName(user, data['firstName'])
        }

        // clean up
       
        setData({
          firstName: '',
          lastName: '',
          email: '',  
          secureTextEntry: true,
          check_circle: false,
          validFirst: true,
          validLast: true,
          validEmail: true,
          validPassword: true
        })
      
        // navigate to home or profile screen

        props.navigation.navigate('HomeDrawer')
      }
      
      const firstNameInputChange = (val:string)=>{
        if(val.length != 0){
            setData({
                ...data,
                firstName: val,
             
            })
        } else {
            setData({
                ...data,
                firstName: val,
             
            })
        }

    

     }

     const lastNameInputChange = (val:string)=>{
        if(val.length != 0){
            setData({
                ...data,
                lastName: val,
             
            })
        } else {
            setData({
                ...data,
                lastName: val,
             
            })
        }


     }

     const emailInputChange = (val:string)=>{
           

         if(val.length > 0 && val.length < 320 && val.match(Const.mailformat)){
            setData({
                ...data,
                email: val,
                check_circle: true,
                validEmail: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_circle: false,
                validEmail: false
            })
        }
  


     }




    return (
        <View> 
            <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >
                <View style={styles.container}>
                    <ScrollView>      
                        <Text style={{fontSize:36, fontWeight:'bold', marginVertical:10}}>Profile Details</Text>
                    
                        <View>
                            
                          
                            <View style={styles.inputContainer}>
                                <Text style={styles.text}>First Name:</Text>
                                <TextInput 

                                onChangeText={(val:string)=> firstNameInputChange(val)} 
                                style={styles.textInput}
                                value={data['firstName']}
                               />
                            </View>    

                            <View style={styles.inputContainer}>
                              <Text style={styles.text}>Last Name:</Text>

                              <TextInput 
                              onChangeText={(val:string)=> lastNameInputChange(val)} 
                              style={styles.textInput}
                              value={data['lastName']}
                              />
                            </View>    

                            {/* 
                            <View style={styles.inputContainer}>
                                <Text style={styles.text}> Email</Text>
                                <TextInput 
                                onChangeText={(val:string)=> emailInputChange(val)} 
                                style={styles.textInput}
                               />
                            </View>     */}


                            <View style={styles.buttons}>
                                <TouchableOpacity onPress={()=> updateCurrentUser()}>
                                  <View style={styles.button}>
                                    <LinearGradient colors={['#FFC250','#FFC250']}
                                    style={[styles.signUp, {
                                    borderRadius: 10,
                                    borderColor: 'black',
                                    borderWidth: 1, 
                                    paddingHorizontal: 10
                                    }]}>
                                    <Text style={[styles.textSign, {color:'black'}]}>Update</Text>

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

export default UpdateProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        paddingTop: 10
      
     
      },
      buttons:{
         margin:40,
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
      text:{
        color:"black",
        
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputContainer:{
      flexDirection: 'row',
      marginVertical: 10,
      borderBottomWidth: .25,
      borderBottomColor: "#000",
      paddingBottom: 5,
      backgroundColor: '#f7f7f7',
      borderRadius: 15,
      padding: 5,
      elevation: 5,
  
      
        
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
