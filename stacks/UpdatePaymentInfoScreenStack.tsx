import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import UpdatePaymentInfoScreen from '../screens/UpdatePaymentInfoScreen';

const UpdatePaymentInfoScreenStack = createStackNavigator();
const UpdatePaymentInfoScreenScreenStack = ({navigation}:any) => (
    <UpdatePaymentInfoScreenStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <UpdatePaymentInfoScreenStack.Screen 
          name="Update Payment" 
          component={UpdatePaymentInfoScreen}  
          options={{
            header: ()=>(<CustomHeader title="Update Paymentn" navigation={navigation}/>),
          
                 
          }} />

    </UpdatePaymentInfoScreenStack.Navigator>

)


export default UpdatePaymentInfoScreenScreenStack

const styles = StyleSheet.create({})
