import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import PaymentSelectScreen from '../screens/PaymentSelectScreen';

const PaymentSelectStack = createStackNavigator();
const PaymentSelectScreenStack = ({navigation}:any) => (
    <PaymentSelectStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <PaymentSelectStack.Screen 
          name="Payment Selection" 
          component={PaymentSelectScreen}  
          options={{
            header: ()=>(<CustomHeader title="Payment Selection" navigation={navigation}/>),
          
                 
          }} />

    </PaymentSelectStack.Navigator>

)


export default PaymentSelectScreenStack

const styles = StyleSheet.create({})
