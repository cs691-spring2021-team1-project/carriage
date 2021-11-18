import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import ReceiptScreen from '../screens/ReceiptScreen';

const ReceiptStack = createStackNavigator();
const ReceiptScreenStack = ({navigation}:any) => (
    <ReceiptStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <ReceiptStack.Screen 
          name="Receipts" 
          component={ReceiptScreen}  
          options={{
            header: ()=>(<CustomHeader title="Receipt" navigation={navigation}/>),
          
                 
          }} />

    </ReceiptStack.Navigator>

)


export default ReceiptScreenStack

const styles = StyleSheet.create({})
