import React from 'react'
import { StyleSheet, Text, View ,Button, ImageBackground, Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const CategoriesScreen = ({navigation}:any) => {
    return (
       
   <ImageBackground style={{height: "100%"}} source={require("../assets/MasterBG.png")}>
            <ImageBackground style={{height: "100%", margin: 30, 
                elevation: 5, shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1, 
            }} source={require("../assets/Rectangle50.png")}
            >
            
             
          
         
           
<ScrollView
 showsVerticalScrollIndicator={true}
 showsHorizontalScrollIndicator={false}>
     <View style={styles.container}> 

        <View style={styles.item}>
        <ImageBackground style={{ width:"100%", height: "100%"}} source={require("../assets/categories/Vegan.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Vegan</Text>
                </View>  
            </ImageBackground>

        </View>
        
        <View style={styles.item}>
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/FarmersMarket.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Farmers Market</Text>
                </View>  
            </ImageBackground>

        </View>

        <View style={styles.item}>
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/FishMarket.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Fish Market</Text>
                </View>  
            </ImageBackground>

        </View>

        <View style={styles.item}>
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/Soup.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Soup</Text>
                </View>  
            </ImageBackground>

        </View>
   
        <View style={styles.item}>
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/Deli.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Deli</Text>
                </View>  
            </ImageBackground>

        </View>

          <View style={styles.item}>
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/SuperMarket.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>SuperMarket</Text>
                </View>  
            </ImageBackground>

        </View>  

        <View style={styles.item}>
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/NightMarket.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>NightMarket</Text>
                </View>  
            </ImageBackground>

        </View>

        <View style={styles.item}>
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/Bazaar.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Bazaar</Text>
                </View>  
            </ImageBackground>

        </View>




     </View>
    

</ScrollView>
        
         
        
             

</ImageBackground>
            </ImageBackground>
            
           
    
       
    )
}

export default CategoriesScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start', // if you want to fill rows left to right
      justifyContent: 'center'
    },
    item: {
      width: 150, // is 50% of container width
      height: 150,
      margin: 3
    },
    itemText:{
        color: 'white', 
        fontSize: 36, 
        fontWeight:'bold', 
        textAlign:'center'
    },
    textContainer:{
        flex:1, 
        alignItems:'center', 
        justifyContent:'center',
    
    }
  })