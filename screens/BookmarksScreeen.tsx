import React from 'react'
import { StyleSheet, Text, View , Button} from 'react-native'

const BookmarksScreeen = () => {
    return (
        <View  style={styles.container}>
            <Text>Bookmarks</Text>
            <Button title="click here" onPress={()=> alert('Bookmarking')} />
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
