import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import AddStoreToFavoritesScreen from '../screens/AddStoreToFavoritesScreen';

const AddStoreToFavoritesStack = createStackNavigator();
const AddStoreToFavoritesScreenStack = ({navigation}:any) => (
    <AddStoreToFavoritesStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <AddStoreToFavoritesStack.Screen 
          name="Add Store To Favorites" 
          component={AddStoreToFavoritesScreen}  
          options={{
            header: ()=>(<CustomHeader title="Add Store to Favorites" navigation={navigation}/>),
          
                 
          }} />

    </AddStoreToFavoritesStack.Navigator>

)


export default AddStoreToFavoritesScreenStack

const styles = StyleSheet.create({})
