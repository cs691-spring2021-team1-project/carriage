import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import BookmarksScreen from '../screens/BookmarksScreeen';

const BookMarksScreenStack = createStackNavigator();
const BookMarksScreenScreenStack = ({navigation}:any) => (
    <BookMarksScreenStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <BookMarksScreenStack.Screen 
          name="Discounts" 
          component={BookmarksScreen}  
          options={{
            header: ()=>(<CustomHeader title="Bookmarked Orders" navigation={navigation}/>),
          
                 
          }} />

    </BookMarksScreenStack.Navigator>

)


export default BookMarksScreenScreenStack

const styles = StyleSheet.create({})
