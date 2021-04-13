import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity , ImageBackground, ScrollView} from 'react-native'
import Images from '../img/index';

import { data } from "../Data";
const ShoppingCartScreen = ({navigation}:any) => {
  
    const inventory = data[0]['inventory']; // should be pass in as a prop from vendor listing data

  
    const listItems = inventory.map((d,i) =>
  
  
        (
        
    

          <TouchableOpacity key={i} onPress={()=> navigation.navigate('Item_Details',{category: d['catergory'], collection: d['collection'] })}>
 
       
       <ImageBackground style={{height: 150, width:327, marginVertical: 10}} source={  d['catergory']  == 'fruits' ? Images.fruit: Images.vegetable}>
               <View style={{flex:1, alignItems:'center', justifyContent:'center', width: 327, height: 150}}> 
            
                  <Text style={{color: 'white', fontSize: 28, fontWeight:'bold'}}>{d['catergory']}</Text>
                  </View>  
              </ImageBackground>
       </TouchableOpacity>

     

        )
        
        
  );
    return (
       
           
           
      

         <View style={{flex:1, height:'100%'}}>
             
         <ImageBackground style={{height: "100%"}} source={require("../assets/MasterBG.png")}>
               
                    
                 
                
          <View style={{flex:1, height:'100%',padding: 30}}>
          <ImageBackground style={{height: "100%", alignSelf:'center' , 
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
               {listItems}
         
       
       <ImageBackground style={{height: 150, width:327, marginVertical: 10}} source={require("../assets/Utensils.png")}>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center', width: 327, height: 150}}> 
                 
                       <Text style={{color: 'white', fontSize: 28, fontWeight:'bold'}}>Utensil</Text>
                       </View>  
                   </ImageBackground>
       
                   <ImageBackground style={{height: 150, width:327, marginVertical: 10}} source={require("../assets/Snacks.png")}>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center', width: 327, height: 150}}> 
                 
                       <Text style={{color: 'white', fontSize: 28, fontWeight:'bold'}}>Snacks</Text>
                       </View>  
                   </ImageBackground>
                   <ImageBackground style={{height: 150, width:327, marginVertical: 10}} source={require("../assets/Aisle.png")}>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center', width: 327, height: 150}}> 
                 
                       <Text style={{color: 'white', fontSize: 28, fontWeight:'bold'}}>Cleaning Supplies</Text>
                       </View>  
                   </ImageBackground>
                   
                   
       
       
       
       </ScrollView>
               
                
       </ImageBackground>
              </View>        
       
               
                    
       
       
                   </ImageBackground>
                   
                  
           
        
              </View>
    )
}

export default ShoppingCartScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    }
    
})
