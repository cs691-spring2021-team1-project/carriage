import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';


const ShoppingCartStack = createStackNavigator();
const ShoppingCartScreenStack = ({navigation}:any) => (
    <ShoppingCartStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <ShoppingCartStack.Screen 
          name="Categories" 
          component={ShoppingCartScreen}  
          options={{
            header: ()=>(<CustomHeader title="Categories" navigation={navigation}/>),
          
                 
          }} />

    </ShoppingCartStack.Navigator>

)


export default ShoppingCartScreenStack

const styles = StyleSheet.create({})
