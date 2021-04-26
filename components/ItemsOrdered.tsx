import React from 'react'
import { render } from 'react-dom';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons';

const ItemsOrdered = ({items, onPress}:any) => {
       
        const renderItems = items.map((item:any,i:number) =>
   
          (
        
           
                <View  key={i} style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text>1x {item['name']} </Text>
                <Text>{item['price']}</Text>
                <TouchableOpacity  onPress={()=> { onPress(item)}}>
     <Icon name="trash-bin-outline" size={20}></Icon>
     </TouchableOpacity>
                </View>
          
        
    
            )
       
      
     
    
 
  );



    return  (
    <View>

      {renderItems}
    </View>
    )
}

export default ItemsOrdered

const styles = StyleSheet.create({})
