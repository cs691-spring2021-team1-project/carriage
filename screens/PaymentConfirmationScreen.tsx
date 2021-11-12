import React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import { ActivityIndicator } from 'react-native-paper';
import { connect } from 'react-redux';
import {NavigationActions} from 'react-navigation'


const PaymentConfirmationScreen = (props:any)=> {
    const {clearCart} = props;
    const [isLoaded, setIsLoaded] = React.useState(false)
    const makePaymentWithCard = () =>{

    }


    const makePaymentWithApplePay = () =>{

    }


    React.useEffect(()=>{
           console.log(props.route.params.index,   props.route.params.card)
           setTimeout(() => {
               console.log("LOADED, navigating to home")
            setIsLoaded(true)
            clearCart()
           
          }, 3000);

          setTimeout(() => {
            console.log("navigating to home")
           
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'HomeDrawer' }],
              });
           
       }, 5000);
           

            
    },[isLoaded])


    if(!isLoaded){
        return(
          <View style={styles.container}>
               <Text style={styles.text}>Processing...</Text>
            <ActivityIndicator size="large" color="#f7f7f7"  />
          </View>
        )
      } 
    return (

        <View style={styles.container}>
            <Text style={styles.text}>SUCCESS</Text>
        </View>
    );
}
const mapStateToProps = (state:any) =>{
    return {
       cartItems: state,
       
    }
}

const mapDispatchToProps = (dispatch:any)=>{
  return{
      clearCart: (item:any)=> dispatch({type: 'CLEAR_CART'})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PaymentConfirmationScreen)


const styles = StyleSheet.create({ 
    container:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor: '#32965D'
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f7f7f7'

    }

})