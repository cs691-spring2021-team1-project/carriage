import React from 'react'
import { render } from 'react-dom';
import { StyleSheet, Text, View , TouchableOpacity, Image, ImageBackground} from 'react-native'
import Images from '../img/index';
import { Ionicons as Icon } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Items = ({items, onPress}:any) => {
       
  const renderItems = items.map((item:any,i:number) =>{
  let imgSrc = Images.spinach;
  if(item['name']=='Sweet Potato'){
    imgSrc= Images.sweetpot;
  } else if(item['name']=='Spinach'){
    imgSrc= Images.spinach;
  }else if(item['name']=='Celery'){
    imgSrc= Images.celery;
  }else if(item['name']=='Strawberries'){
    imgSrc= Images.strawberries;
  }else if(item['name']=='Apples'){
    imgSrc= Images.apples;
  }else if(item['name']=='Bananas'){
    imgSrc= Images.bananas;
  }
   
  return (

    <View key={i} style={[styles.item, {margin: 20}]}>
   <View>

   <Icon style={{alignSelf: 'flex-end', padding: 10}} 
   //name="heart" 
   name="heart-outline"
   color="#ff0000" size={30}></Icon>
   <ImageBackground style={{width: 300, height: 150, borderTopLeftRadius: 20, borderTopRightRadius:20}} source={imgSrc}/>
  
   </View>
    
    <Text style={styles.text}>{item['name']} </Text>
        <Text style={styles.text}>{item['price']}</Text>
        <TouchableOpacity key={i} onPress={()=> { onPress(item)}}>

        <View style={[styles.button, 
        ]}>
          

          
          <LinearGradient colors={['#FFC250','#FFC250']}
          style={[styles.gradient, {
            borderRadius: 20,
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
    
    
    padding: 10,
    paddingTop: 0,
    
    
   
    elevation: 5, 
    borderWidth:.25, 
    borderRadius:20,  
    margin: 5,
    borderColor:'black', 
    backgroundColor: '#f7f7f7',
    flex: 1,
    flexDirection: "column",
    width: 300, 
    alignItems: 'center'
  },
  itemText:{
      color: '#f7f7f7', 
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
    width: '100%',
   alignSelf: 'center',
   justifyContent:'center',
   alignItems:'center',
   margin: 5
},
gradient:{
    height: 45,
    width: '100%',
    alignContent:'center',
    justifyContent:'center'
  

},
btnText:{
    fontSize: 20,
    fontWeight:'bold',
    textAlign:'center'
},
text:{
  fontSize: 20,
  fontWeight: "bold"
}
})
