import React from 'react';
import {Image,View,Text} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { Ionicons as Icon } from '@expo/vector-icons';
import { useFonts } from 'expo-font';


import HomeScreen from './HomeScreen';

import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SettingsScreen from './SettingsScreen';
import CategoriesScreen from './CategoriesScreen';
import DiscountsScreen from './DiscountsScreen';
import CustomHeader from '../components/CustomHeader';
import ShoppingCartScreen from './ShoppingCartScreen';
import ShoppingCartScreenStack from '../stacks/ShoppingCartScreenStack';
import ItemDetailsScreen from './ItemDetailsScreen';
import { Provider } from "react-redux";
import store from '../store';
import CartScreen from './CartScreen';


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DiscountsStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const SearchStack = createStackNavigator();
const SettingsStack = createStackNavigator();


const HomeScreenStack = ({navigation, route}:any) =>{
  let [fontsLoaded] = useFonts({
    'SF Pro Display Bold': require('../assets/fonts/SFProDisplay-Bold.ttf'),
    'SF Pro Display Regular': require('../assets/fonts/SFProDisplay-Regular.ttf'),
  });
  return (
    <HomeStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
      backgroundColor: '#32965D',
      borderBottomWidth: 0,
      borderBottomColor: 'transparent',
       elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
      
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
   
      },
    }}>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen}  
        options={{
        header: ()=>(<CustomHeader title="Home" navigation={navigation}/>),
      
      
      }} />

      <HomeStack.Screen 
        name="Item_Categories" 
        component={ShoppingCartScreen}  
        options={{
        header: ()=>(<CustomHeader title="Item Categories" navigation={navigation} route={route}/>),
      
      
      }} />

       
         <HomeStack.Screen 
        name="Item_Details" 
        component={ItemDetailsScreen}  
        options={{
        header: ()=>(<CustomHeader title="Items" navigation={navigation} route={route}/>),
      
      
      }} />
           <HomeStack.Screen 
        name="CartScreen" 
        component={CartScreen}  
        options={{
        header: ()=>(<CustomHeader title="Cart" navigation={navigation} route={route}/>),
      
      
      }} />
    
    
    
    </HomeStack.Navigator>
   
  )
    }
  const DiscountsScreenStack = ({navigation}:any) => (
        <DiscountsStack.Navigator   screenOptions={{
          headerTitleAlign: 'center',
          
          headerStyle: {
          backgroundColor: '#32965D',
          },
          headerTintColor: '#e5e5e5',
          headerTitleStyle: {
          fontWeight: 'bold',
        },
        }}>
        <DiscountsStack.Screen 
              name="Discounts" 
              component={DiscountsScreen}  
              options={{
                header: ()=>(<CustomHeader title="Coupons" navigation={navigation}/>),
              
                     
              }} />
    
        </DiscountsStack.Navigator>
   
  )

  const CategoriesScreenStack = ({navigation}:any) => (
    <CategoriesStack.Navigator   screenOptions={{
      headerTitleAlign: 'center',
      
      headerStyle: {
      backgroundColor: '#32965D',
      },
      headerTintColor: '#e5e5e5',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <CategoriesStack.Screen 
          name="Categories" 
          component={CategoriesScreen}  
          options={{
            header: ()=>(<CustomHeader title="Categories" navigation={navigation}/>),
          
                 
          }} />

    </CategoriesStack.Navigator>

)

const SearchScreenStack = ({navigation}:any) => (
  <SearchStack.Navigator   screenOptions={{
    headerTitleAlign: 'center',
    
    headerStyle: {
    backgroundColor: '#32965D',
    },
    headerTintColor: '#e5e5e5',
    headerTitleStyle: {
    fontWeight: 'bold',
  },
  }}>
  <SearchStack.Screen 
        name="Search" 
        component={SearchScreen}  
        options={{
          header: ()=>(<CustomHeader title="Search" navigation={navigation}/>),
        
               
        }} />

  </SearchStack.Navigator>

)


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
        name="Settings" 
        component={SettingsScreen}  
        options={{
          header: ()=>(<CustomHeader title="Profile & Settings" navigation={navigation}/>),
        
               
        }} />

  </SettingsStack.Navigator>

)


const MainTabScreen = () => (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="transparent"
    barStyle={{ backgroundColor: '#32965D', height:66 }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreenStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <TouchableOpacity>
          <Image source={require('../assets/MainMenu.png')} />
        </TouchableOpacity> 
      ),
      }}
    />
    <Tab.Screen
      name="Discounts"
      component={DiscountsScreenStack}
      
      options={{
        tabBarLabel: 'Discounts',
       
        tabBarIcon: ({ color }) => (
          <TouchableOpacity>
          <Image source={require('../assets/Coupons.png')} />
        </TouchableOpacity> 
      ),
      }}
    />
    <Tab.Screen
      name="Categories"
      component={CategoriesScreenStack}
      options={{
        tabBarLabel: 'Categories',
        tabBarIcon: ({ color }) => (
          <TouchableOpacity>
           <Image source={require('../assets/Categories.png')} />
         </TouchableOpacity> 
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreenStack}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => (
          <TouchableOpacity>
          <Image source={require('../assets/Search.png')} />
        </TouchableOpacity> 
   ),
      }}
    />
     <Tab.Screen
      name="User Settings"
      component={SettingsScreenStack}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color }) => (
         <TouchableOpacity>
           <Image source={require('../assets/UserSettings.png')} />
         </TouchableOpacity> 
        ),
      }}
    />
  </Tab.Navigator>
)

export default MainTabScreen;
