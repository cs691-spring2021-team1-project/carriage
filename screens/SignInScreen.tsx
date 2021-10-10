import React from 'react'
import { TouchableWithoutFeedback, Keyboard, StyleSheet, Text,StatusBar, View , Platform, Image, TouchableOpacity, TextInput, Alert} from 'react-native'
import { Ionicons as Icon , MaterialCommunityIcons as MaterialIcons, Feather, FontAwesome} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../components/context';
import { Const } from '../constants';
import { auth } from '../firebase';

const SignUpScreen = ({navigation}:any) => {

     const [data, setData] = React.useState({
         email: '',
         password:'',
         secureTextEntry: true,     
         check_circle: false,
         validEmail: true,
         validPassword: true
     })

     const {signInToken} = React.useContext(AuthContext)
   
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

     const signInHandler = (email:string, password:string) => {
        if (emailHandler(email) && passwordHandler(password)) {
            auth.signInWithEmailAndPassword(email, password)
            .then((userCredentials:any) => {
                const user = userCredentials.user;
                user.getIdToken().then(function(idToken:any) {
                   // console.log(idToken);
                    signInToken(email, idToken)
                 //   console.log('bootup user token: ', userToken);
                });
                console.log(data)
                
               
            }).catch((error:any)=> alert(error))
           
        }
     }

     const textInputChange = (val:string)=>{
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

     const passwordInutChange = (val:string)=> {
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
            <View style={styles.header}> 

            <Image  source={require('../assets/App_Logo.png')}/>
            </View>

            <TouchableWithoutFeedback 
                onPress={() => Keyboard.dismiss()}> 

            <Animatable.View animation="fadeIn" duration={1000} style={styles.form}> 

       
               <Text style={styles.text_footer}> Email</Text>
           <View style={styles.action}>
                 <TextInput 
                 onChangeText={(val:string)=> textInputChange(val)} 
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
               <TouchableOpacity onPress={()=> navigation.navigate("SignUpScreen")}>
               <View style={[styles.button, 
               ]}>
                 

                  
                 <LinearGradient colors={['#e9e9e9','#e9e9e9']}
                 style={[styles.signIn, {
                    borderRadius: 0,
                    borderColor: 'black',
                    borderWidth: 1,
                    paddingHorizontal: 10
                }]}>
                     <Text style={[styles.textSign, {color:'black'}]}>Sign Up!</Text>

                 </LinearGradient>
           
               </View>
               </TouchableOpacity>


               
<TouchableOpacity onPress={()=> signInHandler(data.email, data.password)}>
               <View style={styles.button}>
                 

                  
                 <LinearGradient colors={['#365E7D','#365E7D']}
                 style={styles.signIn}>
                     <Text style={[styles.textSign,{color: '#e9e9e9'}]}>Log In!</Text>

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
        margin: 20,
        width: 130,
        height: 39,
    },
    signIn:{
        width: 130,
        height: 39,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:10,
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