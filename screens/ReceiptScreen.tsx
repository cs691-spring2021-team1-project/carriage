import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AuthContext } from '../components/context'
import { CartService } from '../src/services'
import { useIsFocused } from '@react-navigation/core';

const ReceiptScreen = (props:any) => {

  const isFocused = useIsFocused();

  const [data, setData] = React.useState({
    orderID: "",
    street: "",
    cartItems: [],
    total: "",
    
  })

  const getOrderData = async () => {
     const orderData = CartService.getOrderDetails(1)
  }

  React.useEffect(()=> {
    isFocused && getOrderData()

  },[isFocused])

    const getOrderID = async () => {
      return CartService.getOrderDetails(1)
        .then((x) => {
          return x
        })
    }

    return (
        <View>
        <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >

        <View style={{margin:15}}>
            <ScrollView>         
            <View>
                <Text style={styles.headerText}>Order #0011</Text>
                <View style={styles.bubble}>
                  <View style={{flexDirection: 'column', alignItems: 'left'}}>
                    <Text style={styles.innerText} >1 Pace Plaza</Text>
                    <Text style={styles.innerText} >New York, NY</Text>
                    <Text style={styles.innerText} >10038</Text>
                  </View>
                </View>
                <View style={styles.bubble}>
                    <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                      <Text style={styles.innerText} >Sweet Potato: </Text>
                      <Text style={styles.innerText} >$3.99 </Text>
                      <TouchableOpacity   onPress={()=>{ console.log("navigating to Rate Item screen"); props.navigation.navigate('RateItem')}}>

                        <Text style={styles.innerText} > ***** </Text>
                                  
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

                        <Text style={styles.innerText} > ***** </Text>
                                  
                      </TouchableOpacity>
                        <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                    </View> 
            
                </View>
            </View>
            <View style={styles.bubble}>
                  <View style={{flexDirection: 'column', alignItems: 'left'}}>
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
