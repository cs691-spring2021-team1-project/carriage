import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import PaymentInfoScreen from '../screens/PaymentInfoScreen';

const PaymentInfoScreenStack = createStackNavigator();
const PaymentInfoScreenScreenStack = ({navigation}:any) => (
    <PaymentInfoScreenStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <PaymentInfoScreenStack.Screen 
          name="Payment Info" 
          component={PaymentInfoScreen}  
          options={{
            header: ()=>(<CustomHeader title="Payment Info" navigation={navigation}/>),
          
                 
          }} />

    </PaymentInfoScreenStack.Navigator>

)


export default PaymentInfoScreenScreenStack

const styles = StyleSheet.create({})
