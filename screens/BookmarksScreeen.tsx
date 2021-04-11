import React from 'react'
import { StyleSheet, Text, View , Button, ImageBackground, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Listing from '../components/Listing'

const BookmarksScreeen = () => {
    return (
            <View>
            <ImageBackground style={{height:"100%"}} source={require("../assets/MasterBG.png")}  >
            <View style={{height:158, width:"100%" }}>
            <ImageBackground style={{width: '100%', height: 158}} source={require('../assets/StoreBG1.png')}>
            <Text style={{fontSize:36, fontWeight:'bold', color:"#f7f7f7", margin: 5}}>Key Food</Text>

            </ImageBackground>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-between', margin: 10}}>
            <Image  source={require('../assets/Menu.png')} />
            <View style={{flexDirection:'row'}}>
            <Image  source={require('../assets/Search.png')} />
            <Image  source={require('../assets/Info-Button.png')} />


            </View>


            </View>

            <View style={{paddingLeft:20, paddingVertical:20}}>




            <View > 
            <Listing title="Past Orders" shape="square"/>

            </View>

            <View style={{backgroundColor: '#f7f7f7', marginVertical:20, paddingVertical:20}}>
            <ScrollView>
            <Listing title="Produce"/>
            <Listing title="Veggies"/>
            <Listing title="Produce"/>
            <Listing title="Veggies"/>
            <Listing title="Produce"/>
            <Listing title="Veggies"/>
            <Listing title="Produce"/>
            <Listing title="Veggies"/>
            </ScrollView>
            </View>




            </View>

            </ImageBackground>   


            </View>
    )
}

export default BookmarksScreeen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
