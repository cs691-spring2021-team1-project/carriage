
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';

import  DrawerContent  from "./screens/DrawerContent";
import SettingsScreen from './screens/SettingsScreen';
import BookmarksScreeen from './screens/BookmarksScreeen';
import SupportScreen from './screens/SupportScreen';

const Drawer = createDrawerNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerStyle={{width: 350}} drawerContent={props => <DrawerContent {...props}/>}>

        <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
        <Drawer.Screen name="Bookmarks" component={BookmarksScreeen}/>
        <Drawer.Screen name="Support" component={SupportScreen}/>
        
      </Drawer.Navigator>
 {
  /*
    <Stack.Navigator   screenOptions={{
             headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#e5e5e5',
        headerTitleStyle: {
          fontWeight: 'bold',
      
        },
      }}>
 
      <Stack.Screen 
      name="Home" 
      component={HomeScreen}  
      options={{
        title: 'Carriage',
   
      
      }} />
      <Stack.Screen name="Details" component={DetailsScreen}  options={{
      
        headerTitleAlign: 'left'
      
      }}/>
  
      </Stack.Navigator>
  */
 }
    
 
    </NavigationContainer>
 
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 

