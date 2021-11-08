import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import CartScreen from '../screens/CartScreen';


const CartStack = createStackNavigator();
const CartScreenStack = ({navigation}:any) => (
    <CartStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <CartStack.Screen 
          name="Cart" 
          component={CartScreen}  
          options={{
            header: ()=>(<CustomHeader title="Cart" navigation={navigation}/>),
          
                 
          }} />

    </CartStack.Navigator>

)


export default CartScreenStack

const styles = StyleSheet.create({})
