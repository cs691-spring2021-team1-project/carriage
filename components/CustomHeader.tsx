import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const CustomHeader = (props:any) => {
    const {navigation} = props;
    let height = props.title == "Home" ? 150: 110
    return (
        <View style={{height: height,backgroundColor: '#32965D', justifyContent:'center'}}>
        <View style={{ flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', paddingTop:25,paddingHorizontal: 5}}>
        <TouchableOpacity  onPress={()=>{navigation.openDrawer()}}>
        <Image  source={require('../assets/Side-Menu.png')} />
          </TouchableOpacity>
      {
      props.title == "Home" ? ( <Image source={require('../assets/Carriage-Logo.png')} /> ): (<Text style={{color: "#e5e5e5", fontSize: 24, fontWeight: 'bold'}}>{props.title}</Text>)
      }  
      <TouchableOpacity>
      <Image source={require('../assets/flat-cart.png')} />
        
      </TouchableOpacity>
    
        </View>
        {props.title == "Home"? (     <View style={{backgroundColor: '#32965D', alignItems:'center' }}>

<Text style={{fontSize: 12, fontWeight:'400',color: '#e9e9e9', fontFamily: 'sans-serif'}}>Delivery to</Text>
<Text style={{fontSize: 20, fontWeight:'500', color: '#e9e9e9',fontFamily: 'sans-serif'}}>163 William St.</Text>
</View>
       ): null}
        </View>
      
    )
}

export default CustomHeader

const styles = StyleSheet.create({})
