import React from 'react'
import { Dimensions, StyleSheet, Text,StatusBar, View , Platform, Image, TouchableOpacity, TextInput} from 'react-native'
import { Ionicons as Icon , MaterialCommunityIcons as MaterialIcons, Feather, FontAwesome} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../components/context';


const SignUpScreen = ({navigation}:any) => {
    <StatusBar backgroundColor="#32965D" barStyle="light-content"/>
     const [data, setData] = React.useState({
         email: '',
         password:'',
         secureTextEntry: true,
 
     })

     const {signIn} = React.useContext(AuthContext)

     const textInputChange = (val:string)=>{
        if(val.length != 0){
            setData({
                ...data,
                email: val,
             
            })
        } else {
            setData({
                ...data,
                email: val,
             
            })
        }
     }

     const passwordInutChange = (val:string)=>{
                setData({
                    ...data,
                    password: val
                })
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

            <Animatable.View animation="fadeIn" duration={1000} style={styles.form}> 

            <Text style={styles.text_footer}> First Name</Text>
           <View style={styles.action}>
                 <TextInput 
                 onChangeText={(val:string)=> textInputChange(val)} 
               style={styles.textInput}/>
            
               </View>

               <Text style={styles.text_footer}> Last Name</Text>
           <View style={styles.action}>
                 <TextInput 
                 onChangeText={(val:string)=> textInputChange(val)} 
               style={styles.textInput}/>
              
               </View>

               <Text style={styles.text_footer}> Email</Text>
           <View style={styles.action}>
                 <TextInput 
                 onChangeText={(val:string)=> textInputChange(val)} 
               style={styles.textInput}/>
              
               </View>

               
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
       
            <View style={styles.buttons}>


        <TouchableOpacity onPress={()=> signIn(data.email, data.password)}>
        <View style={[styles.button, 
        ]}>
        

        
        <LinearGradient colors={['#e9e9e9','#e9e9e9']}
        style={[styles.signIn, {
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
    signIn:{
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
