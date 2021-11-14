import React from 'react'
import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, Button} from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { Ionicons as Icon } from '@expo/vector-icons';


const OrderProgress = (props:any) => {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [order, setOrder] = React.useState({})
    const [items, setItems] = React.useState([])

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


  
    return (
        <View >
            <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >
        <View  style={{flex: 1, height: "100%", alignItems: 'center', justifyContent: 'center'}}>

        <View> 
        <Image style={{marginHorizontal:5}} source={require('../assets/minimap.png')} />
        </View>

        <View style={styles.island}></View>


        <View style={styles.history}>
        <Text style={styles.h1}>Order Status: In-Progress</Text>
        <Text style={styles.h1}>Order Details</Text>
{renderItems}
        <Text style={styles.h1}>Address</Text>
        <Text>{props.route.params.order.address.street}</Text>

        <View style={styles.buttons}>
        <Button title="Cancel" onPress={()=>{console.log("canceling order")}}/>


        </View>
     

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
        shadowColor: 'black',
        shadowRadius: 10,
        margin: 5,
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
        margin: 5
    }
})
