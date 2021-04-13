import React from 'react'
import { StyleSheet, Text, View , Image, ImageBackground} from 'react-native'
import { DrawerContentScrollView, DrawerItem  } from "@react-navigation/drawer";
import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';

import { Ionicons as Icon , MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../components/context';


const DrawerContent = (props: any) => {
const {signOut} = React.useContext(AuthContext)
    return (
  
 <View>
       <ImageBackground style={{height: "100%"}} source={require('../assets/Rectangle50.png')}>
     <View  style={{flex:1,         margin: 15}}>
     
          <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                  
                     <View style={{height: 48}}> 
                         <Text style={{fontSize: 24, fontWeight: 'bold'}}>Hello, User</Text>
                     </View>
                     
                       
                        
                   <Drawer.Section style={styles.drawerSection}>
               
              
                   <TouchableOpacity   onPress={()=> props.navigation.navigate('OrderHistory')}>
                       <View style={styles.drawerItem} >
                       <Text style={styles.drawerText} >View Order History</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
              
                  
                          </View>          
                       </TouchableOpacity>
        
                       <TouchableOpacity    onPress={()=> props.navigation.navigate('Bookmarks')}>
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text style={styles.drawerText}>Bookmarked Orders</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>
        
                       <TouchableOpacity    onPress={()=> props.navigation.navigate('Settings')}>
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text style={styles.drawerText}>Account Setting</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>
        

                       <TouchableOpacity    onPress={()=> props.navigation.navigate('Settings')}>
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text style={styles.drawerText}>App Settings</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>

                       <TouchableOpacity    onPress={()=> props.navigation.navigate('Support')}>
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text style={styles.drawerText}>Contact Customer Service</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>
                   
              
               
                 
        
              
       
   

                   </Drawer.Section>
              

               
                </View>
          </DrawerContentScrollView>
          <Drawer.Section style={styles.bottomDrawerSection}>
          <TouchableOpacity    onPress={()=> signOut()}>
                       <View style={{flexDirection: 'row', height: 48, alignItems: 'center'}}>
                       <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sign Out</Text>
                         <Image style={{marginHorizontal:5}} source={require('../assets/SeeMoreButton.png')} />
                
                  
                          </View>  
                       </TouchableOpacity>  
   
          </Drawer.Section>
        
          </View>
          </ImageBackground>
        </View>

 
   
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    drawerContent:{
        flex: 1,

    },
   
   
  
    drawerItem:{
      flexDirection: 'row', 
      height: 48, 
      alignItems: 'center',
     
    },
   drawerText:{
    fontSize: 24, 
    fontWeight: '500'
   },
    drawerSection:{
    
        flex: 1,
        justifyContent: 'center',
    
    },
    bottomDrawerSection:{
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
    },
    preference:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 12
    }

})
