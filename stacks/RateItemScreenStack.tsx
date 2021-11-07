import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import RateItemScreen from '../screens/RateItemScreen';

const RateItemStack = createStackNavigator();
const RateItemScreenStack = ({navigation}:any) => (
    <RateItemStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <RateItemStack.Screen 
          name="Discounts" 
          component={RateItemScreen}  
          options={{
            header: ()=>(<CustomHeader title="Rate Item" navigation={navigation}/>),
          
                 
          }} />

    </RateItemStack.Navigator>

)


export default RateItemScreenStack

const styles = StyleSheet.create({})
