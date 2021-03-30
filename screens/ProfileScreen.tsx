import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text>this is profile screen</Text>
            <Button title="click to profile" onPress={()=> alert(
                'profiling...'
            )}/>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        alignItems: 'center',
        justifyContent: 'center',
      },
})
