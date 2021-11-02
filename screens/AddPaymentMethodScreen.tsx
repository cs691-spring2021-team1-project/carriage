import React from 'react';
import {StyleSheet,Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const  AddPaymentMethodScreen = (props:any) => {
   
    const [data, setData] = React.useState({
        name: "",
        cardNo: "",
        ccv: "",
        expData: "",

    })

    const nameInputChange = (val:string) =>{
        console.log(val)
    }

    const addCardHandler = () =>{
        console.log("submitting card and navigating to payment info"); 
        props.navigation.navigate('PaymentInfo');
    }

    return (
        
        <View> 
            <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >
              
                <View style={styles.container}>
                    <Text style={styles.headerText}>Add Payment</Text>
                
                    <View >                 
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Name:</Text>
                        
                                <TextInput 

                                onChangeText={(val:string)=> nameInputChange(val)} 
                                style={styles.textInput}
                                value={data['name']}
                                />
                        </View>    

                         <View style={styles.inputContainer}>
                         <Text style={styles.text}>Card Number:</Text>
                      
                            <TextInput 

                            onChangeText={(val:string)=> nameInputChange(val)} 
                            style={styles.textInput}
                            value={data['name']}
                            />
                      
                        </View>  

                        <View style={styles.miniInputs}>
                         
                            <View  style={styles.miniInputContainer}>
                                  <View style={styles.inputContainer} >
                                  <Text style={styles.text}>Exp Date:</Text>
                         
                                <TextInput 

                                onChangeText={(val:string)=> nameInputChange(val)} 
                                style={styles.textInput}
                                value={data['name']}
                                />
                                </View>  
                            </View>
                       
                            <View  style={styles.miniInputContainer}  >
                                    <View style={styles.inputContainer}>
                                    <Text style={styles.text}>CCV:</Text>
                           
                        
                                <TextInput 

                                onChangeText={(val:string)=> nameInputChange(val)} 
                                style={styles.textInput}
                                value={data['name']}
                                />
                                </View>  
                            </View>




                        </View>
                    </View>

                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={()=> { addCardHandler()   }}>
                        <View style={[styles.button, 
                        ]}>
                        <LinearGradient colors={['#FFC250','#FFC250']}
                        style={[styles.addCardBtn, {
                        borderRadius: 10,
                        borderColor: 'black',
                        borderWidth: 1.5, 
                        paddingHorizontal: 10
                        }]}>
                        <Text style={[styles.text, {color:'black'}]}>ADD</Text>
                        </LinearGradient>
                        </View>
                        </TouchableOpacity>   

                           <TouchableOpacity onPress={()=> { console.log("cancel")  }}>
                        <View style={[styles.button, 
                        ]}>
                        <LinearGradient colors={['#020202','#020202']}
                        style={[styles.addCardBtn, {
                        borderRadius: 10,
                        borderColor: 'black',
                        margin: 20,
                        borderWidth: 1.5, 
                        paddingHorizontal: 10
                        }]}>
                        <Text style={[styles.text, {color:'#f7f7f7'}]}>CANCEL</Text>
                        </LinearGradient>
                        </View>
                        </TouchableOpacity>                      
                    </View>
                </View>
            </ImageBackground>
        </View>
       
    );
}

export default AddPaymentMethodScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        paddingTop: 10
      
     
      },
      bubble:{
        elevation: 15, 
        borderWidth:.5, 
        borderRadius:20,  
        paddingHorizontal:10,
        borderColor:'black', 
        backgroundColor: '#f7f7f7',
        minHeight: 200,
        flex: 1,
        padding:20
    
      },
      headerText:{
        fontSize:36, 
        fontWeight:"bold", 
        marginVertical:10
    
      },
      text:{
        fontSize: 20,
        fontWeight:'bold',
        alignItems: 'center'
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
    miniInputs: {
        display: "flex", 
        flexDirection:'row', 
        width: "100%", 
    
    
    },
    miniInputContainer:{
        flex:1, 
        padding: 10, 
        paddingLeft: 0

    },
    textInput:{
        flex:1,
        color: "black",
        fontSize: 20,
        paddingLeft: 5,
      

        
    },
    buttons:{
        flex:1,
        margin: 20,
        marginTop: 50
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

});