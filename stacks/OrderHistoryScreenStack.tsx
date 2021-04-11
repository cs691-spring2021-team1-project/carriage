import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import OrderHistory from '../screens/OrderHistory';

const OrderHistoryStack = createStackNavigator();
const OrderHistoryScreenStack = ({navigation}:any) => (
    <OrderHistoryStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <OrderHistoryStack.Screen 
          name="Discounts" 
          component={OrderHistory}  
          options={{
            header: ()=>(<CustomHeader title="Order History + Progress" navigation={navigation}/>),
          
                 
          }} />

    </OrderHistoryStack.Navigator>

)


export default OrderHistoryScreenStack

const styles = StyleSheet.create({})
