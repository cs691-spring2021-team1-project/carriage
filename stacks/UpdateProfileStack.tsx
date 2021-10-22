import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';

const UpdateProfileScreenStack = createStackNavigator();
const UpdateProfileScreenScreenStack = ({navigation}:any) => (
    <UpdateProfileScreenStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <UpdateProfileScreenStack.Screen 
          name="Update Profile" 
          component={UpdateProfileScreen}  
          options={{
            header: ()=>(<CustomHeader title="Update Profile" navigation={navigation}/>),
          
                 
          }} />

    </UpdateProfileScreenStack.Navigator>

)


export default UpdateProfileScreenScreenStack

const styles = StyleSheet.create({})
