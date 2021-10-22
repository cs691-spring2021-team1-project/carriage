import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import DeleteAccountScreen from '../screens/DeleteAccountScreen';

const DeleteAccountScreenStack = createStackNavigator();
const DeleteAccountScreenScreenStack = ({navigation}:any) => (
    <DeleteAccountScreenStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <DeleteAccountScreenStack.Screen 
          name="Delete Account" 
          component={DeleteAccountScreen}  
          options={{
            header: ()=>(<CustomHeader title="Delete Account" navigation={navigation}/>),
          
                 
          }} />

    </DeleteAccountScreenStack.Navigator>

)


export default DeleteAccountScreenScreenStack

const styles = StyleSheet.create({})
