import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import AccountStatusScreen from '../screens/AccountStatusScreen';

const AccountStatusScreenStack = createStackNavigator();
const AccountStatusScreenScreenStack = ({navigation}:any) => (
    <AccountStatusScreenStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <AccountStatusScreenStack.Screen 
          name="Account Status" 
          component={AccountStatusScreen}  
          options={{
            header: ()=>(<CustomHeader title="Account Status" navigation={navigation}/>),
          
                 
          }} />

    </AccountStatusScreenStack.Navigator>

)


export default AccountStatusScreenScreenStack

const styles = StyleSheet.create({})
