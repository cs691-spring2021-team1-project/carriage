import React from 'react'
import { Dimensions, StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import { Ionicons as Icon , MaterialCommunityIcons as MaterialIcons} from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'
const SplashScreen = ({navigation}:any) => {
    React.useEffect(() => {
        setTimeout(() => {
          navigation.navigate('SignInScreen');
         
        }, 2500);
      }, []);
    
    return (
        <View style={styles.container}>
              <Animatable.Image
                animation="bounceInLeft"
                duration={3000}
                source={require('../assets/App_Logo.png')}
                
                />

          
          
                      
          </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#32965D',

    },
   
})
