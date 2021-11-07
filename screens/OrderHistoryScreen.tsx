import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AuthContext } from '../components/context'

const OrderHistoryScreen = (props:any) => {
  const {signOut} = React.useContext(AuthContext)
    return (
        <View>
        <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >

        <View style={{margin:15}}>
            <ScrollView>         
            <View>
            <Text style={styles.headerText}>Current Orders</Text>
            <View style={styles.bubble}>

              <TouchableOpacity   onPress={()=>{ console.log("navigating to progress"); props.navigation.navigate('OrderProgress')}}>
                <View style={{flexDirection: 'column'}}>
                  <View style={{flex:1, borderWidth:.25, borderRadius:20,alignItems: 'center', justifyContent: 'center'}} >
                  <Image  style={styles.currentOrderImage}  source={require("../assets/FavoriteVendor11.jpeg")}/>
                  </View>

                  <View style={styles.detailsContainer}>
                    <View style={styles.orderDetails}>
                       <Text style={styles.innerText} >Order #0011</Text>
                       <Text style={styles.innerText} >163 William St.</Text>
                    </View>

                    <View style={styles.price}>
                      <Text style={styles.innerText} >11/4/2021</Text>
                      <Text style={styles.innerText} >9.99</Text>            
                    </View>
                  </View>

                </View>  
              </TouchableOpacity>

             
           
            </View>
            </View>

            <View>
            <Text style={styles.headerText}>Past Orders</Text>
            <View style={styles.bubble}>
              <TouchableOpacity onPress={()=>{ console.log("navigating to reciepts & ratings"); props.navigation.navigate('Receipt') }}  >
                <View style={{flexDirection: 'row'}}>

                  <View  style={{flex:1, borderWidth:.25, borderRadius:20,alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{ flex:1, 
                                    height: 60, 
                                    width: "100%",     
                                    borderWidth:.25,  
                                    borderTopLeftRadius:20,  
                                    borderBottomLeftRadius: 20}} source={require("../assets/FavoriteVendor11.jpeg")} />
                  </View>

                  <View style={styles.pastDetailContainer}>
                    <View style={styles.orderDetails}>
                      <Text style={styles.innerText} >Order #0011</Text>
                      <Text style={styles.innerText} >163 William St.</Text>
                    </View>

                    <View style={styles.price}>
                      <Text style={styles.innerText} >11/4/2021</Text>
                      <Text style={styles.innerText} >9.99</Text>            
                    </View>
                  </View>

                </View>  
              </TouchableOpacity>

            
            </View>



            <View style={styles.bubble}>
              <TouchableOpacity onPress={()=>{ console.log("navigating to reciepts & ratings"); }}  >
                <View style={{flexDirection: 'row'}}>

                  <View  style={{flex:1, borderWidth:.25, borderRadius:20,alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{ flex:1, 
                                    height: 60, 
                                    width: "100%",     
                                    borderWidth:.25,  
                                    borderTopLeftRadius:20,  
                                    borderBottomLeftRadius: 20}} source={require("../assets/FavoriteVendor11.jpeg")} />
                  </View>

                  <View style={styles.pastDetailContainer}>
                    <View style={styles.orderDetails}>
                      <Text style={styles.innerText} >Order #0011</Text>
                      <Text style={styles.innerText} >163 William St.</Text>
                    </View>

                    <View style={styles.price}>
                      <Text style={styles.innerText} >11/4/2021</Text>
                      <Text style={styles.innerText} >9.99</Text>            
                    </View>
                  </View>

                </View>  
              </TouchableOpacity>

            
            </View>
            </View>

           
            </ScrollView>
        </View>
        </ImageBackground>
        </View>
    )
}

export default OrderHistoryScreen

const styles = StyleSheet.create({

  headerText:{
    fontSize:36, 
    fontWeight:"bold", 
    marginVertical:10

  },
  imageContainer:{
    textAlign: 'center'
  },
  innerText:{
    fontSize:24,
    fontWeight: '600'
  },
  bubble:{
    elevation: 5, 
    borderWidth:.25, 
    borderRadius:20,  
    margin: 5,
    borderColor:'black', 
    backgroundColor: '#f7f7f7',
    flex: 1,
    flexDirection: "column"
  },
  price:{
    fontSize: 28,
    fontWeight: "bold",
    padding: 10,
    margin: 10,
    textAlign:'center'
  },
  orderDetails:{
    padding: 10,
    margin: 5,
    flex: 1
  },
  detailsContainer:{
    flexDirection: 'row',
    paddingHorizontal:10,
    flex:1
    
  },
  pastDetailContainer:{
    width: "100%",
    flexDirection: 'column',
    flex:2
  },
  currentOrderImage: {
    flex:1, 
    height: 200, 
    width: "100%",     
    borderWidth:.25,  
    borderTopLeftRadius:20,  
    borderTopRightRadius: 20
}
})
