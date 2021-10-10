import React from 'react'
import { TouchableWithoutFeedback, Keyboard, StyleSheet, Text,StatusBar, View , Platform, Image, TouchableOpacity, TextInput, Alert} from 'react-native'
import { Ionicons as Icon , MaterialCommunityIcons as MaterialIcons, Feather, FontAwesome} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {Const} from '../constants'
import { specialCharacters } from '../constants/constants';
import { AuthContext } from '../components/context';
import { auth, createUserDocument } from '../firebase'
import { useNavigation } from '@react-navigation/core';



const SignUpScreen = ({navigation}:any) => {
  

    const reactNavigation = useNavigation;
    <StatusBar backgroundColor="#32965D" barStyle="light-content"/>
     const [data, setData] = React.useState({
         firstName: '',
         lastName: '',
         email: '',
         password:'',
         secureTextEntry: true,
         check_circle: false,
         validFirst: true,
         validLast: true,
         validEmail: true,
         validPassword: true

 
     })
     const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);
     
  
     React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          () => {
            setKeyboardVisible(true); // or some other action
          }
        );
        const keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          () => {
            setKeyboardVisible(false); // or some other action
          }
        );
    
        return () => {
          keyboardDidHideListener.remove();
          keyboardDidShowListener.remove();
        };
      }, []);
  
    const {signUp} =  React.useContext(AuthContext)
 


     const errorAlert = (title:string, msg:string) => {
         return Alert.alert(
            title,
            msg,
                [
                    {
                    text: "OK",
                    onPress: () => console.log("OK Pressed"),
                    style: "cancel"
                    },
                ]
        );
     }

     const nameHandler = (name:string) => {
         if (!name) {
            errorAlert("Invalid Input" , "Please fill all mandatory fields");
            console.log("name");
            console.log(name);
            return false;
         }
         if (name.length > 20) {
            errorAlert("Invalid Input" , "Text limit exceeded");
            return false;
         }
         if (name.match(specialCharacters) || name.includes(" ")) {
            errorAlert("Invalid Input" , "Special characters not allowed");
            return false;
         }

         return true;
     }

     const emailHandler = (email:string) => {
        if (!email) {
            errorAlert("Invalid Input" , "Please fill all mandatory fields")
            console.log("email");
            console.log(email)
            return false;
        }

        else if (email.length > 320) {
           errorAlert("Invalid Input" , "Email exceeds 320 size limit")
           return false;
        }

        else if (!email.includes('@')) {
           errorAlert("Invalid Input" , "Not a valid email address, missing @")
           return false;
        }
        
        else if (!email.match(Const.mailformat)) {
            errorAlert("Invalid Input", "Not a valid Email Please Check Again")
            return false;
        }

        return true;
     }

     const passwordHandler = (password:string) => {
        if (!password) {
            errorAlert("Invalid Input" , "Please fill all mandatory fields")
            return false;
        }

        else if (password.length < 12) {
           errorAlert("Invalid Input" , "Please provide a longer password")
           return false;
        }

        else if (Const.commonPasswords.includes(password)) {
           errorAlert("Invalid Input" , "Please Choose a Stronger Password")
           return false;
        }
        return true;
     }

     const signUpHandler = (firstName:string, lastName:string, email:string, password:string) => {
        console.log('NAMES passed in to signuphandler',firstName,lastName)
        if (!nameHandler(firstName) || !nameHandler(lastName)) {
            return;
        }
        if (emailHandler(email) && passwordHandler(password)) {
           
            try {
              let user;  
              auth.createUserWithEmailAndPassword(email, password)
                .then((userCredentials:any) => {
                    user = userCredentials.user;
                    user.getIdToken().then(function(idToken:any) {
                        console.log(idToken);
                        console.log(data)
                        signUp(email, idToken)
                     //   console.log('bootup user token: ', userToken);
                    })

                
              
                })


              createUserDocument(user, {firstName, lastName})
            } catch (error) {
                
            }
           
          
            // TODO: add ui message if email address already in use

           
        }
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


     const passwordInutChange = (val:string)=>{
        if(val.length > 12 && !Const.commonPasswords.includes(val)) {
            setData({
                ...data,
                password: val,
                validPassword: true
            })
         } else {
            setData({
                ...data,
                password: val,
                validPassword: false
            })
         }
     }

     const updateSecureTextEntry = () =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
     }
    return (
        <View style={styles.container}>
            {

            !isKeyboardVisible ? (
                <View style={styles.header}> 
                  <Image  source={require('../assets/App_Logo.png')}/>
                </View>
            ) : null
            }

<TouchableWithoutFeedback 
onPress={() => Keyboard.dismiss()}> 
            <Animatable.View animation="fadeIn" duration={1000} style={styles.form}> 

            <Text style={styles.text_footer}> First Name</Text>
           <View style={styles.action}>
                 <TextInput 
                 onChangeText={(val:string)=> firstNameInputChange(val)} 
               style={styles.textInput}/>
            
               </View>

               <Text style={styles.text_footer}> Last Name</Text>
           <View style={styles.action}>
                 <TextInput 
                 onChangeText={(val:string)=> lastNameInputChange(val)} 
               style={styles.textInput}/>
              
               </View>

               <Text style={styles.text_footer}> Email</Text>
           <View style={styles.action}>
                 <TextInput 
                 onChangeText={(val:string)=> emailInputChange(val)} 
               style={styles.textInput}/>
               {
                   data.check_circle ? (    <Animatable.View
                   animation="bounceIn"
                   duration={2000}>
                <Feather name="check-circle" color="white" size={20}/>
                </Animatable.View>  ):null
               }
               </View>
               {
               !data.validEmail ?  (
                <Animatable.View animation="fadeInLeft" duration={1000} >               
               <Text style={{color:'#963239', fontWeight:'bold', fontSize:16}}>Please enter a valid email</Text>
               </Animatable.View>
               ) : null
              }
               
               
               <Text style={styles.text_footer}> Password</Text>
           <View style={styles.action}>
           
               <TextInput  
               onChangeText={(p)=>passwordInutChange(p)}
             
               secureTextEntry={data.secureTextEntry}
               autoCapitalize="none"
               style={styles.textInput}/>
               <TouchableOpacity onPress={()=> {console.log("password"); updateSecureTextEntry();}}>
             {data.secureTextEntry ?   <Feather name="eye-off" color="white" size={20}/> :   <Feather name="eye" color="white" size={20}/> }
             
               </TouchableOpacity>
       
           </View>
           {
               !data.validPassword ?  (   
                <Animatable.View animation="fadeInLeft" duration={1000} >
                  <Text style={{color:'#963239', fontWeight:'bold', fontSize:16}}>Please enter a stronger password</Text>
                </Animatable.View>
                
               ) : null          
           }
       
            <View style={styles.buttons}>


        <TouchableOpacity onPress={()=> signUpHandler(data.firstName, data.lastName, data.email, data.password)}>
        <View style={[styles.button, 
        ]}>
        

        
        <LinearGradient colors={['#e9e9e9','#e9e9e9']}
        style={[styles.signUp, {
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1, 
            paddingHorizontal: 10
        }]}>
            <Text style={[styles.textSign, {color:'black'}]}>Sign Up!</Text>

        </LinearGradient>

        </View>
        </TouchableOpacity>


        </View>



        
       
<View style={styles.trouble}>

<TouchableOpacity>

    <Text style={styles.troubleText}>Trouble Logging In? Click Here</Text>
</TouchableOpacity>
</View>



            </Animatable.View>
</TouchableWithoutFeedback>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        backgroundColor: '#32965D',

    },
    header:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 30,

    },
    form:{
        flex:4,
       
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 50

    },

    text_header:{
        color:"#f7f7f7",
        fontWeight: 'bold',
        fontSize: 30
    },

    text_footer:{
        color:"#fff",
        
        fontSize: 20,
        fontWeight: 'bold'
    },
    action:{
        flexDirection: 'row',
        marginVertical: 10,
        borderBottomWidth: .25,
        borderBottomColor: "#000",
        paddingBottom: 5,
        backgroundColor: '#2b8351',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
      
        
    },
    textInput:{
        flex:1,
        color: "#fff",
        fontSize: 20,
        paddingLeft: 5,
      

        
    },
    button:{
        alignItems: 'center',
        margin: 30,
        width: 130,
        height: 39,
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
    buttons:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    trouble:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    troubleText:{
        borderBottomColor: 'black',
        borderBottomWidth: 1
    }


})
