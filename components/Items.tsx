import React from 'react'
import { render } from 'react-dom';
import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import Images from '../img/index';

import { LinearGradient } from 'expo-linear-gradient';

const Items = ({items, onPress}:any) => {
       
        const renderItems = items.map((item:any,i:number) =>{
        let imgSrc = Images.spinach;
        if(item['name']=='Sweet Potato'){
          imgSrc= Images.sweetpot
        } else if(item['name']=='Spinach'){
          imgSrc= Images.spinach
        }else if(item['name']=='Celery'){
          imgSrc= Images.celery
        }else if(item['name']=='Strawberries'){
          imgSrc= Images.strawberries
        }else if(item['name']=='Apples'){
          imgSrc= Images.apples
        }else if(item['name']=='Bananas'){
          imgSrc= Images.bananas
        }
   
       return   (
        
            <View key={i} style={[styles.item, {margin: 20}]}>
            <Image style={{width: 150, height: 150}} source={imgSrc}/>
            <Text>{item['name']} </Text>
                <Text>{item['price']}</Text>
                <TouchableOpacity key={i} onPress={()=> { onPress(item)}}>
       
               <View style={[styles.button, 
               ]}>
                 

                  
                 <LinearGradient colors={['#FFC250','#FFC250']}
                 style={[styles.gradient, {
                   
                    borderColor: 'black',
                    borderWidth: .5,
                    paddingHorizontal: 10
                }]}>
                     <Text style={[styles.btnText, {color:'black'}]}>Add To Cart</Text>

                 </LinearGradient>
           
               </View>
               </TouchableOpacity>
            
            </View>
               
    
             


           
  
   
          

    
            )
       
              }
     
    
 
  );



    return  (
    <View>

      {renderItems}
    </View>
    )
}

export default Items

const styles = StyleSheet.create({

  item: {
  
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
  
  },
  button:{
  
   alignSelf: 'center'
},
gradient:{
  
  

},
btnText:{
    fontSize: 20,
    fontWeight:'bold'
},
})
