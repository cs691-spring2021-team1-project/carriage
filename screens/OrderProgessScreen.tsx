import React from 'react'
import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, Button} from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { Ionicons as Icon } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { cancelCurrentOrder } from '../src/services/OrderServices';
import { auth, firestore } from '../firebase'

const OrderProgress = (props:any) => {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [order, setOrder] = React.useState({})
    const [items, setItems] = React.useState([])
    const [awaitingCancelConf, setAwaitingCancelConf] = React.useState(false)

    React.useEffect(()=>{
       
        console.log('order progress props recieved',props.route.params.order)
        setOrder(props.route.params.order)
        setItems(props.route.params.order.cartItems)
        console.log('vars set')
  
    },[])

  
    const renderItems = items.map((item:any,i:number) =>
        (
        <View  key={i} style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', flex: 2,alignItems:'center', justifyContent:'space-between', maxWidth: "67%"}} >
                <Text>1x {item['name']} </Text>
                <Text>{item['price']}</Text>
            </View>
        </View>
        )
    );

    const cancelOrder = (order:any)=>{

        let user = auth.currentUser;

        if (!user) {
            console.log("No User Logged In")
            return
        }
        // console.log("canceling ", !awaitingCancelConf)
        // setAwaitingCancelConf(!awaitingCancelConf)
        console.log(order)
        cancelCurrentOrder(user)
        // display cancel order box or screen
        // pass params

    }

  
    return (
        <View >
            <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >
        <View  style={{flex: 1, height: "100%", alignItems: 'center', justifyContent: 'center'}}>

        <View> 
        <Image style={{marginHorizontal:5}} source={require('../assets/minimap.png')} />
        </View>
    
     
              
                
       
        <View style={styles.island}>
{
    awaitingCancelConf ? <Animatable.View animation="fadeInLeft" duration={1000} >
    <Text style={{color:'#963239', fontWeight:'bold', fontSize:16}}>AWAITING CONFIRMATION</Text>
  </Animatable.View> : null
}
        
        </View>


        <View style={styles.history}>
        <Text style={styles.h1}>Order Status: In-Progress</Text>
        <Text style={styles.h1}>Order Details</Text>
{renderItems}
        <Text style={styles.h1}>Address</Text>
        <Text>{props.route.params.order.address.street}</Text>

      
        </View>
        <View style={styles.buttons}>
     

     <TouchableOpacity onPress={()=> { cancelOrder(order) }}>
                     <View style={[styles.button, 
                     ]}>
                     <LinearGradient colors={['#020202','#020202']}
                     style={[styles.gradientStyle, {
                     borderRadius: 10,
                     borderColor: 'black',
                     margin: 0,
                     borderWidth: .5, 
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
    )

  
  
  
}

export default OrderProgress

const styles = StyleSheet.create({
    island:{
        height: 43,
        width: 325,
        alignSelf:'center',
        backgroundColor: '#f7f7f7',
        borderRadius: 20,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: .25

    },
    history:{
        
        width: 345,
        backgroundColor: '#f7f7f7',
        borderRadius: 20,
        elevation: 5,
        shadowColor: 'black',
        shadowRadius: 10,
        margin: 5,
        borderWidth: .25,
        alignSelf: 'center',
        padding: 10
    },
    h1:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    buttons:{
        padding: 5,
        margin: 5,
        width: "80%"
    },
    button:{
        alignItems: 'center',
     
        width: "100%",
        height: 39,
    },
    gradientStyle:{
        width: "100%",
        height: 39,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:0,
        paddingHorizontal: 10
 
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center'
    }
 
})
