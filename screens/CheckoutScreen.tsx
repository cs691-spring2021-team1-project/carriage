import React from 'react'
import { StyleSheet, Text, View, Button,TouchableOpacity ,ImageBackground,Keyboard, TextInput, ScrollView} from 'react-native'
import { connect } from 'react-redux';

import { LinearGradient } from 'expo-linear-gradient';
import ItemsOrdered from '../components/ItemsOrdered';
import { number } from 'card-validator';
import { auth, firestore } from '../src/config';


const CheckoutScreen = (props:any) => {
    const {cartItems, removeItem} = props;
    const [total, setTotal] = React.useState(0);

    React.useEffect(()=>{
        let subtotal = 0;
        cartItems.forEach((item:any, index:number) => {
            
            console.log(item['price'], item)
            subtotal += item['price'];
        });
        console.log("subtotal",subtotal)
        setTotal(subtotal)
    },[])
    console.log("CHECKOUT....ITEMS",cartItems)
    console.log("CHECKOUT....Total",total)
    const applePayHandler = () =>{
        console.log('navigate to payment confirmation with apple pay')
        // props.navigation.navigate("PaymentConfirmation")

        // pass props to navigation + update page
        const order = {
            orderId: 1,
            cartItems: cartItems,
            total: total  ,
            address: {street: "1 Pace Plaza New York NY"} 
        }

        let user = auth.currentUser;

        if (!user) {
            console.log("No User Logged In")
            return
        }
        
        // TODO: update to take multiple orders ////////////////
        firestore.doc(`users/${user.uid}`).update({
            currentOrders: [order]
        })
        .then(() => {
            console.log("Last Name User Data in Firestore Updated")
           
        })
        .catch((error) => {
            console.log("Cannot Update Last Name User Infomation: ", error)
            
        })
        
        props.navigation.navigate("PaymentConfirmation", {
            screen: 'Update Payment',
            'index' : 0, 
            'card' : "apple"
        })

    }

    return (   

            <View >
            <ImageBackground style={{height: "100%",
            }} source={require('../assets/MasterBG.png')}>
                <View  style={{flexDirection: "column", flex: 1}}>
                    <ScrollView  >
                    <View style={styles.orderDetails}>
                    <View style={{width: '100%'}}>
                    <Text style={styles.header}>Order Details</Text>
                    {

                    cartItems.length > 0 ?    
                    <ItemsOrdered items={cartItems} onPress={removeItem} /> :
                    <Text style={styles.innerText}>
                    Cart is empty. No items available.
                    </Text>
                    }

                    <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between',  maxWidth: "68.0%"}}>

                    <Text> Total:  </Text> 
                    <Text> {total} </Text>
                    </View>

               
               
                    </View>

                    <View style={{ width: '100%', margin:10 }}>
                    <Text style={styles.header}>Special Instructions</Text>
                    <Text style={styles.innerText}>None</Text>

                    </View>

                    <View style={{ width: '100%', margin:10 }}>
                    <Text style={styles.header}>Delivery Instructions</Text>
                    <Text style={styles.innerText}>None</Text>

                    </View>

                    </View>


                    <View style={{flexDirection: "row",width:'90%', backgroundColor: '#f7f7f7', elevation:5, alignSelf:'center', alignItems: 'center', borderRadius: 20, margin:10, padding:15}}>

                    <Text style={styles.innerText} >Address: 1 Place Plaza New York, NY   </Text>
                   
                    </View>

                   

                    </ScrollView>
                    <View style={styles.buttons}>
                    <TouchableOpacity onPress={()=>{
                     applePayHandler()
                    }}>
                    <View style={[styles.button, 
                    ]}>



                    <LinearGradient colors={['#000000','#000000']}
                    style={[styles.gradient, {
                    borderRadius: 10,
                    borderColor: 'black',
                    borderWidth: .5,
                    paddingHorizontal: 10
                    }]}>
                    <Text style={[styles.btnText, {color:'#f7f7f7'}]}>APPLE PAY</Text>

                    </LinearGradient>

                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{
                         console.log('navigate to payment confirmation with cards')
                         props.navigation.navigate("PaymentSelect")
                    }}>
                    <View style={[styles.button, 
                    ]}>



                    <LinearGradient colors={['#FFC250','#FFC250']}
                    style={[styles.gradient, {
                    borderRadius: 10,
                    borderColor: 'black',
                    borderWidth: .5,
                    paddingHorizontal: 10
                    }]}>
                    <Text style={[styles.btnText, {color:'black'}]}>Other Payment Methods</Text>

                    </LinearGradient>

                    </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={()=> { console.log("clearing cart and navigating back to home") }}>
                     <View style={[styles.button, 
                     ]}>
                     <LinearGradient colors={['#020202','#020202']}
                     style={[styles.gradient, {
                     borderRadius: 10,
                     borderColor: 'black',
                     margin: 0,
                     borderWidth: .5, 
                     paddingHorizontal: 10
                     }]}>
                     <Text style={[styles.btnText, {color:'#f7f7f7'}]}>CANCEL</Text>
                     </LinearGradient>
                     </View>
     </TouchableOpacity>         
                    </View>
                </View>
            </ImageBackground>
            </View>

    
    )
}

const mapStateToProps = (state:any) =>{
    return {
       cartItems: state,
       
    }
}

const mapDispatchToProps = (dispatch:any)=>{
  return{
      removeItem: (item:any)=> dispatch({type: 'REMOVE_FROM_CART', payload: item})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckoutScreen)

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerText:{
        fontSize: 18,
        fontWeight: '500'

    },
    orderDetails:{
        width: '90%',
        minHeight: '40%',
        
        backgroundColor: '#f7f7f7',
        elevation: 5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
       
        borderRadius: 20,
        padding:20
    },
    buttons:{
        
        marginVertical: 50
    },
    button:{
        alignItems: 'center',
        alignSelf: 'center',
        width: 325,
        height: 43,
        marginVertical: 10
    },
 
    gradient:{
        width: 325,
        height: 43,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:10,
        paddingHorizontal: 10

    },
    btnText:{
        fontSize: 20,
        fontWeight:'bold'
    },
    header:{
        fontSize:24,
        fontWeight: 'bold',
        alignSelf:'flex-start'
    }
})
