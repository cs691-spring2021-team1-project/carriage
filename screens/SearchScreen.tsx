import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, ImageBackground , Image, ScrollView,TouchableOpacity} from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons';

const SearchScreen = () => {
    return (
        <View>
            <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >
            <View style={{marginVertical:20}}>
                    <View style={{height:57, width:385, flexDirection:'row'}}>
                        <View style={{flexDirection: 'row',marginHorizontal: 10 , alignItems:'center', backgroundColor: '#ffF', borderRadius: 15,width: 310, height: 57, borderColor: 'black', borderWidth: 1}}>
                        <Icon style={{marginHorizontal: 4}}name="search"  size={25}/>
                        <TextInput  style={{width: 310, fontSize:20}}placeholder="Fruit Loops" />
                        </View>
                        <TouchableOpacity>
                        <Image source={require('../assets/map1.png')}
                    style={{width: 45, height: 45}}  /> 
                        </TouchableOpacity>
              
                    </View>

                    <View style={{height:43, width: 372, flexDirection:"row", alignItems:'center', margin: 4}}>
                    <View style={{flexDirection: 'row',marginHorizontal: 10 , alignItems:'center', width: 310, height: 57}}>
                   
                        <Text style={{fontSize: 36, fontWeight: 'bold'}}>Results (6)</Text>
                        </View>

                        <TouchableOpacity>
                        <Image source={require('../assets/filter1.png')}
                        style={{width: 45, height: 45}}  /> 
                        </TouchableOpacity>
             
                        
                    </View>


                    <ImageBackground style={{width: "100%", margin: 3, 
                elevation: 6, shadowColor: '#000',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1, 
            }} source={require("../assets/Rectangle50.png")}
            >
            
             
          
         

     <ScrollView
 showsVerticalScrollIndicator={true}
 showsHorizontalScrollIndicator={false}

 >
          <View style={styles.container}>
    
          <View style={styles.item}>
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/Deli.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Deli</Text>
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
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/Deli.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Deli</Text>
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
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/Deli.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Deli</Text>
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
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/Deli.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Deli</Text>
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
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/Deli.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Deli</Text>
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
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/Deli.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Deli</Text>
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
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/Deli.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Deli</Text>
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
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/Deli.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Deli</Text>
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
        <ImageBackground style={{ width:"100%", height:"100%"}} source={require("../assets/categories/Deli.png")}>
             <View style={styles.textContainer}> 
          
                <Text style={styles.itemText}>Deli</Text>
                </View>  
            </ImageBackground>
        </View>



          </View>
    
</ScrollView>
           

        
         
        
             

</ImageBackground>


            </View>
         
        
           
            </ImageBackground>
         
      
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', 
        justifyContent: 'center'
      },
      item: {
        width: 150, 
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
