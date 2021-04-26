import React from 'react'
import { StyleSheet, Text, View , ImageBackground, ScrollView} from 'react-native'
import Items from '../components/Items';
import {connect} from 'react-redux'
import Images from '../img/index';



const ItemDetailsScreen = ({route, navigation, addItemToCart}:any) => {
    const { category, collection } = route.params;
    console.log(collection)
    return (
      
<View>
<ImageBackground style={{height: "100%"}} source={require("../assets/MasterBG.png")}>
    <View style={{padding:30}}>
    <ImageBackground style={{height: "100%",  
       elevation: 5, shadowColor: '#000',
       shadowOffset: { width: 0, height: 1 },
       shadowOpacity: 0.8,
       shadowRadius: 1, 
       borderColor: 'black',
       borderWidth: .25
   }} source={require("../assets/Rectangle50.png")}
   >
   
    
 

  
<ScrollView
showsVerticalScrollIndicator={true}
showsHorizontalScrollIndicator={false}>
<View style={styles.container}> 
    <Items items={collection}  onPress={addItemToCart}/>




</View>


</ScrollView>



    

</ImageBackground>
  

    </View>
   </ImageBackground>
   
      

</View>

                
  

            
           
  
    )
}

const mapDispatchToProps = (dispatch: any)=>{
        return {
            addItemToCart: (item:any)=>  dispatch({type: 'ADD_TO_CART', payload: item})
        }
}


export default connect(null, mapDispatchToProps)(ItemDetailsScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
        justifyContent: 'center'
      },
      item: {
        width: "50", // is 50% of container width
        height: 100,
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
