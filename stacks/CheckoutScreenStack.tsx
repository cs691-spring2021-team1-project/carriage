import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import CheckoutScreen from '../screens/CheckoutScreen';


const CheckoutStack = createStackNavigator();
const CheckoutScreenStack = ({navigation}:any) => (
    <CheckoutStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <CheckoutStack.Screen 
          name="Checkout" 
          component={CheckoutScreen}  
          options={{
            header: ()=>(<CustomHeader title="Checkout" navigation={navigation}/>),
          
                 
          }} />

    </CheckoutStack.Navigator>

)


export default CheckoutScreenStack

const styles = StyleSheet.create({})
