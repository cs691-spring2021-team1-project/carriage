import React from 'react';
import {StyleSheet,Text, View, ImageBackground, TextInput, TouchableOpacity, Alert} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { Validators } from '../src/Utils';

const  AddPaymentMethodScreen = (props:any) => {
   
    const [data, setData] = React.useState({
        name: "",
        cardNo: "",
        cvv: "",
        expData: "",
        validName: true,
        validCardNo: true,
        validCVV: true,
        validExpData: true,

    })

    const addCardHandler = () =>{
        console.log("submitting card and navigating to payment info"); 
        
        if (!data['name'] || !data['cardNo'] || !data['expData'] || !data['cvv']) {
            Alert.alert(
                "Error",
                "Please Enter Valid Credit Card Infomation",
                    [
                        {
                        text: "OK",
                        onPress: () => console.log("OK Pressed"),
                        style: "cancel"
                        },
                    ]
            );
            return
        }

        if (!data['validName'] || !data['validCardNo'] || !data['validExpData'] || !data['validCVV']) {
            Alert.alert(
                "Error",
                "Please Enter Valid Credit Card Infomation",
                    [
                        {
                        text: "OK",
                        onPress: () => console.log("OK Pressed"),
                        style: "cancel"
                        },
                    ]
            );
        }
        console.log(Validators.creditCardValidator(data['name'], data['cardNo'], data['expData'], data['cvv']))
        // props.navigation.navigate('PaymentInfo');
    }

    const cancel = () => {
        setData({
            name: "",
            cardNo: "",
            cvv: "",
            expData: "",
            validName: true,
            validCardNo: true,
            validCVV: true,
            validExpData: true,
        })

        props.navigation.navigate('PaymentInfo');

    }

    const nameInputChange = (val:string) =>{
        if(val.length != 0 && Validators.fullNameValidator(val)){
            setData({
                ...data,
                name: val,
                validName: true,
             
            })
        } else {
            setData({
                ...data,
                name: val,
                validName: false
             
            })
        }
    }

    const cardInputChange = (val:string) =>{
        if(val.length > 0 && val.length < 20 && Validators.digitsValidator(val)){
            setData({
                ...data,
                cardNo: val.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim(),
                validCardNo: true
             
            })
        } else {
            setData({
                ...data,
                cardNo: val,
                validCardNo: false
             
            })
        }
    }

    const expDateInputChange = (val:string) =>{
        if(val.length != 0 && Validators.dateValidator(val)){
            setData({
                ...data,
                expData: val,
                validExpData: true,
             
            })
        } else {
            setData({
                ...data,
                expData: val,
                validExpData: false,
             
            })
        }
    }

    const cvvInputChange = (val:string) =>{
        if(val.length != 0 && Validators.digitsValidator(val)){
            setData({
                ...data,
                cvv: val,
                validCVV: true,
             
            })
        } else {
            setData({
                ...data,
                cvv: val,
                validCVV: false,
             
            })
        }
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
                                placeholder='Full Name'
                                />
                        </View>  
                        {
                            !data.validName ?  (
                                <Animatable.View animation="fadeInLeft" duration={1000} >               
                            <Text style={{color:'#963239', fontWeight:'bold', fontSize:16}}>Please enter a valid Full Name</Text>
                            </Animatable.View>
                            ) : null
                        }   

                         <View style={styles.inputContainer}>
                         <Text style={styles.text}>Card Number:</Text>
                      
                            <TextInput 

                            onChangeText={(val:string)=> cardInputChange(val)} 
                            style={styles.textInput}
                            value={data['cardNo']}
                            maxLength = {19}
                            />
                      
                        </View> 
                        {
                            !data.validCardNo ?  (
                                <Animatable.View animation="fadeInLeft" duration={1000} >               
                            <Text style={{color:'#963239', fontWeight:'bold', fontSize:16}}>Please enter a valid Card Number</Text>
                            </Animatable.View>
                            ) : null
                        } 

                        <View style={styles.miniInputs}>
                         
                            <View  style={styles.miniInputContainer}>
                                  <View style={styles.inputContainer} >
                                  <Text style={styles.text}>Exp Date:</Text>
                         
                                <TextInput 

                                onChangeText={(val:string)=> expDateInputChange(val)} 
                                style={styles.textInput}
                                value={data['expData']}
                                placeholder='mm/yy'
                                maxLength = {5}
                                />
                                </View>  
                            </View>
                       
                            <View  style={styles.miniInputContainer}  >
                                    <View style={styles.inputContainer}>
                                    <Text style={styles.text}>CVV:</Text>
                           
                        
                                <TextInput 

                                onChangeText={(val:string)=> cvvInputChange(val)} 
                                style={styles.textInput}
                                value={data['cvv']}
                                maxLength = {4}
                                />
                                </View>  
                                {
                                    !data.validCVV ?  (
                                        <Animatable.View animation="fadeInLeft" duration={1000} >               
                                    <Text style={{color:'#963239', fontWeight:'bold', fontSize:16}}>Please enter a valid CVV</Text>
                                    </Animatable.View>
                                    ) : null
                                } 
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

                           <TouchableOpacity onPress={()=> { cancel() }}>
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