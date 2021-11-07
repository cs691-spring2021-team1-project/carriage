import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ShoppingCartIcon from './ShoppingCartIcon';
import { Ionicons as Icon } from '@expo/vector-icons';

const CustomHeader = (props:any) => {
    const {navigation} = props;
    let height = props.title == "Home" ? 150: 110;

    return (
        <View style={{height: height,backgroundColor: '#32965D', justifyContent:'center'}}>
        <View style={{ flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', paddingTop:30,paddingHorizontal: 5, margin: 4}}>
          
        {
          props.title == "Home" ? (<TouchableOpacity  onPress={()=>{navigation.openDrawer()}}>
          <Image  source={require('../assets/Side-Menu.png')} />
          </TouchableOpacity>) : (<TouchableOpacity  onPress={()=>{navigation.goBack()}}>
          <Icon name="arrow-back" color="#e9e9e9" size={30}></Icon>
          </TouchableOpacity>)
      }
      {
      props.title == "Home" ? ( <Image source={require('../assets/Carriage-Logo.png')} /> ): (<Text style={{color: "#e5e5e5", fontSize: 24, fontWeight: 'bold'}}>{props.title}</Text>)
      }  
     <ShoppingCartIcon navigation={navigation}/>
    
        </View>
        {props.title == "Home"? (     
        <View style={{margin: 2,backgroundColor: '#32965D', alignItems:'center' }}>

<Text style={{fontSize: 12, fontWeight:'400',color: '#e9e9e9', fontFamily: 'SFProDisplay'}}>Delivery to</Text>
<Text style={{fontSize: 20, fontWeight:'500', color: '#e9e9e9',fontFamily: 'SFProDisplay'}}>163 William St.</Text>
</View>
       ): null}
        </View>
      
    )
}

export default CustomHeader

const styles = StyleSheet.create({})
