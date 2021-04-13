import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import SettingsScreen from '../screens/SettingsScreen';

const SettingsStack = createStackNavigator();
const SettingsScreenStack = ({navigation}:any) => (
    <SettingsStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <SettingsStack.Screen 
          name="Discounts" 
          component={SettingsScreen}  
          options={{
            header: ()=>(<CustomHeader title="Order History + Progress" navigation={navigation}/>),
          
                 
          }} />

    </SettingsStack.Navigator>

)


export default SettingsScreenStack

const styles = StyleSheet.create({})
