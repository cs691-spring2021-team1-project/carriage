
import React from 'react';
import { StyleSheet, Text, View, Alert, StatusBar } from 'react-native';
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
import { auth } from './firebase';
import { Auth } from './src/services';
import {useFonts} from 'expo-font';
import UpdateProfileScreenScreenStack from './stacks/UpdateProfileScreenStack';
import DeleteAccountScreenScreenStack from './stacks/DeleteAccountScreenStack';
import PaymentInfoScreenScreenStack from './stacks/PaymentInfoScreenStack';
import AddPaymentMethodScreenScreenStack from './stacks/AddPaymentMethodScreenStack';
import UpdatePaymentInfoScreenScreenStack from './stacks/UpdatePaymentInfoScreenStack';
import OrderProgressScreenStack from './stacks/OrderProgressScreenStack';

import RateItemScreenStack from './stacks/RateItemScreenStack';
import ReceiptScreenStack from './stacks/ReceiptScreenStack';
import CheckoutScreenStack from './stacks/CheckoutScreenStack';
import CartScreenStack from './stacks/CartScreenStack';
import PaymentConfirmationScreen from './screens/PaymentConfirmationScreen';

import PaymentSelectScreenStack from './stacks/PaymentSelectScreenStack';
import AccountStatusScreenScreenStack from './stacks/AccountStatusScreenStack';
import AddStoreToFavoritesScreenStack from './stacks/AddStoreToFavoritesScreenStack';

const Drawer = createDrawerNavigator();
 
export default function App() {
  
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  console.log("At App.tsx at: ", time)

  const [loaded] = useFonts({
    SFProDisplay: require('./assets/fonts/SFProDisplay-Regular.ttf'),
  });
  
  if (!loaded) {
      console.log("Was Font Loaded", loaded)
  }

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
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
    };
    case 'LOGOUT':
      return {
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false,
      };
    case 'REGISTER':
      return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
     
  }
}

const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)


const authContext = React.useMemo(()=>({
      signInToken: async (username:string, idToken:string)=>{
        try {
          // storage get ? 
          let UserAuth = await AsyncStorage.getItem(idToken)

          if(UserAuth){
            
            console.log("sign-in usertoken:",idToken)
                   
            dispatch({type: 'LOGIN', id: username, token: idToken})
          } else {
            
            console.log("Failed to retrieve token. Token doesn't exhist. ADDING IT", idToken)
            await AsyncStorage.setItem( idToken, username)
              .then(async ()=> {
                await AsyncStorage.setItem('userToken', idToken)
                let value = await AsyncStorage.getItem(idToken)
                console.log("AysncStorage: ", value)
                dispatch({type: 'LOGIN', id: username, token: idToken})
              })
              .catch((error) => {
                console.log("Could not add to AsyncStorage: ", error)
              })
            
        
          }
     
        }catch(e){
          console.log(e)
        }

      },
      signOut: async() => {

        // try {
         
        //   let jwtToken = "";
        //   auth.onAuthStateChanged(function(user) {
        //     if (user) {
        //       user.getIdToken().then(function(idToken) {  // <------ Check this line
        //           console.log('sign out',idToken); // It shows the Firebase token now
                 
              
                  
        //       });
        //     }
        //   });
         
        //   await AsyncStorage.removeItem(jwtToken);
        //   auth.signOut()
        //     // for cleanup
        //   // await AsyncStorage.clear()
        // } catch(e) {
    
        //   console.log(e);
        // }
        // emergency AZ-5 Button
        // await AsyncStorage.clear()

        let token = await Auth.getJWToken();
      
        if (!token) {
          console.log("getJWT did not work")
        }
        else {
          console.log("Token Found: ", token)
          let clearCacheResult = await Auth.clearCache(token)
          console.log("Clear Cache Result ", clearCacheResult)
          let firebaseSignoutResult =  await Auth.firebaseSignOut()
          console.log("Firebase Signout Result: ", firebaseSignoutResult)
        }
   
        dispatch({ type: 'LOGOUT' });
      },
      signUp: async (username:string, idToken:string)=>{
        try{
       
        // set userObject to storage 
        await AsyncStorage.setItem( idToken, username);
        await AsyncStorage.setItem('userToken', idToken)
        console.log("sign-up usertoken:" +  idToken, "signup user:"+username)
        dispatch({type: 'REGISTER', id: username, token: idToken})
        }catch(e){
          console.log("Could not add to AsyncStorage: ", e)
        }
    },

    deleteAccount: () => {
      dispatch({ type: 'LOGOUT' });
    }
  }), [])

  React.useEffect(()=> {
    console.log("checking firebase auth for user")
    const unsubscribe = auth.onAuthStateChanged((user:any)=>{
       if(user){
          user.getIdToken().then(function(idToken:any) {
            console.log("Token in UseEffect: ", idToken)
            dispatch({ type: 'RETRIEVE_TOKEN', token: idToken });
          });
          // navigate to home 
       } else {
         console.log("no user from firebase found")
       }
    })
    return unsubscribe
  },[])

  React.useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log("Error: ", e);
      }
      console.log('bootup user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if(loginState.isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#32965D'}}>
        <ActivityIndicator size="large" color="white"  />
      </View>
    )
  } 

  return (
    
    <Provider store={store}>
      <StatusBar hidden />
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
        <Drawer.Screen name="OrderProgress" component={OrderProgressScreenStack}/>
        <Drawer.Screen name="UpdateProfile" component={UpdateProfileScreenScreenStack}/>
        <Drawer.Screen name="DeleteAccount" component={DeleteAccountScreenScreenStack}/>
        <Drawer.Screen name="PaymentInfo" component={PaymentInfoScreenScreenStack}/>
        <Drawer.Screen name="AddPayment" component={AddPaymentMethodScreenScreenStack}/>
        <Drawer.Screen name="UpdatePayment" component={UpdatePaymentInfoScreenScreenStack}/>
        <Drawer.Screen name="RateItem" component={RateItemScreenStack}/>
        <Drawer.Screen name="Receipt" component={ReceiptScreenStack}/>
        <Drawer.Screen name="Cart" component={CartScreenStack}/>
        <Drawer.Screen name="Checkout" component={CheckoutScreenStack}/>
        <Drawer.Screen name="PaymentConfirmation" component={PaymentConfirmationScreen}/>
        <Drawer.Screen name="PaymentSelect" component={PaymentSelectScreenStack}/>
        <Drawer.Screen name="AccountStatus" component={AccountStatusScreenScreenStack}/>
        <Drawer.Screen name="AddStoreToFavorites" component={AddStoreToFavoritesScreenStack}/>
   
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
 

