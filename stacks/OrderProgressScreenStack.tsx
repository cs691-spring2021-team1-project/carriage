import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import OrderProgress from '../screens/OrderProgessScreen';

const OrderProgressStack = createStackNavigator();
const OrderProgressScreenStack = ({navigation}:any) => (
    <OrderProgressStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <OrderProgressStack.Screen 
          name="Discounts" 
          component={OrderProgress}  
          options={{
            header: ()=>(<CustomHeader title="Order Progress" navigation={navigation}/>),
          
                 
          }} />

    </OrderProgressStack.Navigator>

)


export default OrderProgressScreenStack

const styles = StyleSheet.create({})
