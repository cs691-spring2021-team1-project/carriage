import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import AddPaymentMethodScreen from '../screens/AddPaymentMethodScreen';

const AddPaymentMethodScreenStack = createStackNavigator();
const AddPaymentMethodScreenScreenStack = ({navigation}:any) => (
    <AddPaymentMethodScreenStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <AddPaymentMethodScreenStack.Screen 
          name="Add Payment" 
          component={AddPaymentMethodScreen}  
          options={{
            header: ()=>(<CustomHeader title="Add Payment Method" navigation={navigation}/>),
          
                 
          }} />

    </AddPaymentMethodScreenStack.Navigator>

)


export default AddPaymentMethodScreenScreenStack

const styles = StyleSheet.create({})
