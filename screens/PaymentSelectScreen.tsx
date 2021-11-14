import React from 'react';
import { StyleSheet, Text, View , TextInput, ImageBackground, TouchableOpacity, Image, Alert, TouchableNativeFeedbackBase } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons as Icon , MaterialCommunityIcons as MaterialIcons, Feather, FontAwesome} from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/core';
import { JSONHandlers, Validators, Formatter } from '../src/Utils';

const  PaymentSelect = (props:any) => {
    const [paymentData, setPaymentData] = React.useState(
       [{}]

        // [
        //     {name:"john smith", acctNo:"*********4242", ccv:"042", expDate:"12/2042", selected: true},
        //     {name:"john smith", acctNo:"*********4242", ccv:"042", expDate:"12/2042", selected: false}
        // ]
    );


    const [selectedItem, setSelectedItem] = React.useState({})
    const [selectedIndex, setSelectedIndex] = React.useState(-1)

    const isFocused = useIsFocused();

    const retrieveCardData = async () => {
        
        const cardData = await JSONHandlers.getCards('creditCard')
        console.log("Card Data:",  cardData)
        setPaymentData(cardData)
    }

    React.useEffect(()=> {
        isFocused && retrieveCardData()

    },[isFocused])

    const selectHandler = async (item:any, index:any) => {
       
        try {
            console.log("selecting card", index)
            const cardData = {
                ...item,
                selected: true
            }
             console.log("card data?", cardData); // => { sound: 'woof', legs: 4 }
           

            
           // await JSONHandlers.updateCardAt(
             //   Formatter.cardFormatter({...cardData}),
               // props.route.params.index,
                //"creditCard"
            //)
            
        } catch (error) {
            console.error("Can't Add Card to JSONHANDLER in ADDPAYMENT", error)
            Alert.alert(
                "Error",
                "Card Cannot be Updated",
                    [
                        {
                        text: "OK",
                        onPress: () => console.log("OK Pressed"),
                        style: "cancel"
                        },
                    ]
            );
        }

    }

    const renderPaymentData = paymentData.map((item:any,i:number) =>
   
    (


<View  key={i} style={{flexDirection: 'row', borderColor: item.selected ? "red" : "black", borderWidth: 1, height: 60,  margin: 10, justifyContent: 'center', alignItems: 'center' }}>

            <View style={{flex:1, height: 25, width:75, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{flex:1, height: 25, width: 75}} source={require("../assets/visa.png")}/>
            </View>
            <View style={{flex:2, alignItems: 'center',justifyContent: 'center', borderLeftColor: "black", borderLeftWidth: 1}} >
                <Text>{item.acctNo}</Text>
                <Text>{item.expDate}</Text>
            </View>

            <TouchableOpacity style={{padding: 10}} onPress={()=> { selectHandler(item, i)}}>
            <MaterialIcons name="checkbox-blank-outline" size={20}></MaterialIcons>
            </TouchableOpacity>
          
          </View>

          
    )
);


    return (


        <View> 
            <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >
                <View style={styles.container}>
                <Text style={styles.headerText}>Payment Options</Text>
                    <View style={styles.bubble}>

                    {
                    
                    paymentData?.length > 0 ? 
                        <View style={{flexDirection: "column", flex:1}}>
                          {renderPaymentData}
                         
                        </View>
                    :

                        <View style={styles.bubbleText} >
                            <Text style={styles.text}> No Payment Info Available</Text>
                            <Text> Try adding a new payment option </Text>
                        </View>


                
                    }
                   
                    </View>


                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={()=> {
                            console.log("submitting payment and navigating to confirmation"); 
                            props.navigation.navigate('PaymentConfirmation', {"index": selectedIndex, "card": selectedItem})
                        }}>
                        <View style={[styles.button, 
                        ]}>
                        <LinearGradient colors={['#FFC250','#FFC250']}
                        style={[styles.addCardBtn, {
                        borderRadius: 10,
                        borderColor: 'black',
                        borderWidth: 1.5, 
                        paddingHorizontal: 10
                        }]}>
                        <Text style={[styles.text, {color:'black'}]}>SUBMIT</Text>
                        </LinearGradient>
                        </View>
                        </TouchableOpacity>         

                              
                    </View>
                 
                </View>
            </ImageBackground>
        </View>
   
    );
}

export default PaymentSelect;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        paddingTop: 10
      
     
      },
      bubble:{
        elevation: 5, 
        borderWidth:.25, 
        borderRadius:20,  
        paddingHorizontal:10,
        borderColor:'black', 
        backgroundColor: '#f7f7f7',
        minHeight: 200,
        flex: 1,
       
      },
      headerText:{
        fontSize:36, 
        fontWeight:"bold", 
        marginVertical:10
    
      },
      buttons:{
         flex:1,
     
         marginTop:20
      },
      button:{
        alignItems: 'center',
        marginTop: 15,
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
    text:{
        fontSize: 20,
        fontWeight:'bold',
        alignItems: 'center'
    },
    bubbleText:{
        fontSize: 20,
        fontWeight:'bold',
        justifyContent: 'center',
        alignItems:'center',
    },
     


})