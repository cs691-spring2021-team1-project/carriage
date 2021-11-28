import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AuthContext } from '../components/context'
import { CartService } from '../src/services'
import { useIsFocused } from '@react-navigation/core';

const ReceiptScreen = (props:any) => {

  const isFocused = useIsFocused();

  const [data, setData] = React.useState({
    orderID: props.route.params.index,
    address: [], // FIXME: address should be object of street, city, state, zip code
    street: props.route.params.order.address.street,
    cartItems: props.route.params.order.cartItems,
    total: props.route.params.order.total,
    price : [] //FIXME: should be object that holds taxes, total, fees etc
  })

 

  const getOrderData = async () => {
  
    //  CartService.getOrderDetails(1)
    console.log(props.route.params)
    console.log(props.route.params.order.cartItems)
  
  }

  React.useEffect(()=> {
    isFocused && getOrderData()

  },[isFocused])


    const renderItems = data['cartItems']?.map((item:any,i:number) => (
        <View key={i} style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
            <Text style={styles.innerText} >{item.name}: </Text>
            <Text style={styles.innerText} >${item.price} </Text>
            <TouchableOpacity   onPress={()=>{ console.log("navigating to Rate Item screen"); props.navigation.navigate('RateItem')}}>

              <Text style={styles.innerText} > ✰✰✰✰✰ </Text>
                        
            </TouchableOpacity>
              <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
       </View>  
      )
    )

    const renderAddress = data['address']?.map((item:any,i:number) => (
      <View key={i} style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
          <Text style={styles.innerText} >{item.street}: </Text>
          <Text style={styles.innerText} >{item.city}, {item.state} </Text>
          <Text style={styles.innerText} >{item.zip}</Text>
     </View>  
      )
    )

    const renderPrice = data['price']?.map((item:any,i:number) => (
      <View key={i} style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
          <Text style={styles.innerText} >Fees: {item.fees} </Text>
          <Text style={styles.innerText} >Taxes: {item.taxes}</Text>
          <Text style={styles.innerText} >Tip: {item.tip}</Text>
          <Text style={styles.innerText} >Total: {item.total}</Text>
     </View>  
      )
    )

    return (
        <View>
        <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >

        <View style={{margin:15}}>
            <ScrollView>         
            <View>
                <Text style={styles.headerText}>Order #{data['orderID']}</Text>
                <View style={styles.bubble}>
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.innerText} >1 Pace Plaza</Text>
                    <Text style={styles.innerText} >New York, NY</Text>
                    <Text style={styles.innerText} >10038</Text>
                  </View>
                </View>
                <View style={styles.bubble}>

                {data['cartItems']?.length > 0 ? renderItems : <View>
                  <Text>No Items orders</Text>
            </View>}

                    {/* <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                      <Text style={styles.innerText} >Sweet Potato: </Text>
                      <Text style={styles.innerText} >$3.99 </Text>
                      <TouchableOpacity   onPress={()=>{ console.log("navigating to Rate Item screen"); props.navigation.navigate('RateItem')}}>

                        <Text style={styles.innerText} > ✰✰✰✰✰ </Text>
                                  
                      </TouchableOpacity>
                        <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                    </View>  
                    <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                      <Text style={styles.innerText} >Celery: </Text>
                      <Text style={styles.innerText} >$1.99 X 5 </Text>
                      <TouchableOpacity   onPress={()=>{ 
                        // console.log("navigating to Rate Item screen"); 
                        // props.navigation.navigate('RateItem')

                        console.log(getOrderID())
                        
                        }}>

                        <Text style={styles.innerText} > ✰✰✰✰✰ </Text>
                                  
                      </TouchableOpacity>
                        <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                    </View>  */}
            
                </View>
            </View>
            <View style={styles.bubble}>
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.innerText} >Fees and Taxes: $1.99</Text>
                    <Text style={styles.innerText} >Delivery Fee: $0.99</Text>
                    <Text style={styles.innerText} >Tip: $0.00</Text>
                    <Text style={styles.innerText} >Total: $16.92</Text>
                  </View>
            </View>
            </ScrollView>
        </View>
        </ImageBackground>
        </View>
    )
}

export default ReceiptScreen

const styles = StyleSheet.create({

  headerText:{
    fontSize:36, 
    fontWeight:"bold", 
    marginVertical:10

  },
  
  innerText:{
    fontSize:20,
    fontWeight: '600'
  },
  bubble:{
    elevation: 5, 
    borderWidth:.25, 
    borderRadius:20,  
    paddingHorizontal:10,
    borderColor:'black', 
    backgroundColor: '#f7f7f7',
    marginBottom: 10,
  }
})
