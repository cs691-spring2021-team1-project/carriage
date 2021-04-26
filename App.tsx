
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';

import  DrawerContent  from "./screens/DrawerContent";
import BookmarksScreeenStack from './stacks/BookmarksScreenStack';
import SupportScreen from './screens/SupportScreen';
import OrderHistoryScreenStack from './stacks/OrderHistoryScreenStack';
import { ActivityIndicator } from 'react-native-paper';
import RootStackScreen from './screens/RootStackScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './components/context';
import {Provider} from 'react-redux'
import store from "./store";
import SettingsScreenStack from './stacks/SettingsScreenStack';

const Drawer = createDrawerNavigator();
 
export default function App() {
 const initialLoginState = {
  isLoading:true,
  userName: null,
  userToken: null,
}

const errorAlert = (title:string, msg:string) => {
  return Alert.alert(
     title,
     msg,
         [
             {
             text: "OK",
             onPress: () => console.log("OK Pressed"),
             style: "cancel"
             },
         ]
 );
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
        // should be api auth get    
        let userToken = null;

      
        try {
          // storage get ? 
          let UserAuth = await AsyncStorage.getItem(username)

          if(UserAuth){
            userToken = 'userToken'
            await AsyncStorage.setItem(
              'userToken', userToken)
            console.log("sign-in usertoken:",userToken)
          } else {
            errorAlert("Invalid Input" , "Username or Password is Invalid")
            console.log('no user exhists')
          }
     
        }catch(e){
          console.log(e)
        }
       
        dispatch({type: 'LOGIN', id: username, token: userToken})
      },
      signOut: async() => {
        try {
          await AsyncStorage.removeItem('userToken');
          // for cleanup
          // await AsyncStorage.clear()
        } catch(e) {
    
          console.log(e);
        }
   
        dispatch({ type: 'LOGOUT' });
      },
      signUp: async (username:string, password:string)=>{
        // should be input auth 
        let userToken = null;
        
        try {
        // check if user already exhists
        userToken = await AsyncStorage.getItem(username);
        if(userToken){
          console.log(userToken,"userToken gotten");
          errorAlert("Invalid Input" , "Username Already Taken")
          return;
          
        }   
            
        // set userObject to storage 
        await AsyncStorage.setItem( username, username);
        userToken = 'userToken'
        // create token
        await AsyncStorage.setItem(
          'userToken', userToken)

          console.log("sign-up usertoken:" +  userToken, "signup user:"+username)
        }catch(e){
          console.log(e)
        }

        dispatch({type: 'REGISTER', id: username, token: userToken})
     
    },
  }), [])

  React.useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      console.log('bootup user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, [])


  if(loginState.isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#32965D'}}>
        <ActivityIndicator size="large" color="white"  />
      </View>
    )
  } 

  return (
    
    <Provider store={store}>
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
               
     { loginState.userToken == null ? <RootStackScreen /> : 
 (
      <Drawer.Navigator drawerStyle={{width: 350}} drawerContent={props => <DrawerContent {...props}/>}>

        <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
        <Drawer.Screen name="Settings" component={SettingsScreenStack}/>
        <Drawer.Screen name="Bookmarks" component={BookmarksScreeenStack}/>
        <Drawer.Screen name="Support" component={SupportScreen}/>
        <Drawer.Screen name="OrderHistory" component={OrderHistoryScreenStack}/>
        
      </Drawer.Navigator>
 )
 }
 
    </NavigationContainer>

</AuthContext.Provider>
</Provider>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 

