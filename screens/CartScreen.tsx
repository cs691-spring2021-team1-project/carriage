import React from 'react'
import { StyleSheet, Text, View, Button,TouchableOpacity ,ImageBackground,Keyboard, TextInput, ScrollView} from 'react-native'
import { connect } from 'react-redux';

import { LinearGradient } from 'expo-linear-gradient';
import ItemsOrdered from '../components/ItemsOrdered';


const CartScreen = (props:any) => {
    const {cartItems, removeItem} = props;
    return (  
        
       
    
 <View >

               <ImageBackground style={{height: "100%",
         
        }} source={require('../assets/MasterBG.png')}>
 <ScrollView >
 <View style={styles.orderDetails}>
        <View style={{width: '100%'}}>
        <Text style={styles.header}>Order Details</Text>
        {
           
                cartItems.length > 0 ?    
                <ItemsOrdered items={cartItems} onPress={removeItem} /> :
                <Text style={styles.orderTxt}>
                    Cart is empty. No items available.
                    </Text>
        }
        </View>
    
        <View style={{ width: '100%', margin:10 }}>
        <Text style={styles.header}>Special Instructions</Text>
        <TextInput 
        keyboardType="default"
        returnKeyType="done"
        multiline={true}
        blurOnSubmit={true}
        maxLength={50}
        onSubmitEditing={()=>{Keyboard.dismiss()}}
        placeholder="None" style={{padding:10, textAlignVertical: 'top',width: "100%", textAlign:'left'}}></TextInput>


        </View>
    
        </View>

 
    <View style={{width:'90%', backgroundColor: '#f7f7f7', elevation:5, alignSelf:'center', borderRadius: 20, margin:10, padding:10}}>

        <Text>Address:</Text>
    </View>
     
    <View style={{width:'90%',flexDirection:'row', backgroundColor: '#f7f7f7', elevation:5, alignSelf:'center', borderRadius: 20, margin:10, padding:10}}>
        
    <Text>Promo code:</Text>
    <TextInput
     keyboardType="default"
     returnKeyType="done"
     multiline={false}
     blurOnSubmit={true}
     onSubmitEditing={()=>{Keyboard.dismiss()}}
    />
    </View>

     <View style={{minHeight:'15%', width:'90%', padding: 10, backgroundColor: '#f7f7f7', elevation:5, alignSelf:'center', borderRadius: 20, margin:10}}>
     <Text>Driver Instructions:</Text>
        <TextInput 
        keyboardType="default"
        returnKeyType="done"
        multiline={true}
        blurOnSubmit={true}
        onSubmitEditing={()=>{Keyboard.dismiss()}}
        placeholder="None" style={{padding:10, textAlignVertical: 'top',  width: "100%", textAlign:'left', alignSelf:'flex-start'}}></TextInput>




     </View>
    
     </ScrollView>
     <TouchableOpacity onPress={()=> console.log('navigate to checkout')}>
               <View style={[styles.button, 
               ]}>
                 

                  
                 <LinearGradient colors={['#FFC250','#FFC250']}
                 style={[styles.gradient, {
                    borderRadius: 10,
                    borderColor: 'black',
                    borderWidth: .5,
                    paddingHorizontal: 10
                }]}>
                     <Text style={[styles.btnText, {color:'black'}]}>CHECKOUT</Text>

                 </LinearGradient>
           
               </View>
               </TouchableOpacity>
  
     
             
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
export default connect(mapStateToProps,mapDispatchToProps)(CartScreen)

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderTxt:{
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
    button:{
        alignItems: 'center',
        alignSelf: 'center',
        width: 325,
        height: 43,
        marginVertical: 20
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
