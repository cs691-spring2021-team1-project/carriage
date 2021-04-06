
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';

import  DrawerContent  from "./screens/DrawerContent";
import SettingsScreen from './screens/SettingsScreen';
import BookmarksScreeenStack from './stacks/BookmarksScreenStack';
import SupportScreen from './screens/SupportScreen';
import OrderHistoryScreenStack from './stacks/OrderHistoryScreenStack';
import { ActivityIndicator } from 'react-native-paper';
import RootStackScreen from './screens/RootStackScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './components/context';


const Drawer = createDrawerNavigator();
 
export default function App() {
 // const [isLoading, setIsLoading] = React.useState(true);
 // const [userToken, setUserToken] = React.useState<String | null>(null);
 const initialLoginState = {
  isLoading:true,
  userName: null,
  userToken: null,
}

const loginReducer = (prevState:any, action:any)=>{
  switch(action.type){
    case 'RETRIEVE_TOKEN':
      return{
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGIN':
        return{
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
    };
    case 'LOGOUT':
      return{
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false,
      };
    case 'REGISTER':
      return{
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
     
  }
}

const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)


const authContext = React.useMemo(()=>({
      signIn: async (username:any, password:any)=>{
        // should be api auth
        let userToken = null;
        
        if(username == 'user' && password== 'pass'){
               userToken = 'token';
               try {
                 await AsyncStorage.setItem(
                   'userToken', userToken
                 )
               }catch(e){
                 console.log(e)
               }
        } 
        dispatch({type: 'LOGIN', id: username, token: userToken})
      },
      signOut:()=>{
        dispatch({type: 'LOGOUT'})

      },
      signUp:()=>{
        // should be input auth 
     
    },
  }), [])

  React.useEffect(() => {
  setTimeout(async()=>{
      // setIsLoading(false);
    let userToken = null;

    try {
      userToken = await AsyncStorage.getItem(
        'userToken'
      )
    }catch(e){
      console.log(e)
    }
    dispatch({type: 'RETRIEVE_TOKEN', token: userToken})

  }, 1000)
  }, [])


  if(loginState.isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#32965D'}}>
        <ActivityIndicator size="large" color="white"  />
      </View>
    )
  } 

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
               
     { loginState.userToken == null ? <RootStackScreen /> : 
 (
      <Drawer.Navigator drawerStyle={{width: 350}} drawerContent={props => <DrawerContent {...props}/>}>

        <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
        <Drawer.Screen name="Bookmarks" component={BookmarksScreeenStack}/>
        <Drawer.Screen name="Support" component={SupportScreen}/>
        <Drawer.Screen name="OrderHistory" component={OrderHistoryScreenStack}/>
        
      </Drawer.Navigator>
 )
 }
 
    </NavigationContainer>

</AuthContext.Provider>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 

