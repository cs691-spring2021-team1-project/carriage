import React from 'react'
import { render } from 'react-dom';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'

const ItemsOrdered = ({items, onPress}:any) => {
       
        const renderItems = items.map((item:any,i:number) =>
   
          (
        
            <TouchableOpacity key={i} onPress={()=> { onPress(item)}}>
                <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text>{item['name']} </Text>
                <Text>{item['price']}</Text>
    
                </View>
          
            </TouchableOpacity>
    
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
