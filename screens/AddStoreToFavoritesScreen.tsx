import React from 'react';
import {StyleSheet,Text, View, ImageBackground, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { JSONHandlers, Validators, Formatter } from '../src/Utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Listing from '../components/Listing';

const  AddStoreToFavoritesScreen = (props:any) => {

    // const { data_Being_passed } = props.navigation.state.params;
   
    

    return (
        
        <View> 
            <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >
              
            <View style={styles.container}>
            <Text style={styles.headerText}>Add Store To Favorites</Text>
                <ScrollView
                horizontal={false} 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{width: "100%"}}
                >
                    <View>
                        <Listing title="Popular" navigation={props.navigation}/>
                        <Listing title="Vegan"/>
                        <Listing title="Bodega"/>
                        <Listing title="Smoothies"/>
                        <Listing title="Fro-yo"/>  
                        <Listing title="Farmers Market" />
                    </View>
                </ScrollView>
            </View>
            </ImageBackground>
        </View>
       
    );
}

export default AddStoreToFavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        paddingTop: 10,
        paddingLeft: 10
      
     
      },
      bubble:{
        elevation: 15, 
        borderWidth:.5, 
        borderRadius:20,  
        paddingHorizontal:10,
        borderColor:'black', 
        backgroundColor: '#f7f7f7',
        minHeight: 200,
        flex: 1,
        padding:20
    
      },
      headerText:{
        fontSize:36, 
        fontWeight:"bold", 
        marginVertical:10
    
      },
      text:{
        fontSize: 20,
        fontWeight:'bold',
        alignItems: 'center'
    },
    inputContainer:{
        flexDirection: 'row',
        marginVertical: 10,
        borderBottomWidth: .25,
        borderBottomColor: "#000",
        paddingBottom: 5,
        backgroundColor: '#f7f7f7',
        borderRadius: 15,
        padding: 5,
        elevation: 5,
    
      
        

    },
    miniInputs: {
        display: "flex", 
        flexDirection:'row', 
        width: "100%", 
    
    
    },
    miniInputContainer:{
        flex:1, 
        padding: 10, 
        paddingLeft: 0

    },
    textInput:{
        flex:1,
        color: "black",
        fontSize: 20,
        paddingLeft: 5,
      

        
    },
    buttons:{
        flex:1,
        margin: 20,
        marginTop: 50
     },
     button:{
       alignItems: 'center',
    
       width: "100%",
       height: 39,
   },
   addCardBtn:{
       width: "100%",
       height: 39,
       justifyContent: 'center',
       alignItems:'center',
       borderRadius:0,
       paddingHorizontal: 10

   },

});