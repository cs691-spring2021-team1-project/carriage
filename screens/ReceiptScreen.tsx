import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AuthContext } from '../components/context'

const ReceiptScreen = (props:any) => {
    return (
        <View>
        <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >

        <View style={{ height: "100%", margin:10}}>
            <ScrollView style={{ height: "100%"}}>         
            <View style={{ height: "100%"}}>
                <Text style={styles.headerText}>Reciepts</Text>
                <View style={styles.bubble}>
                  <Text style={{fontSize: 24, fontWeight: 'bold'}}>Order #1</Text>

<View style={styles.item}>
<Text style={styles.innerText} >1x Sweet Potato </Text>
<Text style={styles.innerText} >3.99 </Text>
<TouchableOpacity   onPress={()=>{ console.log("navigating to Rate Item screen"); props.navigation.navigate('RateItem')}}>

<Text>Rate this item</Text>
<Text style={styles.innerText} >✰✰✰✰✰</Text>

</TouchableOpacity>



</View>  

<View style={styles.item}>
<Text style={styles.innerText} >1x Sweet Potato </Text>
<Text style={styles.innerText} >3.99 </Text>
<TouchableOpacity   onPress={()=>{ console.log("navigating to Rate Item screen"); props.navigation.navigate('RateItem')}}>
<Text>Rate this item</Text>
<Text style={styles.innerText} >✰✰✰✰✰</Text>
</TouchableOpacity>
</View>  

<View style={styles.itemTotals}>
<Text style={styles.innerText} >Tax: </Text>
<Text style={styles.innerText} >0.65 </Text>

</View> 
<View style={styles.itemTotals}>
<Text style={styles.innerText} >Total: </Text>
<Text style={styles.innerText} >8. </Text>

</View> 
            
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
    padding: 10,
  },
  item:{
    flexDirection: 'row', 
    height: 48, 
    marginVertical: 10, 
    alignItems: 'center', 
    justifyContent: "space-between"
  },
  itemTotals:{
    flexDirection: 'row', 
    height: 48, 
    fontSize: 16,
    alignItems: 'center', 
    justifyContent: "space-evenly"
  }
})
