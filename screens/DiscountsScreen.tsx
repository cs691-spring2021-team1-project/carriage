import React from 'react'
import { StyleSheet, Text, View ,Button, ImageBackground, Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const DiscountsScreen = ({navigation}:any) => {
    return (
       <View style={{flex:1}}>
  <ImageBackground style={{height: "100%"}} source={require("../assets/MasterBG.png")}>
        
             
          
         
   <View>
   <ImageBackground style={{height: "100%", margin: 30, 
                elevation: 5, shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1, 
            }} source={require("../assets/Rectangle50.png")}
            >
            
   <ScrollView
 showsVerticalScrollIndicator={true}
 showsHorizontalScrollIndicator={false}
 
 >
     <TouchableOpacity>

     <ImageBackground style={{height: 150, width:327, marginVertical: 10}} source={require("../assets/Produce.png")}>
             <View style={{flex:1, alignItems:'center', justifyContent:'center', width: 327, height: 150}}> 
          
                <Text style={{color: 'white', fontSize: 28, fontWeight:'bold'}}>Produce Deals</Text>
                </View>  
            </ImageBackground>
     </TouchableOpacity>

<ImageBackground style={{height: 150, width:327, marginVertical: 10}} source={require("../assets/Utensils.png")}>
             <View style={{flex:1, alignItems:'center', justifyContent:'center', width: 327, height: 150}}> 
          
                <Text style={{color: 'white', fontSize: 28, fontWeight:'bold'}}>Utensil Deals</Text>
                </View>  
            </ImageBackground>

            <ImageBackground style={{height: 150, width:327, marginVertical: 10}} source={require("../assets/Snacks.png")}>
             <View style={{flex:1, alignItems:'center', justifyContent:'center', width: 327, height: 150}}> 
          
                <Text style={{color: 'white', fontSize: 28, fontWeight:'bold'}}>Snack Deals</Text>
                </View>  
            </ImageBackground>
            <ImageBackground style={{height: 150, width:327, marginVertical: 10}} source={require("../assets/Aisle.png")}>
             <View style={{flex:1, alignItems:'center', justifyContent:'center', width: 327, height: 150}}> 
          
                <Text style={{color: 'white', fontSize: 28, fontWeight:'bold'}}>Deals by Aisle</Text>
                </View>  
            </ImageBackground>
            
            



</ScrollView>
        
         
</ImageBackground>
       </View>        

        
             


            </ImageBackground>
            
           
    
 
       </View>
       
    )
}

export default DiscountsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    }
})
