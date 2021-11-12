import React from 'react'
import { render } from 'react-dom';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons';

const ItemsOrdered = ({items, onPress}:any) => {
        const [processedItems, setProcessedItems] = React.useState([])
       // const [preItems, setPreItems] = React.useState({})
        React.useEffect(()=>{
        // preprocess items for quantity 1x 2x 3x 
     

if(items){
  let preItems  = {}
  console.log("PREITEMS",preItems)
    items.forEach((item:any) => {
      console.log('preitem', item['id'], item)
      console.log(`${item['id']} in preItems`,item['id'] in preItems)
      const thisID = item['id'];
      let thisItem = {...item};
      if(!(item['id'] in preItems)){
          console.log("item not in so adding")
        
         
          console.log("thisID", thisID)
          console.log("thisITEM", thisItem)
          thisItem['quantity'] = 1
          console.log("type of id", typeof(thisID))

       //   var preItems = {key1: "value1", key2: "value2"};
          Object.assign(preItems, {[thisID]: thisItem});   
        
           console.log("preitems after SET...", preItems)
      } else {
        console.log("item in so adding quantity")
       for(const [key,value] of Object.entries(preItems)){
        
        console.log(key, value)
       }
       Object.assign(preItems, {[thisID]: thisItem});         
        console.log("preitems after SET...", preItems)
      }
     
    });
   

/*
    items.foreach((item:any, index:number)=>{
    console.log("preItem", item['id'], item)

    // if item['name] and item['id'] exhists in preItems

    const id:number = item['id']
    console.log(id in preItems);
    if(id in preItems){
    // item quantity+1
    console.log("one more", item)
    item['quantity']+=1
    } 

    const pair = {id: item}
    Object.assign(preItems, pair)

    })

    let postItems = []
    for (const [key, value] of Object.entries(preItems)) {
    postItems.push(value)
    }
    */
}
       // setProcessedItems(postItems)
       
        },[])
     
       // processedItems
        const renderItems = items.map((item:any,i:number) =>
   
          (
        
           
          <View  key={i} style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', flex: 2,alignItems:'center', justifyContent:'space-between', maxWidth: "67%"}} >
            <Text>1x {item['name']} </Text>
            <Text>{item['price']}</Text>

            </View>

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
